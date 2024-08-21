"use client";
import { useEffect, useState } from "react";
import classes from "./image-slideshow-.module.css";
import Image from "next/image";

import Harmony from "/assets/DailyHarmony.jpg";
import Essence from "/assets/Essence.jpg";
import FaceWash from "/assets/FaceWash.jpg";
import HairOil from "/assets/HairOil.jpg";
import MakeupRemover from "/assets/MakeupRemover.jpg";
import RoseOil from "/assets/RoseOil.jpg";

const images = [
  {
    image: Harmony,
    alt: "Daily Harmony: Nourishing Face Cream for All Skin Types",},
  { image: Essence, alt: "Essence: Hydrating Facial Mist with Rose Water" },
  { image: FaceWash, alt: "Gentle Face Wash with Aloe Vera and Vitamin E" },
  { image: HairOil, alt: "Argan Hair Oil for Smooth and Shiny Hair" },
  { image: MakeupRemover, alt: "Gentle Makeup Remover with Micellar Water" },
  { image: RoseOil, alt: "Pure Rosehip Oil for Skin Regeneration" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
