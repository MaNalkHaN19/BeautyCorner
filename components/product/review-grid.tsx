import classes from "./products-grid.module.css";
import React from "react";
import ReviewItems from "./ReviewItems";

// Define the type for the product item
interface Review {
  id: string;
  name: string;
  productname:string
  image: string;
  review: string;
}

interface ReviewGridProps {
  review: Review[];  // Expecting an array of Product objects
}

export default function ReviewGrid({review }: ReviewGridProps) {
  // Ensure products is an array before using map
  if (!Array.isArray(review)) {
    console.error("Expected an array for products, but received:", review);
    return null;  // You might want to return a fallback UI here
  }

  return (
    <ul className={classes.products}>
      {review.map((review) => (
        <li key={review.id}>
          <ReviewItems
            name={review.name}
            productname={review.productname}
            image={review.image}
            review={review.review}
            {...review}  
          />
        </li>
      ))}
    </ul>
  );
}
