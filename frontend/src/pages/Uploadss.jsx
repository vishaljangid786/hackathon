import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import {assets} from '../assets/assets'

const Uploadss = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
  setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Select a File");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("screenshot", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/screenshot",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setError(null);
      setSuccess("File Uploaded Successfully");
      setTimeout(() => {
        navigate("/congrats");
      }, 2000);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error in uploading file");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="p-8 bg-white z-10 shadow-lg rounded-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Upload Your Screenshot
        </h1>
        <h2 className="text-lg text-gray-700 mb-6">make sure to rename the screenshot with your team name otherwise it is not verified.</h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-4"
        >
          <input
            type="file"
            name="screenshot"
            onChange={handleFileChange}
            className="block w-full text-md text-gray-500 file:mr-4  file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm  file:font-semibold file:bg-indigo-400 file:text-white bg-indigo-200 rounded-3xl hover:file:bg-indigo-600 "
          />
          <button
            type="submit"
            className="w-full px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 flex justify-center items-center transition-all duration-200"
            disabled={isLoading}  
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Uploading...
              </>
            ) : (
              "Upload Screenshot"
            )}
          </button>
        </form>

        {error && <p className="text-red-500 mt-4 font-semibold">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4 font-semibold">{success}</p>
        )}
      </div>
      <img src={assets.Upload} className="absolute top-0 left-0 h-full w-full object-cover brightness-50" alt="" />
    </div>
  );
};

export default Uploadss;