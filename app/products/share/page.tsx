"use client";
import classes from "./page.module.css";
import { useFormState } from "react-dom";
import ImagePicker from "../../../components/product/imagepicker";
import { shareReview } from "../../../lib/review";
import ReviewFormSubmit from "../../../components/product/review-form-submit";
export default function ShareReviewPage() {
  const [state, useformaction] = useFormState(shareReview, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your{" "}
          <span className={classes.highlight}>reviews of product</span>
        </h1> 
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={useformaction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
          </div>
          <p>
            <label htmlFor="productname">Product Name</label>
            <input type="text" id="productname" name="productname" required />
          </p>
          <p>
            <label htmlFor="review">Input Review</label>
            <input type="text" id="review" name="review" required />
          </p>
          <ImagePicker label={"Product Image"} name={"image"} />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <ReviewFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
