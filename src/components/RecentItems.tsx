import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listItems } from "../graphql/queries";
import { ItemCard } from "./ItemCard";
import { Box, Grid, Typography } from "@material-ui/core";
import { StateProps } from "../App";
import shopNowImage from "../assets/shop-now.gif";

type Props = {} & StateProps;

export const RecentItems: React.FC<Props> = ({ state, dispatch }) => {
  const [items, setItems] = useState([]);
  const fetch = async () => {
    const result = await API.graphql(graphqlOperation(listItems));
    setItems((result as any).data.listItems.items);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Box>
      <Box>
        <img src={shopNowImage} alt="Hot deal!" height={240} />
      </Box>
      <Grid container justify="space-evenly">
        {!items.length && (
          <Typography>
            Take a look around, but for hot items come back tomorrow!
          </Typography>
        )}
        {items.map((item, index) => (
          <ItemCard key={index} item={item} state={state} dispatch={dispatch} />
        ))}
      </Grid>
    </Box>
  );
};
