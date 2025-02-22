import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-sm animate-fadeIn">
      <nav className="container mx-auto px-4 py-4 flex justify-end items-center">
        <div className="space-x-4">
          <Link href="#experience" className="text-gray-300 hover:text-emerald-500 transition-colors duration-200">
            Experience
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-emerald-500 transition-colors duration-200">
            Skills
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-emerald-500 transition-colors duration-200">
            Projects
          </Link>
        </div>
      </nav>
    </header>
  )
}

