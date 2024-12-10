import React, { useState } from "react";
import "./imageToggle.css";

const ImageToggle = ({ image1, image2, altText }) => {
  const [isFirstImage, setIsFirstImage, text] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage((prev) => !prev);
  };

  return (
    <div className="image-toggle-container" onClick={handleImageClick}>
      <img
        src={isFirstImage ? image1 : image2}
        alt={text}
        className="toggle-image"
      />
    </div>
  );
};

export default ImageToggle;