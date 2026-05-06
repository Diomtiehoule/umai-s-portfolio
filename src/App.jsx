import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Shooting from './pages/Shooting'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/services" element={<Services />} />
      <Route path="/parcours" element={<Portfolio />} />
      <Route path="/sarart-crochet" element={<Blog />} />
      <Route path="/shooting" element={<Shooting />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
