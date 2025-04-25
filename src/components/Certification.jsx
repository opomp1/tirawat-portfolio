import { motion } from "framer-motion";

import Certificate from "../assets/generation-certificate.png";
const Certification = () => {
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
            Certification
          </p>
          <p className="py-4"></p>
        </div>

        <div className="px-4">
          <div className="w-full border-4 border-white mt-2 shadow-[10px_10px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden">
            <img src={Certificate} alt="Certificate" className="object-cover" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certification;
