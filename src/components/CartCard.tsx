import {
  Grid2 as Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
export interface CartItem {
  name: string;
  price: number;
  image: string;
  amount: number;
  id: number;
}
interface CartCardProps {
  item: CartItem;
  handleRemoveFromCart: (item: CartItem) => void;
  handleAddToCart: (item: CartItem) => void;
  handleSubtractFromCart: (item: CartItem) => void;
}
const CartCard = ({
  item,
  handleRemoveFromCart,
  handleAddToCart,
  handleSubtractFromCart,
}: CartCardProps) => {
  return (
    <Grid size={4}>
      <Card>
        <CardMedia
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <img
            style={{ maxWidth: 200, width: "100%" }}
            src={item?.image}
            alt={item?.name}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h5">{item?.name}</Typography>
          <Typography variant="body1">{"$" + item?.price}</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleSubtractFromCart(item)}
            >
              <RemoveIcon />
            </Button>
            <Typography variant="body1">{item.amount}</Typography>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => handleAddToCart(item)}
            >
              <AddIcon />
            </Button>
            <Button onClick={() => handleRemoveFromCart(item)}>
              <DeleteIcon />
            </Button>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default CartCard;
