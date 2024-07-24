import React from 'react';
import FacultyCard from '../components/FacultyCard';

const Faculty = () => {
  const facultyMembers = [
    { name: 'Dr. John Doe', position: 'Professor of Mathematics', image: 'https://img.freepik.com/free-photo/experienced-businessman-standing-office-room-indian-content-office-employee-eyeglasses-smiling-posing-with-folded-hands-business-management-corporation-concept_74855-11681.jpg?size=626&ext=jpg&ga=GA1.1.1030267079.1721792814&semt=sph', bio: 'Expert in algebra and calculus with over 20 years of experience.' },
    { name: 'Dr. Jane Smith', position: 'Professor of Physics', image: 'https://img.freepik.com/premium-photo/teachers-day-teacher-school-classroom-knowledge-education-with-middle-aged-teacher-millennial_265223-119547.jpg?size=626&ext=jpg&ga=GA1.1.1030267079.1721792814&semt=sph', bio: 'Specializes in quantum mechanics and has published numerous papers.' },
    { name: 'Dr. Robert Brown', position: 'Professor of Chemistry', image: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?size=626&ext=jpg&ga=GA1.1.1030267079.1721792814&semt=sph', bio: 'Focuses on organic chemistry and has received multiple awards.' },
    { name: 'Dr. Emily White', position: 'Professor of Biology', image: 'https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-pen-smiling-white_140725-18658.jpg?size=626&ext=jpg&ga=GA1.1.1030267079.1721792814&semt=sph', bio: 'Renowned for her research in molecular biology and genetics.' },
  ];

  return (
    <div className="flex flex-col min-h-96 ">
      
      <main className="flex-grow  p-6 bg-slate-300">
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
