import Image from "next/image";
import classes from "./product-items.module.css";

export default function ReviewItem({ review }) {
  return (
    <article className={classes.products}>
      <header>
        <div className={classes.image}>
          <Image src={review.image} alt={""} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{review.productname}</h2>
        </div>
        <div className={classes.headerText}>
          <h2>{review.name}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{review.review}</p>
      </div>
    </article>
  );
}
