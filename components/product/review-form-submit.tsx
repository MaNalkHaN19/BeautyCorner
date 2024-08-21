"use client";

import { useFormStatus } from "react-dom";

export default function ReviewFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Review"}
    </button>
  );
}
