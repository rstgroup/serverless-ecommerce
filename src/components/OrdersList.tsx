import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {
  ModelSortDirection,
  OrdersByUserQuery,
  OrdersByUserQueryVariables,
} from "../API";
import { getIntAsCurrency } from "./ItemCard";
import { makeStyles } from "@material-ui/core/styles";
import { ordersByUser } from "../graphql/queries";

type Props = {
  open: boolean;
  userId: string;
};

const useStyles = makeStyles({
  root: {
    "& td": {
      fontSize: ".6rem",
      overflow: "hidden",
    },
  },
});

type Order = {
  __typename: "Order";
  id: string;
  items?: {
    __typename: "ModelOrderItemsConnection";
    nextToken?: string | null;
  } | null;
  userId: string;
  date?: string | null;
  status?: string | null;
  totalOrder?: number | null;
  createdAt?: string | null;
  updatedAt: string;
};

const getOrders = async (userId: string): Promise<Order[]> => {
  const { data } = (await API.graphql(
    graphqlOperation(ordersByUser, {
      userId,
      sortDirection: ModelSortDirection.DESC,
    } as OrdersByUserQueryVariables)
  )) as { data: OrdersByUserQuery };

  return (data.ordersByUser?.items as Order[]) || [];
};

export const OrdersList: React.FC<Props> = ({ userId, open }) => {
  const classes = useStyles();
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    if (open) {
      getOrders(userId).then((result) => {
        setOrders(result);
      });
    }
  }, [userId, open]);

  return (
    <>
      {open && (
        <Box>
          <Table className={classes.root}>
            <TableHead>
              <TableRow>
                <TableCell>#ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>
                    {getIntAsCurrency(order.totalOrder || 0)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </>
  );
};
