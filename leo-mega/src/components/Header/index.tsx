import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import LightLogo from '../../assets/28 - Logomarca Principal - Fundo Transparente - Colorido 2.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header sticky">
      <img src={LightLogo} alt="Logo" />

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#evolucao" onClick={() => setMenuOpen(false)}>Evolução</a>
        <a href="#info" onClick={() => setMenuOpen(false)}>Informações</a>
        <a href="#bio" onClick={() => setMenuOpen(false)}>Bio</a>
        <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>
    </header>
  )
}
