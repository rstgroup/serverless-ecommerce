import { useEffect, useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { onUpdateOrder } from "../graphql/subscriptions";
import Observable from "zen-observable-ts";
import { ZenObservable } from "zen-observable-ts/lib/types";
import { Button, Snackbar } from "@material-ui/core";
import { OnUpdateOrderSubscription } from "../API";
import { useUserInfo } from "../hooks/useUserInfo";
import { StateProps } from "../App";
import { toggleOrders } from "../actions";

type Props = {} & StateProps;

export const OrderNotification: React.FC<Props> = ({ dispatch }) => {
  const listener = useRef<ZenObservable.Subscription | undefined>();
  const [orderId, setOrderId] = useState<string | undefined>();
  const [open, toggleOpen] = useState<boolean>(false);
  const { userId } = useUserInfo();

  useEffect(() => {
    (async () => {
      const obs = API.graphql(graphqlOperation(onUpdateOrder));

      if (obs instanceof Observable) {
        listener.current = obs.subscribe({
          next: (payload) => {
            const order = (
              payload as { value: { data: OnUpdateOrderSubscription } }
            ).value.data.onUpdateOrder;

            if (userId && userId === order?.userId) {
              setOrderId(order?.id);
              toggleOpen(true);
            }
          },
        });
      }
    })();

    return () => {
      listener.current?.unsubscribe();
    };
  }, [userId]);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={10e3}
        message={
          orderId
            ? `Order ${orderId} has just been updated!`
            : "One of your orders has just been updated!"
        }
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => {
              toggleOpen(false);
              dispatch(toggleOrders(true));
            }}
          >
            Sweet!
          </Button>
        }
        onClose={() => {
          toggleOpen(false);
          setOrderId(undefined);
        }}
      />
    </>
  );
};
