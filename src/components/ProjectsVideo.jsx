import { motion } from "framer-motion";

import { MdLiveTv } from "react-icons/md";
import { SiGithub } from "react-icons/si";

import { data } from "../data/data.js";

import video from "../assets/dog-go-video.mp4";
import { useRef } from "react";

const ProjectsVideo = () => {
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
          {project.map((item) => {
            const videoRef = useRef(null);

            const handleMouseEnter = () => {
              videoRef.current?.play();
            };

            const handleMouseLeave = () => {
              videoRef.current?.pause();
            };

            return (
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.25 }}
                className="card card-xl  bg-base-200 shadow-md transition-all duration-300 hover:scale-105 group relative"
                key={item.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <figure className="relative overflow-hidden aspect-video">
                  <img
                    src={item.image}
                    alt="Project"
                    className="w-full h-auto transition-opacity duration-500 absolute top-0 left-0 group-hover:opacity-0"
                  />
                  <video
                    src={video}
                    ref={videoRef}
                    muted
                    controls
                    loading="lazy"
                    preload="none"
                    className="w-full h-auto opacity-0 transition-opacity duration-500 absolute top-0 left-0 group-hover:opacity-100"
                  ></video>
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.description}</p>

                  <div className="card-actions justify-end flex-nowrap">
                    <a
                      href={item?.github || "#"}
                      target="_blank"
                      className="btn bg-black text-white border-black hover:bg-gray-950"
                    >
                      <SiGithub />
                      Code
                    </a>

                    <a
                      href={item?.live || "#"}
                      target="_blank"
                      className="btn btn-error "
                    >
                      <MdLiveTv className="size-5" />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsVideo;
