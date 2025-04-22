// Componentes
import Introduction from './components/Introduction/Introduction.jsx'
import Clock from './components/Clock/Clock.jsx'

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
        2 | Sobre mí <br /> ----------- <br /> Habilidades
      </div>

      <div className="div3">3 | Contacto</div>

      <div className="div4">
        <Clock />
      </div>
      <div className="div5">5 | Current</div>
      <div className="div6">6 | ???</div>
      <div className="div7">7 | ⬇️ Proyectos ⬇️</div>
      <div className="div8">8 | 1er proyecto</div>
      <div className="div9">9 | 2do proyecto</div>
      <div className="div10">10 | 3er proyecto</div>
      <div className="div11">11 | Trabajo</div>
      <div className="div12">12 | Derechos</div>
    </main>
  )
}

export default App