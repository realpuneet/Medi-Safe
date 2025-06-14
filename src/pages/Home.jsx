import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { saveUserToFirestore, deleteUserFromFirestore } from "../firebase/firestoreUtils";
import FormInput from "../components/FormInput";
import QRDisplay from "../components/QRDisplay";
import ActionButtons from "../components/ActionButtons";
import { toast } from "react-toastify";

const Home = () => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm({ mode: "onChange" });
  const [userId, setUserId] = useState("");

  const onSubmit = async (data) => {
    const id = uuidv4();
    setUserId(id);
    await saveUserToFirestore(id, data);
    reset();
    toast.success("Medical ID saved successfully!");
    // Generate QR code here or in QRDisplay component
    console.log("User data saved:", { id, ...data });
    
  };

  const handleDelete = async () => {
    if (!userId) return;
    await deleteUserFromFirestore(userId);
    setUserId("");
    toast.success("Medical ID deleted successfully!");
    console.log("User data deleted:", userId);
  };

  const downloadQR = () => {
    const svg = document.getElementById("qr-code");
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "MediSafeQR.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4 shadow-2xl mt-5 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-center">MediSafe - Create Medical ID</h1>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Name" name="name" register={register} required />
        <FormInput label="Age" name="age" register={register} required />
        <FormInput label="Blood Group" name="blood" register={register} required />
        <FormInput label="Allergies" name="allergies" register={register} required />
        <FormInput label="Conditions" name="conditions" register={register} required />
        <FormInput label="Emergency Contact (Phone)" name="contact" register={register} required />

        <button
          className={`bg-green-600 text-white px-4 py-2 rounded-3xl ${!isValid ? "opacity-50 cursor-not-allowed" : ""}`}
          type="submit"
          disabled={!isValid}
        >
          Save & Generate QR
        </button>
      </form>

      {userId && (
        <>
          <QRDisplay userId={userId} />
          <ActionButtons onDownload={downloadQR} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
};

export default Home;