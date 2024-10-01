import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
