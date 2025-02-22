import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white animate-fadeIn py-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 animate-slideIn">
          <p className="text-3xl font-semibold mb-4 text-emerald-500">
            Hey there!, I{"'"}m
          </p>
          <h1 className="text-7xl font-bold mb-4 px-2">Nirmal Neupane.</h1>
          <p className="py-5">
            <span className="text-xl mb-4 text-white mt-4 font-bold inline">
              Software Engineer.
            </span>
            <span className="text-xl mb-4 text-gray-400 mt-4 font-bold inline">
              {" "}
              Passionate about building scalable web applications and optimizing
              API performance.
            </span>
          </p>

          <p>
            Dedicated, meticulous individual with a can-do attitude strong
            aptitude for problem-solving and rapid learning; enjoys working in a
            fast-paced setting. a cooperative team player with a talent for
            speaking clearly. devoted to producing high-quality work and
            remaining current with market trends.
          </p>

          <div className="flex space-x-4 py-6">
            <a
              href="https://github.com/NirmalNyaupane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-500 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nirmalneupane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-500 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div
          className="md:w-1/2 animate-slideIn"
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/placeholder.svg"
            alt="Nirmal Neupane"
            width={300}
            height={300}
            className="rounded-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
