import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Payment = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-center items-center min-h-[90vh] bg-gradient-to-r from-gray-900 to-gray-800 py-8">
      <h1 className="sm:text-4xl text-xl font-extrabold text-center text-gray-200 mb-8 shadow-lg">
        QR Code Payment Here
      </h1>

      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-lg p-8 lg:w-[900px] w-[90vw] transition-transform duration-500 hover:scale-105">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Payment Details */}
          <div className="flex-1 pr-6 mb-8 sm:mb-0">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">
              Payment Details
            </h2>
            <p className="text-xl font-medium text-gray-300 mb-2">
              Amount: ₹500
            </p>
            <p className="text-xl font-medium text-gray-300 mb-6">
              Payment Method: UPI Only
            </p>

            <div className="flex">
              <button
                className="text-lg text-blue-500 underline hover:text-blue-400 transition-colors duration-300"
                onClick={() => setShowModal(true)}
              >
                Our Privacy and Policies
              </button>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              Scan QR Code
            </h2>
            <div className="w-64 h-64 rounded-lg bg-red-400 flex justify-center items-center">
              {/* Placeholder for QR Code */}
              <p className="text-3xl text-gray-700">QR Code</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Privacy and Policies */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Privacy & Policies
            </h2>
            <p className="text-gray-700 mb-4">
              Your payment information is secure and will only be used for the
              transaction. We do not store sensitive financial information.
              Please read our full privacy policy for more details on how we
              handle your data.
            </p>
            <p className="text-gray-700 mb-4">
              By proceeding with this payment, you agree to our terms and
              conditions.
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <NavLink to='/uploadss'><div className=" lg:w-[700px] flex items-center justify-center text-black mt-20 font-semibold text-xl h-14 hover:bg-blue-700 rounded-xl bg-blue-500">Upload ScreenShot</div></NavLink>
    </div>
  );
};

export default Payment;
