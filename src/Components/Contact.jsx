import React from "react";
import { FaXTwitter, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiArrowDownLeft } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative">
      <div className="max-w-5xl mx-auto relative">
        
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-5xl mb-5 font-light">Need A Frontend Developer?</h2>
            <p className="mt-2 text-gray-400 text-lg font-extrabold">
              I Am Available! Let’s work together.
            </p>
          </div>
          
          <div className="text-gray-400 text-8xl select-none">
            <FiArrowDownLeft />
          </div>
        </div>

       
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
           
          <a
            href="mailto:divinenation1@gmail.com"
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 hover:text-white transition-colors"
          >
            divinenation1@gmail.com
          </a>

           
          <div className="flex items-center gap-6 text-gray-400">
            <a
              href="https://x.com/devineishuman?s=21&t=7TaJwu1nHCUEhZLkvcLEbQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://wa.me/2349030129356"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/divine-nation-647a571b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/TheWeirdDee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
