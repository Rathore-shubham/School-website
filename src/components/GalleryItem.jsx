import React from 'react';

const GalleryItem = ({ src, alt }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={src} alt={alt} className="w-full h-48 object-cover" />
      </div>
    </div>
  );
};

export default GalleryItem;
