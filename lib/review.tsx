"use server";

import { redirect } from "next/navigation";
import { saveReview } from "./products";
import { revalidatePath } from "next/cache";

function isInvalidText(_text) {
  return !_text || _text.trim().length === 0;
}

export async function shareReview(prevState, formData) {
  const review = {
    name: formData.get("name"),
    productname: formData.get("productname"),
    review: formData.get("review"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(review.name) ||
    isInvalidText(review.productname) ||
    isInvalidText(review.review) ||
    !review.image ||
    review.image.size === 0
  ) {
    return {message:"Invalid input"}
  }

  await saveReview(review);
  revalidatePath('/reviews');
  redirect("/reviews");
}
