import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-10 bg-slate-300">
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactUs;
