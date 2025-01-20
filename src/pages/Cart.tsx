import { Typography, Grid2 as Grid } from "@mui/material";
import CartCard from "../components/CartCard";
interface CartItem {
  name: string;
  price: number;
  image: string;
  amount: number;
}

const Cart = () => {
  const cartItems: CartItem[] = [
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
    },
    {
      name: "Beef New york strip steak",
      price: 13.99,
      image:
        "https://www.traderjoes.com/content/dam/trjo/products/m20801/56224.png/jcr:content/renditions/webp-1280.webp",
      amount: 1,
    },
  ];
  // This page should be like a list of all the items in your cart. Vertically stacked, an image present, and like the price that gets computed at the end.

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Typography variant="h3">My cart</Typography>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <CartCard {...item} />
        ))}
      </Grid>
      <Typography variant="h6">Total: ${totalPrice}</Typography>
    </div>
  );
};

export default Cart;
