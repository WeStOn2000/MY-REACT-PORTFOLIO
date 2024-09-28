import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/projects"

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
