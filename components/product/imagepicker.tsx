"use client";
import React, { useRef, useState, type ChangeEvent } from "react";
import Image from "next/image";
import classes from "./imagepicker.module.css";

interface ImgPickerProps {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImgPickerProps) {
  const imageInput = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState(null);
  function handleclickInput() {
    imageInput.current.click();
  }
  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            <div className={classes.preview}>
              {!pickedImage && <p>No image picked yet</p>}
              {pickedImage && <Image src={pickedImage} alt="" fill />}
            </div>
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png,image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
          />
          <button
            className={classes.button}
            type="button"
            onClick={handleclickInput}
          >
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
