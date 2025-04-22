import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.25 }}
      name="About"
      className="w-full min-h-[50svh] p-8 bg-[#38445D] text-white flex items-center"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Tirawat Pompakunsawat, you can also call me Owen. Nice to
              meet you!
            </p>
          </div>
          <div>
            <p>
              Enthusiastic Junior Developer and recent graduate of Generation’s
              Junior Software Developer Bootcamp, skilled in crafting solutions
              with HTML, CSS, JavaScript, React, and Node.js. Proficient in
              agile and SCRUM methodologies, I tackle challenges as
              opportunities for continuous learning, demonstrating a perpetual
              readiness to enhance my skills. During the Bootcamp, I
              successfully collaborated on a project implementing a CRUD
              feature, showcasing my ability to deliver tangible results. Beyond
              technical proficiency, I bring an unwavering commitment to
              creating impactful solutions. With a background in the culinary
              field, I offer a unique blend of adaptability and teamwork skills
              to complement my software development expertise. Excited to
              contribute my skills and passion for innovation to a dynamic
              development team.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
