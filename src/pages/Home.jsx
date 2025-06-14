import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { saveUserToFirestore, deleteUserFromFirestore } from "../firebase/firestoreUtils";
import FormInput from "../components/FormInput";
import ActionButtons from "../components/ActionButtons";
import { toast } from "react-toastify";
import QRDisplay from "../components/QRdisplay";

const Home = () => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm({ mode: "onChange" });
  const [userId, setUserId] = useState("");

  const onSubmit = async (data) => {
    const id = uuidv4();
    setUserId(id);
    await saveUserToFirestore(id, data);
    reset();
    toast.success("✅ Medical ID saved successfully!");
    console.log("User data saved:", { id, ...data });
  };

  const handleDelete = async () => {
    if (!userId) return;
    await deleteUserFromFirestore(userId);
    setUserId("");
    toast.success("🗑️ Medical ID deleted successfully!");
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
    <div className="mx-3">
  <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 max-w-xl sm:max-w-2xl mx-auto mt-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl border border-blue-200">
    <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 drop-shadow-md">
      🩺 Create Medical ID
    </h1>

    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Name" name="name" register={register} required />
      <FormInput label="Age" name="age" register={register} required />
      <FormInput label="Blood Group" name="blood" register={register} required />
      <FormInput label="Allergies" name="allergies" register={register} required />
      <FormInput label="Medical Conditions" name="conditions" register={register} required />
      <FormInput
        label="Emergency Contact (Phone)"
        name="contact"
        register={register}
        required
      />

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full bg-green-600 text-white py-3 rounded-xl font-semibold transition duration-300 hover:bg-green-700 hover:scale-[1.01] shadow-lg ${
          !isValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        ✅ Save & Generate QR
      </button>
    </form>

    {userId && (
      <div className="mt-6 space-y-4">
        <QRDisplay userId={userId} />
        <ActionButtons onDownload={downloadQR} onDelete={handleDelete} />
      </div>
    )}
  </div>
</div>

  );
};

export default Home;
