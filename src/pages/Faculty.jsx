import React from 'react';
import FacultyCard from '../components/FacultyCard';

const Faculty = () => {
  const facultyMembers = [
    { name: 'Dr. John Doe', position: 'Professor of Mathematics', image: 'faculty1.jpg', bio: 'Expert in algebra and calculus with over 20 years of experience.' },
    { name: 'Dr. Jane Smith', position: 'Professor of Physics', image: 'faculty2.jpg', bio: 'Specializes in quantum mechanics and has published numerous papers.' },
    { name: 'Dr. Robert Brown', position: 'Professor of Chemistry', image: 'faculty3.jpg', bio: 'Focuses on organic chemistry and has received multiple awards.' },
    { name: 'Dr. Emily White', position: 'Professor of Biology', image: 'faculty4.jpg', bio: 'Renowned for her research in molecular biology and genetics.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow p-6 bg-slate-300">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Our Faculty</h2>
        <div className="flex flex-wrap -m-4">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard key={index} {...faculty} />
          ))}
        </div>
      </main>
     
    </div>
  );
};

export default Faculty;
