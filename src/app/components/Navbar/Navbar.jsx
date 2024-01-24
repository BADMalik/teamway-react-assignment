import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-semibold">
          Personality Test
        </a>

        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
