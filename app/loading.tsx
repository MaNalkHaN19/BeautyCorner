import React from "react";
import classes from "./loading.module.css";

export default function ProductsLoadingPage() {
  return (
    <>
      <h4 className={classes.loading}>Fetching products...</h4>
    </>
  );
}
