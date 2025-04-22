import { motion } from "framer-motion";

import { data } from "../data/data.js";

const Projects = () => {
  const project = data;

  return (
    <div name="Projects" className="w-full h-full flex px-4">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent projects</p>
        </motion.div>

        {/* container for projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gird Item */}
          {project.map((item) => (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.25 }}
              className="card lg:card-side bg-base-100 shadow-sm transition-all duration-300 hover:scale-105"
              key={item.id}
            >
              <figure>
                <img src={item.image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
