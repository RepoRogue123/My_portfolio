import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { atharva } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>Overview.</h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hello! I'm Atharva Honparkhe, a passionate and versatile developer with
          a keen interest in building impactful technology solutions. I enjoy working
          across a wide range of domains, from developing intelligent systems using 
          Machine Learning and Deep Learning to crafting seamless, interactive web
          applications as a full-stack developer.

          I'm proficient in technologies such as Python, JavaScript, C++, Java, SQL, Django, React, TensorFlow,
          PyTorch, OpenCV and have hands-on experience with modern frameworks like Next.js, Tailwind, Firebase etc.
          I have hands-on experience in developing e-commerce
          platforms. I am also experienced in managing the full
          project lifecycle from setup to deployment. Driven by curiosity and a love for problem solving, I value clean
          architecture, efficient design and meaningful collaboration. Whether I'm building intelligent models or designing end-to-end
          applications, I aim to deliver work that is robust, elegant, and user-focused. I'm always open to learning, collaborating,
          and building the next big thing !! Feel free to contact me at{" "} 
          <a
            href="mailto:b23ee1006@iitj.ac.in"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            b23ee1006@iitj.ac.in.
          </a>{" "}
          I'm always open to new opportunities and collaborations!{" "}
        </p>
        <Tilt className="xs:w-[450px] xs:h-[450px] w-full h-full m-auto max-[1000px]:my-14 mb-10 -mt-20">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[450px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[350px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={atharva}
                alt="atharva"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Tilt>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
