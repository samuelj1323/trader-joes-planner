import {
  Grid2 as Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { SimpleProduct } from "../types";
import { getImageUrl } from "../utils";

interface CartCardProps {
  product: SimpleProduct;
  handleRemoveFromCart: (item: SimpleProduct) => void;
  handleAddToCart: (item: SimpleProduct) => void;
  handleSubtractFromCart: (item: SimpleProduct) => void;
}
const CartCard = ({
  product,
  handleRemoveFromCart,
  handleAddToCart,
  handleSubtractFromCart,
}: CartCardProps) => {
  return (
    <Grid size={4}>
      <Card>
        <CardMedia>
          <img
            src={getImageUrl(product)}
            alt={product.item_title}
            className="product-image"
            onError={(e) => {
              e.target.src = "https://placehold.co/200x200?text=No+Image";
            }}
          />
        </CardMedia>

        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></div>
        </CardContent>
        <h3>{product.item_title}</h3>
        <p className="product-size">
          {product.sales_size} {product.sales_uom_description}
        </p>
        {product.price_range && product.price_range.minimum_price && (
          <p className="product-price">
            ${product.price_range.minimum_price.final_price.value.toFixed(2)}
          </p>
        )}
        {product.fun_tags && product.fun_tags.length > 0 && (
          <div className="product-tags">
            {product.fun_tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <CardActions>
          <Button
            style={{ textTransform: "none" }}
            onClick={() => handleSubtractFromCart(product)}
          >
            <RemoveIcon />
          </Button>
          <Typography variant="body1">{product.quantity}</Typography>
          <Button
            style={{ textTransform: "none" }}
            onClick={() => handleAddToCart(product)}
          >
            <AddIcon />
          </Button>
          <Button onClick={() => handleRemoveFromCart(product)}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartCard;
