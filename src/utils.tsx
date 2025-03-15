import { SimpleProduct } from "./types";

export const getImageUrl = (product: SimpleProduct) => {
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
