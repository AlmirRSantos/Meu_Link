import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'
import { Link } from 'react-router-dom'

import Menu from '../../componentes/Menu'
import LinkItem from '../../componentes/LinkItem'

import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home() {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function linkEncurtado() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink('@encurtaLink', response.data)

      setLink('')
    } catch {
      alert('Ops algo deu errado!')
      setLink('')
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />

        <h1>SujeitoLink</h1>

        <span>Cole seu link para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>

        <button onClick={linkEncurtado}>Encurtar Link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  )
}
