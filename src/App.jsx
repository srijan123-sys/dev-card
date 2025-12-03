import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Check } from 'lucide-react'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)
  const email = "tera_email@example.com" // Apna email yahan daalna

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card-container">
      <div className="glow-bg"></div>
      <div className="card">
        <div className="header">
          <div className="status-badge"><span className="dot"></span> Open to Work</div>
          <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" alt="Profile" className="profile-img"/>
        </div>
        <div className="content">
          <h1>Tera Naam</h1>
          <p className="title">Frontend Developer</p>
          <p className="bio">Building modern web experiences with React & Vite.</p>
          <div className="skills">
            <span>React</span><span>Vite</span><span>Tailwind</span>
          </div>
          <div className="actions">
            <a href="#" className="btn icon-btn"><Github size={20} /></a>
            <a href="#" className="btn icon-btn"><Linkedin size={20} /></a>
            <button onClick={copyEmail} className="btn primary-btn">
              {copied ? <Check size={18} /> : <Mail size={18} />} {copied ? "Copied" : "Hire Me"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App