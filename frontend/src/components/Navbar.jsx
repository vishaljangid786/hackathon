import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { assets } from "../assets/assets";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const boxRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLoggedIn(false); 
    navigate("/login"); 
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 

    window.scrollTo(0, 0);
  }, [location]);

  const handleClick = () => {
    gsap.to(boxRef.current, { y: -10, duration: 0.5 });
    gsap.to(boxRef.current, { y: 0, duration: 0.5, delay: 0.5 });
  };

  return (
    <nav className="w-full py-4 flex items-center font-[Roboto] justify-between px-6 shadow-sm shadow-zinc-900 bg-zinc-950 text-gray-300 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex items-center gap-7">
        <img src={assets.logo} className="w-14 h-14" alt="Logo" />
        <img src={assets.parishkar} className="w-40" alt="Parishkar" />
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Links for Desktop */}
      <ul className="hidden md:flex space-x-6 items-center font-medium item">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 uppercase" : "hover:text-blue-600 transition uppercase"
            }
          >
            Home
            
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 uppercase" : "hover:text-blue-600 transition uppercase"
            }
          >
            About
          </NavLink>
        </li>

        {/* Conditionally render Login/Register or Logout */}
        {isLoggedIn ? (
          <>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition uppercase"
              >
                Logout
              </button>
            </li>
            <li ref={boxRef}>
              <NavLink
                onClick={handleClick}
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-4 py-2 rounded"
                    : "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition uppercase"
                }
              >
                Team Details
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 uppercase" : "hover:text-blue-600 transition uppercase"
                }
              >
                Login
              </NavLink>
            </li>
            <li ref={boxRef}>
              <NavLink
                onClick={handleClick}
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-4 py-2 rounded"
                    : "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                }
              >
                REGISTER
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 text-lg"
                    : "text-lg hover:text-blue-600 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 text-lg"
                    : "text-lg hover:text-blue-600 transition"
                }
              >
                About
              </NavLink>
            </li>

            {/* Conditionally render Login/Register or Logout/admin */}
            {isLoggedIn ? (
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="bg-red-600 text-white px-5 py-2 rounded text-lg"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 text-lg"
                        : "text-lg hover:text-blue-600 transition"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-5 py-2 rounded text-lg"
                    : "bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition text-lg"
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
