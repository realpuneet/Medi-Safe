import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserFromFirestore } from "../firebase/firestoreUtils";

const EmergencyView = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserFromFirestore(id);
      setInfo(data);
    };
    fetchData();
  }, [id]);

  if (!info) return <div className="p-8 text-center text-blue-700">Loading emergency data...</div>;

  return (
    <div className="p-8 max-w-lg mx-auto mt-8 bg-gradient-to-br from-red-100 to-blue-100 rounded-xl shadow-lg border">
      <h2 className="text-3xl font-bold text-red-600 mb-4 flex items-center gap-2">
        <span role="img" aria-label="emergency">🚨</span> Emergency Info
      </h2>
      <div className="space-y-2 text-lg">
        <div><span className="font-semibold text-blue-700">Name:</span> {info.name}</div>
        <div><span className="font-semibold text-blue-700">Age:</span> {info.age}</div>
        <div><span className="font-semibold text-blue-700">Blood Group:</span> {info.blood}</div>
        <div><span className="font-semibold text-blue-700">Allergies:</span> {info.allergies}</div>
        <div><span className="font-semibold text-blue-700">Medical Conditions:</span> {info.conditions}</div>
        <div>
          <span className="font-semibold text-blue-700">Emergency Contact:</span>{" "}
          <a href={`tel:${info.contact}`} className="text-blue-600 underline">{info.contact}</a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyView;