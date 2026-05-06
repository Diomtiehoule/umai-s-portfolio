import { Link } from 'react-router-dom'

export default function Entete({ onToggleMenu, menuOuvert }) {
  return (
    <header className="entete-principale">
      <div className="conteneur">
        <div className="entete-barre">
          <div className="logo-marque">
            <Link className="logo-lien" to="/">
              <span>Sa</span>
              <span>ra</span>
            </Link>
          </div>
          <button
            className={'nav-toggle' + (menuOuvert ? ' actif' : '')}
            onClick={onToggleMenu}
            aria-label="Ouvrir le menu"
          >
            <i></i>
          </button>
        </div>
      </div>
    </header>
  )
}
