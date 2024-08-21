import Link from "next/link";
import Image from "next/image";
import classes from "./product-items.module.css";

export default function ProductItem({ title, slug, image, summary }) {
  return (
    <article className={classes.products}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/products/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
