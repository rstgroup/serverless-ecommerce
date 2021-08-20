import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Item } from "../API";
import { addToBasket } from "../actions";
import { StateProps } from "../App";
import { AddShoppingCart } from "@material-ui/icons";
import { useUserInfo } from "../hooks/useUserInfo";
import { useCallback } from "react";
import { Analytics } from "aws-amplify";

type Props = {
  item: Item;
} & StateProps;

export const getIntAsCurrency = (value: number) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(value);

const useStyles = makeStyles({
  root: {
    minWidth: "180px",
    maxWidth: "320px",
    margin: "1rem 2rem",
  },
});

export const ItemCard: React.FC<Props> = ({ item, dispatch }) => {
  const { id: itemId, title, photoPath, price, itemDescription } = item;
  const classes = useStyles();
  const user = useUserInfo();

  const handleAddToBasket = useCallback(async () => {
    console.log({ user });
    dispatch(addToBasket(itemId, title, price));

    await Analytics.updateEndpoint({
      address: user.attributes.email,
      attributes: {
        purchased: ["No"],
      },
      channelType: "EMAIL",
      optOut: "NONE",
      user: {
        userId: user.attributes.email,
        userAttributes: {
          username: [user.username],
        },
      },
    });

    await Analytics.record({ name: "AddToBasket" });
  }, [dispatch, itemId, title, price, user]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {photoPath && (
          <CardMedia component="img" image={photoPath} title={title} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {itemDescription && (
            <Typography variant="body2" color="textSecondary" component="p">
              {itemDescription}
            </Typography>
          )}
          <Typography gutterBottom variant="h5" component="h2">
            {getIntAsCurrency(price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => handleAddToBasket()}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
