import React from "react";

const About = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow mt-8">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">About MediSafe</h2>
    <p className="text-gray-700 text-lg mb-2">
      MediSafe is a digital medical ID solution. It helps you securely store and share your emergency medical information using a QR code.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Store your blood group, allergies, conditions, and emergency contact.</li>
      <li>Share your medical info instantly in emergencies via QR code.</li>
      <li>Data is securely stored and can be deleted anytime.</li>
    </ul>
  </div>
);

export default About;