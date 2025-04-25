import { motion } from "framer-motion";

import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import JavaScript from "../assets/skills/javascript.png";
import TypeScript from "../assets/skills/typescript.webp";
import ReactImg from "../assets/skills/react.png";
import Node from "../assets/skills/node.png";
import GitHub from "../assets/skills/github-black.png";
import Tailwind from "../assets/skills/tailwind.png";
import Mongo from "../assets/skills/mongo.png";
import Stripe from "../assets/skills/stripe.png";
import SocketIo from "../assets/skills/socket-io.png";
import Cloudinary from "../assets/skills/cloudinary.png";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.25 }}
      name="Skills"
      className="w-full sm:h-screen "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-primary ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="HTML icon" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Stripe} alt="HTML icon" />
            <p className="my-4">STRIPE</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SocketIo} alt="HTML icon" />
            <p className="my-4">SOCKET.IO</p>
          </div>
          <div className="shadow-lg hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Cloudinary} alt="HTML icon" />
            <p className="my-4">CLOUDINARY</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
