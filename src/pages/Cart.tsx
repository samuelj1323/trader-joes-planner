import { Typography, Grid2 as Grid } from "@mui/material";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../features/store"; // Adjust the path
import { removeItem, updateQuantity, CartItem } from "../features/CartSlice";
import { SimpleProduct } from "../types";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // const cartItems = useSelector(cartSlice);
  // This page should be like a list of all the items in your cart. Vertically stacked, an image present, and like the price that gets computed at the end.

  const handleRemove = (item: CartItem) => {
    dispatch(removeItem(item.id));
  };

  const handleSubtract = (item: CartItem) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleAdd = (item: CartItem) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (acc: number, item: CartItem) =>
        acc +
        item.price_range.minimum_price.final_price.value.toFixed(2) *
          item.quantity,
      0
    );
  };

  return (
    <div>
      <Typography variant="h3">My cart</Typography>
      <Grid container spacing={2}>
        {cartItems.map((item: CartItem) => (
          <CartCard
            product={item}
            handleAddToCart={handleAdd}
            handleRemoveFromCart={handleRemove}
            handleSubtractFromCart={handleSubtract}
          />
        ))}
      </Grid>
      <Typography variant="h6">Total: ${totalPrice()}</Typography>
    </div>
  );
};

export default Cart;
