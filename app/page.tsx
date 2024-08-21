"use Client";
import Link from "next/link";
import ImageSlideShow from "../components/Images/image-SlideShow";
import classes from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideShow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Discover Natural Beauty</h1>
            <p>
              Our products are made from natural ingredients and are free from
              harsh chemicals. We believe in the power of nature and its ability
              to heal and nourish your skin.
            </p>
            <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/products">Explore Products</Link>
          </div>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Our process involves carefully selecting the finest organic
            ingredients and crafting them into luxurious products that deliver
            visible results.{" "}
          </p>
          <p>
            Experience the transformative power of nature as you embark on a
            journey to radiant skin.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why BeautyCorner?</h2>
          <p>
            We are committed to sustainability and ethical practices. Our
            products are cruelty-free and packaged responsibly.
          </p>
          <p>
            Join our community of satisfied customers who have discovered the
            benefits of organic beauty.
          </p>
        </section>
      </main>
    </>
  );
}

// import Link from 'next/link';
// import classes from './page.module.css';
// import React from 'react';

// export default function Home() {
//   return (
//     <>
//       <header className={classes.header}>
//         <div className={classes.slideshow}>

//         </div>
//         <div>
//           <div className={classes.hero}>
//
//           </div>
//           <div className={classes.cta}>
//             <div>
//
//             </div>
//             <p>
//               <Link href="/products">Shop Now</Link>
//             </p>
//             <p>
//               <Link href="/about">Learn More</Link>
//             </p>
//           </div>
//         </div>
//       </header>
//       <main>
//         <section className={classes.section}>
//           <h2>How it works</h2>
//           <p>
//             </p>
//           <p>
//
//           </p>
//         </section>
//         <section className={classes.section}>
//           <h2>Why Choose Us</h2>
//           <p>
//
//           </p>
//           <p>
//
//           </p>
//         </section>
//       </main>
//     </>
//   );
// }import React from 'react';
