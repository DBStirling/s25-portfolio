import React, { useState } from "react";
import "./imageToggle.css";

const ImageToggle = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length));
  };

  return (
    <div className="image-toggle-container" onClick={handleImageClick}>
      <img
        src={images[currentIndex]}
        alt={altText}
        className="toggle-image"
      />
    </div>
  );
};

export default ImageToggle;
