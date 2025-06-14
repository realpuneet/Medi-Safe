import React from "react";
import { FiDownload, FiTrash } from "react-icons/fi";

const ActionButtons = ({ onDownload, onDelete }) => (
  <div className="flex gap-2 mt-2">
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-1"
      onClick={onDownload}
    >
      <FiDownload /> Download QR
    </button>
    <button
      className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-1"
      onClick={onDelete}
    >
     <FiTrash /> Delete
    </button>
  </div>
);

export default ActionButtons;