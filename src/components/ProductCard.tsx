import { useDispatch } from "react-redux";
import { addItem } from "../features/CartSlice";
import { SimpleProduct } from "../types";

const ProductCard = (product: SimpleProduct) => {
  const dispatch = useDispatch();
  const getImageUrl = (product: SimpleProduct) => {
    // Check if we have the primary_image field
    if (product.primary_image) {
      // If it's a full URL already
      if (product.primary_image.startsWith("http")) {
        return product.primary_image;
      }
      // If it's a relative path, construct full URL
      return `https://www.traderjoes.com${
        product.primary_image.startsWith("/") ? "" : "/"
      }${product.primary_image}`;
    }

    // Try with primary_image_meta if available
    if (product.primary_image_meta && product.primary_image_meta.url) {
      if (product.primary_image_meta.url.startsWith("http")) {
        return product.primary_image_meta.url;
      }
      return `https://www.traderjoes.com${
        product.primary_image_meta.url.startsWith("/") ? "" : "/"
      }${product.primary_image_meta.url}`;
    }

    // Fallback to placeholder
    return "https://placehold.co/200x200?text=No+Image";
  };
  const handleAddToCart = (product: SimpleProduct) => {
    dispatch(addItem(product));
  };
  return (
    <div key={product.sku} className="product-card">
      <img
        src={getImageUrl(product)}
        alt={product.item_title}
        className="product-image"
        onError={(e) => {
          e.target.src = "https://placehold.co/200x200?text=No+Image";
        }}
      />
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
      <button onClick={() => handleAddToCart(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
