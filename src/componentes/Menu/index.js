import './menu.css'

import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://youtube.com/c/sujeitoprogramador">
        <BsYoutube color="#FFF" size={24} />
        <p> Youtube</p>
      </a>
      <a className="social" href="https://instagram.com/c/sujeitoprogramador">
        <BsInstagram color="#FFF" size={24} />
        <p> Instagram</p>
      </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  )
}
