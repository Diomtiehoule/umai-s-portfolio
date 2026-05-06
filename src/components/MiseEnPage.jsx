import { useState, useEffect } from 'react'
import Entete from './Entete'
import NavSidebar from './NavSidebar'
import PiedPage from './PiedPage'

export default function MiseEnPage({ children }) {
  const [menuOuvert, setMenuOuvert] = useState(false)

  useEffect(() => {
    if (menuOuvert) {
      document.body.classList.add('menu-ouvert')
    } else {
      document.body.classList.remove('menu-ouvert')
    }
    return () => document.body.classList.remove('menu-ouvert')
  }, [menuOuvert])

  return (
    <>
      <NavSidebar estOuvert={menuOuvert} onFermer={() => setMenuOuvert(false)} />
      <div
        id="colorlib-page"
        style={{ pointerEvents: menuOuvert ? 'none' : 'auto' }}
      >
        <Entete onToggleMenu={() => setMenuOuvert(v => !v)} menuOuvert={menuOuvert} />
        {children}
        <PiedPage />
      </div>
    </>
  )
}
