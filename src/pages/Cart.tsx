import { useEffect } from "react";
import { Typography, Grid2 as Grid } from "@mui/material";
import CartCard, { CartItem } from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../context/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const initialCartItems: CartItem[] = [
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
      id: 1,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
      id: 2,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
      id: 3,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
      id: 4,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
      id: 5,
    },
  ];
  useEffect(() => {
    dispatch(setCartItems(initialCartItems));
  }, []);

  const cartItems = useSelector((state: any) => state.cart.cartItems);
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
        {cartItems.map((item: CartItem) => (
          <CartCard
            key={item.id}
            item={item}
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
