import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Pages.css";
import Footer from "../components/Footer";

const Gallery = () => {
  const [images] = useState([
    { id: 1, src: "/images/a (1).png", alt: "Image 1" },
    { id: 2, src: "/images/a (2).png", alt: "Image 2" },
    { id: 3, src: "/images/a (3).png", alt: "Image 3" },
    { id: 4, src: "/images/a (4).png", alt: "Image 4" },
    { id: 5, src: "/images/a (5).png", alt: "Image 5" },
    { id: 6, src: "/images/a (6).png", alt: "Image 6" },
    { id: 7, src: "/images/a (7).png", alt: "Image 7" },
    { id: 8, src: "/images/a (8).png", alt: "Image 8" },
    { id: 8, src: "/images/b1 (1).png", alt: "Image 8" },
    { id: 8, src: "/images/b1 (2).png", alt: "Image 8" },
    { id: 8, src: "/images/b1 (3).png", alt: "Image 8" },
    { id: 8, src: "/images/b1 (4).png", alt: "Image 8" },
  ]);

  return (
    <div>
    <div className="gallery-container">
      
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      
       
    </div>
    <Footer /></div>
    
  );
};

export default Gallery;
