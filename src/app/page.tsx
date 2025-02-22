import Header from "../components/Header"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}
