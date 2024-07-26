// TransformHoverImage.jsx
import React from 'react';

const ImgTransform = ({ imageUrl, altText, hoverText }) => {
  return (
    <div className="relative group">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300 font-semibold lg:text-3xl text-1xl">{hoverText}</p>
      </div>
    </div>
  );
};

export default ImgTransform;
