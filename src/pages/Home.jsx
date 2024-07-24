import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 bg-slate-300">
        <section className="text-center mt-10 bg-zinc-200 p-12 rounded-md shadow-md text-black">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our School</h2>
          <p className="mb-6">Providing quality education and fostering a love for learning.</p>
          <button className="bg-green-500 text-black px-6 py-3 rounded-md hover:bg-green-400">Learn More</button>
        </section>
        <section className="mt-12 flex flex-col ">
          <h3 className="text-3xl font-bold text-center mb-6 text-black">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-200 text-black p-6 rounded-md shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Experienced Staff</h4>
              <p>Our staff are highly trained and dedicated to providing the best education possible.</p>
            </div>
            <div className="bg-zinc-200 text-black p-6 rounded-md shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Modern Facilities</h4>
              <p>We have state-of-the-art facilities to enhance the learning experience.</p>
            </div>
            <div className="bg-zinc-200 text-black p-6 rounded-md shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Diverse Curriculum</h4>
              <p>Our curriculum is designed to meet the needs of all students.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-6">
            <div className="bg-zinc-200 text-black p-6 rounded-md shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Experienced Staff</h4>
              <p>Our staff are highly trained and dedicated to providing the best education possible.</p>
            </div>
            <div className="bg-zinc-200 text-black p-6 rounded-md shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Modern Facilities</h4>
              <p>We have state-of-the-art facilities to enhance the learning experience.</p>
            </div>
            <div className="bg-zinc-200 text-black p-6 rounded-md shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Diverse Curriculum</h4>
              <p>Our curriculum is designed to meet the needs of all students.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
