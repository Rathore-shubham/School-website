import React from 'react';

const FacultyCard = ({ name, position, image, bio }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-slate-100 shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <p className="text-black">{position}</p>
          <p className="text-black mt-2">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
