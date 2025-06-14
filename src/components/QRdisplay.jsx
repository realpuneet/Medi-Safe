import React from "react";
import QRCode from "react-qr-code";

const QRDisplay = ({ userId }) => (
  <div className="mt-4">
    <QRCode id="qr-code" value={`${window.location.origin}/emergency-view/${userId}`} />
  </div>
);

export default QRDisplay;
