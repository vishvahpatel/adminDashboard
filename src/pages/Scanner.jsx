// src/pages/Scanner.js

import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

export const Scanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 300,
    width: 400,
  };

  return (
    <div className="flex items-center justify-center h-screen p-4 w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-4">QR Code Scanner</h1>
        <div className="w-full max-w-md flex justify-center">
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={previewStyle}
            className="border border-gray-300 rounded-md shadow-lg"
          />
        </div>
        <p className="mt-4 text-lg">Scanned Result: {result}</p>
      </div>
    </div>
  );
};
