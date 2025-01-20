import { useState, useCallback } from "react";
import { Typography, Grid2 as Grid } from "@mui/material";
import CartCard, { CartItem } from "../components/CartCard";

const Cart = () => {
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
  const [cartItems, setCartItems] = useState(initialCartItems);
  // This page should be like a list of all the items in your cart. Vertically stacked, an image present, and like the price that gets computed at the end.

  const totalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  const handleRemove = (item: CartItem) => {
    const newList = cartItems.filter((i) => {
      return i.id !== item.id;
    });
    setCartItems(newList);
  };
  const handleSubtract = (item: CartItem) => {
    const newList = cartItems.map((i) => {
      if (i.id === item.id) {
        return { ...i, amount: i.amount - 1 };
      }
      return i;
    });
    setCartItems(newList);
  };
  const handleAdd = (item: CartItem) => {
    const newList = cartItems.map((i) => {
      if (i.id === item.id) {
        return { ...i, amount: i.amount + 1 };
      }
      return i;
    });
    setCartItems(newList);
  };

  return (
    <div>
      <Typography variant="h3">My cart</Typography>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
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
