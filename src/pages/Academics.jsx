import React from 'react';

const academicPrograms = [
  {
    name: 'Program 1',
    title: 'Description of the academic program. This program offers comprehensive courses in various subjects.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Program 2',
    title: 'Description of the academic program. This program offers comprehensive courses in various subjects.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Program 3',
    title: 'Description of the academic program. This program offers comprehensive courses in various subjects.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Program 4',
    title: 'Description of the academic program. This program offers comprehensive courses in various subjects.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Program 5',
    title: 'Description of the academic program. This program offers comprehensive courses in various subjects.',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Program 6',
    title: 'Description of the academic program. This program offers comprehensive courses in various subjects.',
    image: 'https://via.placeholder.com/400x300',
  }
];

const Academics = () => {
  return (
    <div className="bg-slate-300 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black">Our Academic Programs</h1>
          <p className="text-black mt-4">
            Explore our diverse range of academic programs designed to foster intellectual growth and critical thinking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicPrograms.map((program, index) => {
            return (
              <div key={index} className="bg-zinc-200 shadow-lg rounded-lg overflow-hidden">
                <img 
                  src={program.image}
                  alt={program.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-black mb-2">{program.name}</h2>
                  <p className="text-black">
                    {program.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Academics;
