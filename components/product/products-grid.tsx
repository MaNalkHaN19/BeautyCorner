import classes from "./products-grid.module.css";
import ProductItems from "./product-items";
import React from "react";

// Define the type for the product item
interface Product {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
}

interface ProductGridProps {
  products: Product[];  // Expecting an array of Product objects
}

export default function ProductGrid({ products }: ProductGridProps) {
  // Ensure products is an array before using map
  if (!Array.isArray(products)) {
    console.error("Expected an array for products, but received:", products);
    return null;  // You might want to return a fallback UI here
  }

  return (
    <ul className={classes.products}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItems
            title={product.title}
            slug={product.slug}
            image={product.image}
            summary={product.summary}
            {...product}  // Spread the remaining properties
          />
        </li>
      ))}
    </ul>
  );
}
