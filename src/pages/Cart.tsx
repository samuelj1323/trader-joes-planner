import { Typography, Grid2 as Grid } from "@mui/material";
import CartCard, { CartItem } from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../features/CartSlice";
import { RootState } from "../features/store"; // Adjust the path
import ProductCard, { productType } from "../components/ProductCard";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // const cartItems = useSelector(cartSlice);
  // This page should be like a list of all the items in your cart. Vertically stacked, an image present, and like the price that gets computed at the end.

  const handleRemove = (item: CartItem) => {
    const newList = cartItems.filter((i: CartItem) => {
      return i.id !== item.id;
    });
    dispatch(setCartItems(newList));
  };

  const handleSubtract = (item: CartItem) => {
    const newList = cartItems.map((i: CartItem) => {
      if (i.id === item.id) {
        if (i.amount > 1) return { ...i, amount: i.amount - 1 };
        else return { ...i, amount: 0 };
      }
      return i;
    });
    dispatch(setCartItems(newList));
  };

  const handleAdd = (item: CartItem) => {
    const newList = cartItems.map((i: CartItem) => {
      if (i.id === item.id) {
        return { ...i, amount: i.amount + 1 };
      }
      return i;
    });
    dispatch(setCartItems(newList));
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.amount,
      0
    );
  };

  return (
    <div>
      <Typography variant="h3">My cart</Typography>
      <Grid container spacing={2}>
        {cartItems.map((item: productType) => (
          <ProductCard {...item} />
        ))}
      </Grid>
      <Typography variant="h6">Total: ${totalPrice()}</Typography>
    </div>
  );
};

export default Cart;
