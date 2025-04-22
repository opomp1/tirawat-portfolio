import { motion } from "framer-motion";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div name="Home" className="w-full h-svh ">
      {/* Container */}
      <motion.div
        className="max-w-[1000px] overflow-hidden mx-auto px-8 flex flex-col justify-center h-full"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">
          TIRAWAT POMPAKUNSAWAT
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold ">
          <span className="text-[#8892b0]">I'm a</span> Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        <div className=" animate-bounce mt-2">
          <Link to="Projects" smooth={true} duration={1000}>
            <button className="group btn btn-lg px-6 py-3 my-2 ">
              View my projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
          <div className="flex lg:hidden gap-3 pt-4">
            <a
              className="text-gray-300"
              href="https://github.com/opomp1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="text-gray-300"
              href="https://www.linkedin.com/in/tirawat-pompakunsawat/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="text-gray-300"
              href="https://drive.google.com/file/d/10lK57w5fu_DqltuSdNi1RXiqiBpB97F3/view?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
