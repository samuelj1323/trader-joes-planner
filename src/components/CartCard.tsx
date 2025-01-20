import {
  Grid2 as Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
const CartCard = (item: CartItem) => {
  return (
    <Grid size={4}>
      <Card>
        <CardMedia
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <img
            style={{ maxWidth: 200, width: "100%" }}
            src={item.image}
            alt={item.name}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="body1">{"$" + item.price}</Typography>
          <Typography variant="body1">{item.amount}</Typography>
        </CardContent>
        <CardActions>
          <Button style={{ textTransform: "none" }}>
            + <Typography>Add More</Typography>
          </Button>
          <Button style={{ textTransform: "none" }}>Remove</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartCard;
