import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Home from './pages/Home'
import About from './pages/About'
import Cults from './pages/Cults'
import Contact from './pages/Contact'
import Offer from './pages/Offer'

function AppContent() {
  const [showIntro, setShowIntro] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <>
      {showIntro && <Intro onDone={() => setShowIntro(false)} />}

      <div className="shell" style={{ visibility: showIntro ? 'hidden' : 'visible' }}>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/cults"   element={<Cults />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offer"   element={<Offer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return <AppContent />
}
