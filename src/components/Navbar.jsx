import { Link } from "react-router-dom";
import { navMenuItems } from "../helpers/nav-menu-items";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(true);

  return (
    <nav className="bg-gray-800 border-gray-700 sticky top-0 z-50">
      <div
        className={`max-w-screen-xl flex  items-center justify-between mx-auto py-4 ${
          isToggleMenu ? "" : "flex-wrap"
        }`}
      >
        <div
          className={`${
            // TOGGLE MENU ON MOBILE VIEW
            isToggleMenu ? "hidden" : ""
          } w-full md:block md:w-auto" id="navbar-solid-bg`}
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-transparent border-gray-700">
            {navMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block py-2 px-3 md:p-0   text-gray-300 hover:text-gray-200   md:text-gray-400 md:hover:text-gray-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex p-2 flex-row-reverse md:flex-row gap-2 items-center text-gray-400">
          <button>
            <IoNotificationsOutline size={20} />
          </button>

          <button>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              className="h-8 object-cover rounded-full w-8"
              alt="Navigation Logo"
            />
          </button>
        </div>
        <button
          type="button"
          // MOBILE VIEW TOGGLE BUTTON FOR MENU
          onClick={() => setIsToggleMenu(!isToggleMenu)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <FaBars size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
