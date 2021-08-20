import { StateProps } from "../App";
import { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import {
  CreateOrderInput,
  CreateOrderItemsInput,
  CreateUserInput,
  GetUserQueryVariables,
  OrderStatus,
} from "../API";
import { API, Auth, graphqlOperation } from "aws-amplify";
import {
  createOrder,
  createOrderItems,
  createUser,
} from "../graphql/mutations";
import { getUser } from "../graphql/queries";
import { State } from "../reducer";
import { clearBasket, toggleOrders } from "../actions";

type Props = {
  onComplete: () => void;
  doComplete: boolean;
} & StateProps;

const putUser = async (user: any) => {
  let apiUser;

  try {
    apiUser = await API.graphql(
      graphqlOperation(getUser, {
        id: user.attributes.sub,
      } as GetUserQueryVariables)
    );
  } catch (e) {
  } finally {
    if (!(apiUser as any)?.data?.getUser) {
      await API.graphql(
        graphqlOperation(createUser, {
          input: {
            id: user.attributes.sub,
            email: user.attributes.email,
          } as CreateUserInput,
        })
      );
    }
  }
};

const placeOrder = async (basket: State["basket"]) => {
  if (!basket.items.length) {
    return Promise.reject("Empty basket!");
  }

  const user = await Auth.currentUserInfo();
  await putUser(user);

  const minutes = (new Date().getMinutes() % 10) + 15;
  const seconds = new Date().getSeconds();

  let date = new Date(`2021-08-25 20:${minutes}:${seconds}`).toISOString();
  const order = await API.graphql(
    graphqlOperation(createOrder, {
      input: {
        userId: user.attributes.sub,
        totalOrder: basket.total,
        status: OrderStatus.NEW,
        date,
        createdAt: date,
      } as CreateOrderInput,
    })
  );

  const orderId: string | undefined = (order as any)?.data["createOrder"]?.id;
  if (orderId) {
    const promises = basket.items.map(
      (item) =>
        new Promise<void>(async (resolve) => {
          await API.graphql(
            graphqlOperation(createOrderItems, {
              input: {
                orderId,
                itemId: item.itemId,
                count: item.count,
                name: item.name,
                total: item.price * item.price,
              } as CreateOrderItemsInput,
            })
          );
          resolve();
        })
    );
    await Promise.all(promises);
  }

  return order;
};

export const CompleteOrder: React.FC<Props> = ({
  state,
  dispatch,
  onComplete,
  doComplete,
}) => {
  const [dialogOpen, toggleDialog] = useState<boolean>(false);
  const [inProgress, toggleInProgress] = useState<boolean>(false);
  const [message, setMessage] = useState<any>();

  useEffect(() => {
    if (doComplete && !inProgress) {
      toggleInProgress(true);
      placeOrder(state.basket)
        .then((order) => {
          const info = (order as any).data["createOrder"];
          setMessage(
            <>
              The order, you placed, has been assigned with an ID of {info.id}.{" "}
              <br />
              <br />
              Thank you and have a good day!
            </>
          );
          dispatch(toggleOrders(true));
          onComplete();
        })
        .catch((reason) => {
          setMessage(JSON.stringify(reason));
        })
        .finally(() => {
          toggleInProgress(false);
          toggleDialog(true);
        });
    }
  }, [doComplete, onComplete, inProgress, state, dispatch]);

  const handleClose = () => toggleDialog(false);

  return (
    <>
      {inProgress && <CircularProgress />}
      <Dialog open={dialogOpen}>
        <DialogTitle>Your order</DialogTitle>
        <DialogContent>
          <Typography>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              dispatch(clearBasket());
            }}
            color="primary"
          >
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
