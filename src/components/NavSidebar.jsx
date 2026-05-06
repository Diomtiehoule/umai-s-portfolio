import { Link, useLocation } from 'react-router-dom'
import imgWork1 from '../assets/images/img26.jpg'
import imgWork2 from '../assets/images/img27.jpg'

const liens = [
  { chemin: '/',               label: 'Accueil' },
  { chemin: '/services',       label: 'Services' },
  { chemin: '/parcours',       label: 'Parcours' },
  { chemin: '/sarart-crochet', label: "Sar'Art Crochet" },
  { chemin: '/shooting',       label: 'Shooting' },
  { chemin: '/a-propos',       label: 'A propos' },
  { chemin: '/contact',        label: 'Contact' },
]

export default function NavSidebar({ estOuvert, onFermer }) {
  const { pathname } = useLocation()

  return (
    <nav id="nav-principal" role="navigation">
      <button
        className={'nav-toggle nav-toggle-fermer' + (estOuvert ? ' actif' : '')}
        onClick={onFermer}
        aria-label="Fermer le menu"
      >
        <i></i>
      </button>

      <div style={{ paddingTop: '5em' }}>
        <div className="nav-recherche">
          {/*<input type="text" placeholder="Rechercher..." />*/}
          {/*<button>Recherche</button>*/}
        </div>

        <ul>
          {liens.map(({ chemin, label }) => (
            <li key={chemin} className={pathname === chemin ? 'actif' : ''}>
              <Link to={chemin} onClick={onFermer}>{label}</Link>
            </li>
          ))}
        </ul>

       
      </div>
    </nav>
  )
}
