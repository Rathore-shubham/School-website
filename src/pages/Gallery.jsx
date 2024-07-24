import React from 'react';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const images = [
    { src: 'https://img.freepik.com/free-photo/view-modern-classroom-school_23-2150911441.jpg?ga=GA1.1.1030267079.1721792814&semt=ais_user', alt: 'Image 1' },
    { src: 'https://img.freepik.com/premium-photo/classroom-with-chalkboard-tables-chairs_36682-115292.jpg?ga=GA1.1.1030267079.1721792814&semt=ais_user', alt: 'Image 2' },
    { src: 'https://img.freepik.com/premium-photo/photos-welldecorated-classrooms-w_1179130-223615.jpg?ga=GA1.1.1030267079.1721792814&semt=ais_user', alt: 'Image 3' },
    { src: 'https://img.freepik.com/premium-photo/interior-subway_1048944-29592988.jpg?ga=GA1.1.1030267079.1721792814&semt=ais_user', alt: 'Image 4' },
    { src: 'https://img.freepik.com/free-photo/view-school-classroom_23-2151031927.jpg?ga=GA1.1.1030267079.1721792814&semt=ais_user', alt: 'Image 5' },
    { src: 'https://img.freepik.com/free-photo/back-school-3d-render_1048-12536.jpg?ga=GA1.1.1030267079.1721792814&semt=ais_user', alt: 'Image 7' },
    { src: 'https://img.freepik.com/free-photo/full-shot-kids-painting-school_23-2150385331.jpg?ga=GA1.1.1030267079.1721792814&semt=ais_user', alt: 'Image 8' },
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
