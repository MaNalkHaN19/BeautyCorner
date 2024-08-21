const sql = require("better-sqlite3");

// Define the type for the product objects
interface Product {
  title: string;
  slug: string;
  image: string;
  summary: string;
}

// Initialize the database
const db = sql("products.db");

// Function to get all products
export function getProducts(): Product[] {
  return db.prepare("SELECT * FROM products").all();
}

// Dummy products data
const dummyProducts: Product[] = [
  {
    title: "Face Cream",
    slug: "face-cream",
    image: "/images/DailyHarmony.jpg",
    summary: "Daily Harmony face cream keeps your face nourished and healthy.",
  },
  {
    title: "Essence Facial Mist",
    slug: "facial-mist",
    image: "/images/Essence.jpg",
    summary:
      "Essence facial mist is a must-have. The rose water helps skin glow and have final finish of youe elegant makeover!",
  },
  {
    title: "Face Wash",
    slug: "face-wash",
    image: "/images/FaceWash.jpg",
    summary:
      "Gentle Face Wash with Aloe Vera and Vitamin E helps on acne prone skin and keep it hydrated.",
  },
  {
    title: "Argan Hair Oil",
    slug: "hair-oil",
    image: "/images/HairOil.jpg",
    summary:
      "Argan Hair Oil gives the special shine to your hair and keep them healthy.",
  },
  {
    title: "Makeup Remover",
    slug: "makeup-remover",
    image: "/images/MakeupRemover.jpg",
    summary:
      "Gentle Makeup Remover with Micellar Water removes all the dirt and skin products mixed in the pores of skin.",
  },
  {
    title: "Rose Oil",
    slug: "rose-oil",
    image: "/images/RoseOil.jpg",
    summary:
      "Pure Rosehip Oil significantly helps in skin nourishment and stops the exessive hairfall",
  },
];

// Create the products table if it doesn't exist
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL
  )
`
).run();
// Create the products table if it doesn't exist
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS review (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    productname TEXT NOT NULL,
    review TEXT NOT NULL
  )
`
).run();

async function SaveData(): Promise<void> {
  const stmt = db.prepare(`
      INSERT INTO review 
       VALUES (
         null,
         @name,
         @productname,
         @review,
         @image
      )
   `);

}
// Function to initialize the database with dummy data
async function initData(): Promise<void> {
  const stmt = db.prepare(`
      INSERT INTO products 
       VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary
      )
   `);

  for (const product of dummyProducts) {
    try {
      stmt.run(product);
    } catch (err) {
      console.error(`Error inserting product ${product.title}:`, err);
    }
  }
}

// Initialize data
initData().catch((err) => console.error("Error initializing data:", err));
//Save Review
SaveData().catch((error)=>console.error("Error initializing Review", error))