import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";

import { Link } from "react-scroll";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left side */}
      <div className="flex-1 flex items-center">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
          >
            <li>
              <Link to="Projects" smooth={true} duration={1000}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="Skills" smooth={true} duration={1000}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex h-full items-center gap-2">
          <div className="avatar ring-primary ring-2 rounded-full hidden sm:inline">
            <div className="w-8 rounded-full">
              <img src="https://res.cloudinary.com/ddrrziqvh/image/upload/v1742645108/oyvuuldymwdns27wzc20.jpg" />
            </div>
          </div>
          <a className=" text-2xl font-semibold">Tirawat</a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-none font-semibold">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden sm:flex">
            <Link to="Projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li className="hidden sm:flex">
            <Link to="Skills" smooth={true} duration={1000}>
              Skills
            </Link>
          </li>
          <li className="hidden sm:flex">
            <Link to="About" smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className="hidden sm:flex">
            <Link to="Contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
          <li className="hover:">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                checked={theme}
                onChange={() => toggleTheme((prev) => !prev)}
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off size-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on size-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/tirawat-pompakunsawat/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/opomp1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] px-4">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="Contact"
              smooth={true}
              duration={500}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/10lK57w5fu_DqltuSdNi1RXiqiBpB97F3/view?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="flex fixed bottom-[5%] right-[10%] p-2 border-2 bg-white rounded-full z-50">
        <Link to="Home" smooth={true} duration={500}>
          <IoHomeSharp />
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
