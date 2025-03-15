export interface CategoryTree {
  id: number;
  name: string;
  __typename: "CategoryTree";
}

export interface Money {
  currency: "USD";
  value: number;
  __typename: "Money";
}

export interface ProductPrice {
  final_price: Money;
  __typename: "ProductPrice";
}

export interface PriceRange {
  minimum_price: ProductPrice;
  __typename: "PriceRange";
}

export interface ImageMetadataSrcSetItem {
  src: string;
  media: string;
  type: string;
}

export interface ImageMetadata {
  src: string;
  srcSet: ImageMetadataSrcSetItem[];
  alt: string;
  srcOriginal: string;
}

export interface ImageWithMeta {
  url: string;
  metadata: string; // Or you could parse it into ImageMetadata if needed.
  __typename: "ImageWithMeta";
}

export interface SimpleProduct {
  sku: string;
  item_title: string;
  category_hierarchy: CategoryTree[];
  primary_image: string;
  primary_image_meta: ImageWithMeta;
  sales_size: number;
  sales_uom_description: "Oz";
  price_range: PriceRange;
  retail_price: string;
  fun_tags: string[];
  item_characteristics: string[];
  __typename: "SimpleProduct";
}

// Example usage (if you have the JSON as a string):
// const jsonData: string = `{ ... your JSON string ... }`;
// const product: SimpleProduct = JSON.parse(jsonData);
