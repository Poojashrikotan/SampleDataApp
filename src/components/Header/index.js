import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product";

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
        
        <Link to="/">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>

            <span className="ml-3 text-xl">ShopNow</span>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {/* <Link to="/" className="mr-5 hover:text-gray-900 text-xl">
              Home
            </Link>
           
            <Link  to="/product" className="mr-5 hover:text-gray-900 text-xl">
              Product
            </Link> */}
            </nav>
          </div>
        </Link>
      </header>
    </div>
  );
}
