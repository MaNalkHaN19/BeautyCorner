import React, { Suspense } from "react";
import classes from "./page.module.css";
import {  getReviews, } from "../../lib/products";
import ReviewItem from "../../components/product/ReviewItems";

async function Reviews() {
  const reviews = await getReviews();
  return <ReviewItem review={reviews} />;
}

export default async function reviews() {
  return (
    <>
      <header className={classes.header}>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<h4 className={classes.loading}>Fetching reviews...</h4>}
        >
          <Reviews />
        </Suspense>
      </main>
    </>
  );
}
