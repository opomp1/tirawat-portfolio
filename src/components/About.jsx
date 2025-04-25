import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.25 }}
      name="About"
      className="w-full min-h-[50svh] p-8 flex items-center"
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
              I’m a Junior Full Stack Developer with a passion for building
              clean, responsive, and functional web apps. I recently completed
              the Generation Australia Junior Software Developer Bootcamp, where
              I collaborated on full-stack projects in Agile/SCRUM teams, using
              tools like React, Node.js, and MongoDB. I see every challenge as a
              chance to grow, and I bring a growth mindset, sharp attention to
              detail, and strong time management to every project. My background
              in the culinary industry has shaped my ability to adapt quickly,
              work collaboratively, and stay calm under pressure. Whether it’s
              designing sleek interfaces with CSS or building secure APIs with
              JWT and Node.js, I’m always ready to learn and contribute. I’m
              currently looking for opportunities to join a passionate dev team
              where I can continue to grow and make a real impact.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
