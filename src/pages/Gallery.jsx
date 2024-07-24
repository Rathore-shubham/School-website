import React from 'react';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    { src: 'image4.jpg', alt: 'Image 4' },
    { src: 'image5.jpg', alt: 'Image 5' },
    { src: 'image6.jpg', alt: 'Image 6' },
    { src: 'image7.jpg', alt: 'Image 7' },
    { src: 'image8.jpg', alt: 'Image 8' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-grow p-6 bg-slate-300">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Gallery</h2>
        <div className="flex flex-wrap -m-2">
          {images.map((image, index) => (
            <GalleryItem key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </main>
     
    </div>
  );
};

export default Gallery;
