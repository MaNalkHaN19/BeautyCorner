import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import ProductsGrid from "../../components/product/products-grid";
import { getProducts, } from "../../lib/products";

async function Product() {
  const products = await getProducts();
  return <><ProductsGrid products={products} /></>;
}

export default async function products() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Organic Products, created
          <span className={classes.highlight}> for you</span>
        </h1>
        <p>Choose your desired product and try it yourself. </p>
        <p className={classes.cta}>
          <Link href="/products/share">Share Your Experience</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<h4 className={classes.loading}>Fetching products...</h4>}
        >
          <Product />
        </Suspense>
      </main>
    </>
  );
}
