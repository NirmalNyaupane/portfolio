import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20 animate-fadeIn">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 animate-slideIn">
          <h1 className="text-4xl font-bold mb-4">Nirmal Neupane</h1>
          <h2 className="text-2xl mb-4 text-emerald-500">Full Stack Developer</h2>
          <p className="mb-6">Passionate about building scalable web applications and optimizing API performance.</p>
          <div className="flex space-x-4">
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
        <div className="md:w-1/2 animate-slideIn" style={{ animationDelay: "0.2s" }}>
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
  )
}
