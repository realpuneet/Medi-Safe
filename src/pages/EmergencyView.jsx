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

  if (!info) {
    return (
      <div className="p-8 text-center text-blue-700 text-lg animate-pulse">
        ⏳ Loading emergency data...
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-2xl mx-auto mt-8 bg-gradient-to-br from-red-50 via-white to-blue-50 rounded-2xl shadow-xl border border-red-200">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-4xl">🩺</span>
        <h2 className="text-3xl font-bold text-red-600">Emergency Info</h2>
      </div>

      <div className="space-y-4 text-base md:text-lg">
        <InfoItem label="Name" value={info.name} />
        <InfoItem label="Age" value={info.age} />
        <InfoItem label="Blood Group" value={info.blood} />
        <InfoItem label="Allergies" value={info.allergies} />
        <InfoItem label="Medical Conditions" value={info.conditions} />
        <div>
          <span className="font-semibold text-blue-800">Emergency Contact:</span>{" "}
          <a
            href={`tel:${info.contact}`}
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            {info.contact}
          </a>
        </div>
      </div>
    </div>
  );
};

// ✅ Reusable info display
const InfoItem = ({ label, value }) => (
  <div>
    <span className="font-semibold text-blue-800">{label}:</span>{" "}
    <span className="text-gray-700">{value}</span>
  </div>
);

export default EmergencyView;
