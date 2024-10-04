import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/admin"; // Redirect to admin
    }

    // Handle cursor movement
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading spinner

    try {
      const response = await fetch("http://localhost:5000/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("Response from server:", data); // Debug the response

      if (response.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Logged in successfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
        window.location.href = "/admin"; // Redirect to admin
      } else {
        toast.error(data.error || "Login failed, try again", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }

    setFormData({
      email: "",
      password: "",
    });
    setLoading(false); // Hide loading spinner
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:flex items-center justify-between">
      <ToastContainer />

      <form
        onSubmit={onSubmitHandler}
        className="flex z-30 flex-col items-center w-[90%] sm:w-[50%] sm:max-w-[34rem] m-auto gap-12 text-gray-300 bg-zinc-800 p-6 rounded-lg"
      >
        <div className="inline-flex items-center gap-2">
          <p className="prata-regular text-3xl text-white">Login</p>
          <hr className="border-none h-[2px] rounded-full w-8 bg-gray-500" />
        </div>

        <input
          type="email"
          className="outline-none w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-200"
          placeholder="Email"
          required
          value={formData.email}
          onChange={changeHandler}
          name="email"
        />
        <input
          type="password"
          className="outline-none w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-200"
          placeholder="Password"
          required
          value={formData.password}
          onChange={changeHandler}
          name="password"
        />

        {/* Button with Loading Spinner */}
        <button
          className="bg-gray-700 text-gray-200 font-semibold px-16 active:bg-gray-600 py-2 mt-4"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                ></path>
              </svg>
              Loading...
            </span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <div className="hidden z-30 sm:flex justify-center items-center w-1/3 h-2/3 mt-20">
        <img
          src="./login_png.png"
          className="object-cover w-full h-full"
          alt="Login illustration"
        />
      </div>
      <div className="absolute w-full sm:flex hidden flex-wrap mt-28 justify-around px-1 h-[89vh] pt-1 overflow-hidden">
        {[...Array(84)].map((_, index) => (
          <span key={index} className="w-28 z-20 h-28 bg-zinc-900 m-1"></span>
        ))}
        <div
          className="w-80 h-80 bg-zinc-800 ease-linear transition -translate-x-[80px] -translate-y-[120px] absolute rounded-full blur-3xl"
          style={{
            left: `${cursorPosition.x - 96}px`,
            top: `${cursorPosition.y - 96}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;

// ==================================content with signup and login full setup.==================================>

// import React, { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [currentState, setCurrentState] = useState("Login");
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     email: "",
//   });

//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [loading, setLoading] = useState(false); // Loading state

//   useEffect(() => {
//     // Check if the user is already logged in
//     const token = localStorage.getItem("token");
//     if (token) {
//       window.location.href = "/admin"; // Redirect to a admin
//     }

//     // Handle cursor movement
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setLoading(true); // Show loading spinner

//     try {
//       const endpoint = currentState === "Signup" ? "/signup" : "/login-user";
//       const bodyData =
//         currentState === "Signup"
//           ? {
//               name: formData.name,
//               email: formData.email,
//               password: formData.password,
//             }
//           : {
//               email: formData.email,
//               password: formData.password,
//             };

//       const response = await fetch(`http://localhost:5000${endpoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(bodyData),
//       });

//       const data = await response.json();
//       console.log("Response from server:", data); // Debug the response

//       if (response.ok) {
//         if (currentState === "Signup") {
//           toast.success("User registered successfully", {
//             position: "bottom-right",
//             autoClose: 3000,
//           });
//           setCurrentState("Login"); // Switch to login after successful signup
//         } else {
//           localStorage.setItem("token", data.token);
//           if (formData.email === "admin@mitesh.com") {
//             window.location.href = "/admin";
//           } else {
//             toast.success("Logged in successfully", {
//               position: "bottom-right",
//               autoClose: 3000,
//             });
//             window.location.href = "/"; // Redirect to home
//           }
//         }
//       } else {
//         toast.error(data.error || "Action failed, try again", {
//           position: "bottom-right",
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       console.error("Error occurred:", error);
//       toast.error("An error occurred. Please try again later.", {
//         position: "bottom-right",
//         autoClose: 3000,
//       });
//     }

//     setFormData({
//       name: "",
//       password: "",
//       email: "",
//     });
//     setLoading(false); // Hide loading spinner
//   };

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="md:flex">
//       <ToastContainer />

//       <form
//         onSubmit={onSubmitHandler}
//         className="flex z-30 mt-16 flex-col items-center w-[90%] sm:w-[50%] sm:max-w-[34rem] m-auto gap-12 text-gray-300 bg-zinc-800 p-6 rounded-lg"
//       >
//         <div className="inline-flex items-center gap-2">
//           <p className="prata-regular text-3xl text-white">{currentState}</p>
//           <hr className="border-none h-[2px] rounded-full w-8 bg-gray-500" />
//         </div>

//         {currentState === "Signup" && (
//           <input
//             type="text"
//             className="outline-none w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-200"
//             placeholder="Name"
//             required
//             value={formData.name}
//             onChange={changeHandler}
//             name="name"
//           />
//         )}
//         <input
//           type="email"
//           className="outline-none w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-200"
//           placeholder="Email"
//           required
//           value={formData.email}
//           onChange={changeHandler}
//           name="email"
//         />
//         <input
//           type="password"
//           className="outline-none w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-200"
//           placeholder="Password"
//           required
//           value={formData.password}
//           onChange={changeHandler}
//           name="password"
//         />
//         <div className="w-full flex justify-between text-sm mt-[-8px] text-gray-400">
//           <p className="cursor-pointer hover:text-gray-200">
//             Forgot Your password?
//           </p>
//           {currentState === "Login" ? (
//             <p
//               className="cursor-pointer underline hover:text-gray-200"
//               onClick={() => setCurrentState("Signup")}
//             >
//               Create Account
//             </p>
//           ) : (
//             <p
//               className="cursor-pointer underline hover:text-gray-200"
//               onClick={() => setCurrentState("Login")}
//             >
//               Login Here
//             </p>
//           )}
//         </div>

//         <button
//           className="bg-gray-700 text-gray-200 font-semibold px-16 active:bg-gray-600 py-2 mt-4"
//           disabled={loading}
//         >
//           {loading ? (
//             <span className="flex items-center">
//               <svg
//                 className="animate-spin mr-2 h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
//                 ></path>
//               </svg>
//               Loading...
//             </span>
//           ) : (
//             <span>{currentState === "Login" ? "Sign In" : "Sign Up"}</span>
//           )}
//         </button>
//       </form>

//       <div className="hidden z-30 sm:flex justify-center items-center w-1/3 h-2/3 mt-20">
//         <img
//           src="./login_png.png"
//           className="object-cover w-full h-full"
//           alt="Login illustration"
//         />
//       </div>
//       <div className="absolute w-full sm:flex hidden flex-wrap justify-around px-1 h-[89vh] pt-1 overflow-hidden">
//         {[...Array(84)].map((_, index) => (
//           <span key={index} className="w-28 z-20 h-28 bg-zinc-900 m-1"></span>
//         ))}
//         <div
//           className="w-80 h-80 bg-zinc-800 ease-linear transition -translate-x-[80px] -translate-y-[120px] absolute rounded-full blur-3xl"
//           style={{
//             left: `${cursorPosition.x - 96}px`,
//             top: `${cursorPosition.y - 96}px`,
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Login;
