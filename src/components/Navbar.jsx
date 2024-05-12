import { Link } from "react-router-dom";
import { navMenuItems } from "../helpers/nav-menu-items";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-gray-700 sticky top-0">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
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

        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            className="h-8 object-cover rounded-full w-8"
            alt="Navigation Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Task
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
