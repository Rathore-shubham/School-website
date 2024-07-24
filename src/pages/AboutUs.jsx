// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-slate-300 py-10 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black">About Us</h1>
          <p className="text-black mt-4">
            Learn more about our school's history, mission, and values.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="School Building"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-black mb-4">Our History</h2>
            <p className="text-black mb-4">
              Our school was founded in [Year] with the aim of providing high-quality education to students
              in our community. Over the years, we have grown and evolved, always staying true to our core
              values of excellence, integrity, and inclusivity.
            </p>
            <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-black mb-4">
              Our mission is to foster a supportive and stimulating learning environment where students can
              achieve their full potential. We are committed to nurturing intellectual curiosity, critical
              thinking, and a love for lifelong learning.
            </p>
            <h2 className="text-3xl font-bold text-black mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-black">
              <li>Excellence in education</li>
              <li>Respect for all individuals</li>
              <li>Integrity and honesty</li>
              <li>Commitment to community</li>
              <li>Embracing diversity and inclusion</li>
            </ul>
            <p className="text-black mb-4">
              Our mission is to foster a supportive and stimulating learning environment where students can
              achieve their full potential. We are committed to nurturing intellectual curiosity, critical
              thinking, and a love for lifelong learning.
            </p>
            <p className="text-black mb-4">
              Our mission is to foster a supportive and stimulating learning environment where students can
              achieve their full potential. We are committed to nurturing intellectual curiosity, critical
              thinking, and a love for lifelong learning.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
