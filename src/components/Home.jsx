import { motion } from "framer-motion";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import myImage from "../assets/owen-cloud-no-bg.png";

const Home = () => {
  return (
    <div name="Home" className="w-full h-svh flex items-center justify-center">
      {/* Container */}
      <motion.div
        className="max-w-[1000px] overflow-hidden px-8 flex flex-col justify-center h-full 2xl:pl-16"
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

        <div className="mt-2">
          <Link
            to="Projects"
            smooth={true}
            duration={1000}
            className="hidden lg:flex animate-bounce"
          >
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
              <FaGithub size={30} className="animate-pulse" />
            </a>
            <a
              className="text-gray-300"
              href="https://www.linkedin.com/in/tirawat-p"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={30} className="animate-pulse" />
            </a>
            <a
              className="text-gray-300"
              href="https://drive.google.com/file/d/1bjkUCL1pFCIjnKo5oBYs76FMobU59Hxp/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsFillPersonLinesFill size={30} className="animate-pulse" />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden 2xl:flex items-center justify-start p-8 mb-24"
      >
        <div className="w-[26rem] h-[26rem]">
          <img src={myImage} alt="Person" className="object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
