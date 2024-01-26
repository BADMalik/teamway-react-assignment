import React from "react";
import { useAppContext } from "../../providers/contextProvider";
import { questionActionEnums } from "../../actions/questionActions";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { contextValue, setContextValue } = useAppContext();
  const navigate = useNavigate();
  const reset = () => {
    setContextValue({ type: questionActionEnums.CLEAR_TEST });
    navigate("/");
  };
  return (
    <nav className="p-4 bg-cover bg-no-repeat bg-[url('./src/assets/star.png')]">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-teal-400 text-2xl font-semibold">
          Personality Test
        </a>
        {contextValue?.userName && (
          <ul className="flex space-x-4">
            <li className="text-white hover:text-gray-300">
              {contextValue?.userName}
            </li>
            <li>
              <a
                href="#"
                onClick={reset}
                className="text-white hover:text-gray-300"
              >
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
