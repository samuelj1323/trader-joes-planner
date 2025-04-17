import { useDispatch } from "react-redux";
import { addItem } from "../features/CartSlice";
import { SimpleProduct } from "../types";
import { getImageUrl } from "../utils";
import toast from "react-hot-toast";

const ProductCard = (product: SimpleProduct) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: SimpleProduct) => {
    dispatch(addItem(product));
    toast.success(`${product.item_title} added to cart!`);
  };

  return (
    <div key={product.sku} className="product-card">
      <img
        src={getImageUrl(product)}
        alt={product.item_title}
        className="product-image"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://placehold.co/200x200?text=No+Image";
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
      <button
        className="search-button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
