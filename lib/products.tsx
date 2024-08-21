import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("products.db");

// Function to get all products
export function getProducts() {
  return db.prepare("SELECT * FROM products").all();
}

// Function to get a product by slug
export function getProductDetail(slug: string) {
  return db.prepare("SELECT * FROM products WHERE slug = ?").get(slug);
}

// Function to save a review
export function saveReview(reviews: {
  slug?:string;
  name?: string;
  review?: string;
  productname: string;
  image:any;
}) {
  if (typeof reviews.name === "string" && reviews.name.trim() !== "") {
    reviews.slug = slugify(reviews.name, { lower: true });
  } else {
    console.error("Received review data:", reviews);
    throw new Error(
      `Invalid or missing name for review slugification: ${reviews.name}`
    );
  }

  if (typeof reviews.review === "string") {
    reviews.review = xss(reviews.review);
  } else {
    throw new Error("Invalid or missing review text");
  }

  // Insert into the database
  const insert = db.prepare(
    "INSERT INTO review ( name, productname, review,image) VALUES ( ?, ?, ?,?)"
  );
  insert.run(reviews.name, reviews.productname, reviews.review,reviews.image);
}

// Function to get all reviews
export function getReviews() {
  return db.prepare("SELECT * FROM review").all();
}
