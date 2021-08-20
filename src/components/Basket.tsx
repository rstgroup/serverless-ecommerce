import React, { useCallback, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import {
  addToBasket,
  removeFromBasket,
  subtractFromBasket,
  toggleBasket,
  toggleOrders,
} from "../actions";
import { getIntAsCurrency } from "./ItemCard";
import { StateProps } from "../App";
import { Add, Remove, RemoveShoppingCart } from "@material-ui/icons";
import { CompleteOrder } from "./CompleteOrder";
import { OrdersList } from "./OrdersList";
import { useUserInfo } from "../hooks/useUserInfo";
import { Analytics } from "aws-amplify";

const drawerWidth = 560;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  listContainer: {
    width: drawerWidth,
    padding: `${theme.spacing(4)}px`,
  },
  value: {
    margin: `${theme.spacing(4)}px 0`,
  },
  itemActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: "1rem",
  },
}));

type Props = {} & StateProps;

export const Basket: React.FC<Props> = ({ state, dispatch }) => {
  const classes = useStyles();
  const [completeOrder, doCompleteOrder] = useState<boolean>(false);
  const user = useUserInfo();

  const handleDrawerClose = () => {
    dispatch(toggleBasket(false));
  };

  const handleBuy = useCallback(async () => {
    doCompleteOrder(true);

    await Promise.all([
      Analytics.updateEndpoint({
        address: user.attributes.email,
        attributes: {
          purchased: ["Yes"],
        },
        channelType: "EMAIL",
        optOut: "NONE",
        user: {
          userId: user.attributes.email,
          userAttributes: {
            username: [user.username],
          },
        },
      }),
      Analytics.updateEndpoint({
        address: user.attributes.phone_number,
        attributes: {
          purchased: ["Yes"],
        },
        channelType: "SMS",
        optOut: "NONE",
        user: {
          userId: user.attributes.email,
          userAttributes: {
            username: [user.username],
          },
        },
      }),
    ]);

    await Analytics.record({ name: "Checkout" });
  }, [doCompleteOrder, user]);

  return (
    <div className={classes.root}>
      <Drawer
        open={state.basket.open}
        anchor="right"
        onClose={handleDrawerClose}
        className={classes.drawer}
      >
        <div className={classes.listContainer}>
          <List>
            {!state.basket.items.length && (
              <Typography>
                Your basket is yet to be filled with our awesome items!
              </Typography>
            )}
            {state.basket.items.map((item, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid item md={6} className={classes.item}>
                    {item.name}
                  </Grid>
                  <Grid item md={6} className={classes.itemActions}>
                    <IconButton
                      className={classes.icon}
                      onClick={() =>
                        dispatch(
                          addToBasket(item.itemId, item.name, item.price)
                        )
                      }
                    >
                      <Add />
                    </IconButton>
                    <Box>{item.count}</Box>
                    <IconButton
                      className={classes.icon}
                      onClick={() =>
                        dispatch(subtractFromBasket(item.itemId, item.price))
                      }
                    >
                      <Remove />
                    </IconButton>
                    <IconButton
                      className={classes.icon}
                      onClick={() =>
                        dispatch(removeFromBasket(item.itemId, item.price))
                      }
                    >
                      <RemoveShoppingCart />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          {state.basket.items.length > 0 && (
            <>
              <Divider />
              <div className={classes.value}>
                Value of the basket: {getIntAsCurrency(state.basket.total)}
                <Box marginTop={2} className={classes.item}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={() => handleBuy()}
                  >
                    Buy
                  </Button>
                  <CompleteOrder
                    doComplete={completeOrder}
                    state={state}
                    dispatch={dispatch}
                    onComplete={() => {
                      doCompleteOrder(false);
                    }}
                  />
                </Box>
              </div>
            </>
          )}
          {user?.userId && (
            <Box mt={4}>
              <Button
                onClick={() => dispatch(toggleOrders(!state.orders.open))}
              >
                My orders
              </Button>
              <OrdersList open={state.orders.open} userId={user.userId} />
            </Box>
          )}
        </div>
      </Drawer>
    </div>
  );
};
