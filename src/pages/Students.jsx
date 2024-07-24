import React from 'react';

const studentsData = [
  {
    id: 1,
    name: 'John Doe',
    course: 'Computer Science',
    profilePicture: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Jane Smith',
    course: 'Mathematics',
    profilePicture: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Sam Wilson',
    course: 'Physics',
    profilePicture: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Lisa Kudrow',
    course: 'Biology',
    profilePicture: 'https://via.placeholder.com/150'
  },
];

const Students = () => {
  return (
    <div className="min-h-screen bg-slate-300 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Our Students</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {studentsData.map(student => (
          <div key={student.id} className="bg-slate-100 p-4 rounded-lg shadow-md">
            <img src={student.profilePicture} alt={student.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-black">{student.name}</h2>
              <p className="text-black">{student.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
