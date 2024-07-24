// src/Admissions.js
import React from 'react';

const Admissions = () => {
  return (
    <div className="bg-slate-300 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black">Admissions</h1>
          <p className="text-black mt-4">
            Join our community of learners. Discover the admissions process and requirements.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-black mb-4">Admission Process</h2>
            <p className="text-black mb-4">
              Our admissions process is designed to ensure that students who are a good fit for our school
              are given the opportunity to join our community. Follow these steps to apply:
            </p>
            <ol className="list-decimal list-inside text-black mb-4">
              <li>Submit an online application form</li>
              <li>Provide necessary documents (transcripts, recommendations, etc.)</li>
              <li>Attend an interview with the admissions committee</li>
              <li>Receive and accept the offer of admission</li>
            </ol>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <img
              src="https://images.pexels.com/photos/207756/pexels-photo-207756.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Admissions"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-black mb-4">Admission Requirements</h2>
          <p className="text-black mb-4">
            To be considered for admission, applicants must meet the following requirements:
          </p>
          <ul className="list-disc list-inside text-black mb-4">
            <li>Completed application form</li>
            <li>Official transcripts from previous schools</li>
            <li>Letters of recommendation</li>
            <li>Personal statement or essay</li>
            <li>Standardized test scores (if applicable)</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Important Dates</h2>
          <ul className="list-disc list-inside text-black">
            <li>Application Deadline: [Date]</li>
            <li>Interviews: [Date Range]</li>
            <li>Decision Notification: [Date]</li>
            <li>Enrollment Deadline: [Date]</li>
          </ul>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-black text-lg px-6 py-4 rounded-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
