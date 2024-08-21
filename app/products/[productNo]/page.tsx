import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getProductDetail, getProducts } from "../../../lib/products";
import { notFound } from "next/navigation";

export async function generateMetadata({params}){
  const product = getProductDetail(params.productNo);
  if(!product){
    notFound()
  };
  
  return{
    title: product.title,
    summary: product.summary,
  }
}

export default function ProductPage({ params }) {
  const product = getProductDetail(params.productNo);

  if (!product) {
    return notFound(); // Ensure notFound() correctly handles missing products
  }

  return (
    <>
      <header className={classes.header}>
        {product.image && (
          <div className={classes.image}>
            <Image fill src={product.image} alt={product.title} />
          </div>
        )}
        <div className={classes.headerText}>
          <h1>{product.title}</h1>
          <p className={classes.summary}>{product.summary}</p>
        </div>
      </header>
      <main></main>
    </>
  );
}

