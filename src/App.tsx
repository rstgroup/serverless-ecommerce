import React, { Dispatch, useReducer } from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import { RecentItems } from "./components/RecentItems";
import AmplifyConfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import "@aws-amplify/ui/dist/style.css";
import { Basket } from "./components/Basket";
import { Container, Fab } from "@material-ui/core";
import { defaultState, reducer, State } from "./reducer";
import { Action, toggleBasket } from "./actions";
import { OrderNotification } from "./components/OrderNotification";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

Amplify.configure(AmplifyConfig);

export type StateProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

const useStyles = makeStyles({
  basketFab: {
    bottom: "2rem",
    position: "sticky",
  },
});

function App() {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, defaultState);
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <RecentItems state={state} dispatch={dispatch} />
      </Container>
      <Basket state={state} dispatch={dispatch} />
      <OrderNotification state={state} dispatch={dispatch} />
      <Fab
        className={classes.basketFab}
        onClick={() => dispatch(toggleBasket(true))}
      >
        <ShoppingCart />
      </Fab>
    </div>
  );
}

export default withAuthenticator(App, {
  includeGreetings: true,
  usernameAttributes: "email",
} as any);
