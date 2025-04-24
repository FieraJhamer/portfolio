// Componentes
import Introduction from './components/Introduction/Introduction.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
//3
import Clock from './components/Clock/Clock.jsx'
//5
import Terminal from './components/Terminal/Terminal.jsx'
import Projects from './components/Projects/Projects.jsx'

// Estilos generales
import './App.css'

// Sistema de grid
import './styles/grid/gridLayout.css'
import './styles/grid/gridAnimation.css'

// Fondo animado
import "./styles/background/background.css"
import "./styles/background/background.js"

function App() {
  return (
    <main>
      <div className="div1">
        <Introduction />
      </div>

      <div className="div2">
        <AboutMe />
      </div>

      <div className="div3">3 | Contacto</div>

      <div className="div4">
        <Clock />
      </div>

      <div className="div5">5 | Current</div>
      
      <div className="div7">
        <Projects />
      </div>
      
      <div className="div8">8 | 1er proyecto</div>
      <div className="div9">9 | 2do proyecto</div>
      <div className="div10">10 | 3er proyecto</div>
      <div className="div11">11 | Trabajo</div>
      <div className="div12">12 | Derechos</div>

      {/* Se colocó este div al final para que esté por encima de todo al abrir la terminal */}
      <div className="div6">
        <Terminal />
      </div>
    </main>
  )
}

export default App