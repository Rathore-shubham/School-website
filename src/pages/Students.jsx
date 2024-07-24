import React from 'react';

const studentsData = [
  {
    id: 1,
    name: 'John Doe',
    course: 'Computer Science',
    profilePicture: 'https://img.freepik.com/free-photo/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall_496169-1532.jpg?ga=GA1.1.1030267079.1721792814&semt=sph'
  },
  {
    id: 2,
    name: 'Jane Smith',
    course: 'Mathematics',
    profilePicture: 'https://img.freepik.com/free-photo/smiling-indian-man-casual-close-with-laptop-backpack-pastel-wall_496169-1583.jpg?ga=GA1.1.1030267079.1721792814&semt=sph'
  },
  {
    id: 3,
    name: 'Sam Wilson',
    course: 'Physics',
    profilePicture: 'https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?t=st=1721837267~exp=1721840867~hmac=138e75d466bfb4a984760a9b422068d0e27a1d734aed16104a29aecffa05eaf3&w=740'
  },
  {
    id: 4,
    name: 'Lisa Kudrow',
    course: 'Biology',
    profilePicture: 'https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg?ga=GA1.1.1030267079.1721792814&semt=sph'
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
