import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.25 }}
      name="Contact"
      className="w-full h-full flex justify-center items-center p-8"
    >
      <form
        method="POST"
        action="https://getform.io/f/db2ebf84-7070-40ec-a497-3e46cc29ab1a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Contact
          </p>
          <p className="text-primary py-4">
            // Submit the form below or shoot me an email -
            <span className="font-bold"> bamiowen@gmail.com</span>
          </p>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Name"
            name="name"
          />
        </fieldset>

        <fieldset className="fieldset my-4">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Name"
            name="name"
          />
        </fieldset>

        <textarea
          className="textarea w-full"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="btn btn-success my-8 mx-auto =">
          Let's Collaborate
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
