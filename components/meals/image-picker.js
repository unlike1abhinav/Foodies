"use client";
import { useState, useRef } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  function handleImagePicker() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
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
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image Picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The Image picked by the user" fill />
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png , image/jpeg"
          className={classes.input}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePicker}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
}
