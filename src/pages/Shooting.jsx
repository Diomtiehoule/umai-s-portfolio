import { useState } from 'react'
import MiseEnPage from '../components/MiseEnPage'
import imgWork1 from '../assets/images/img13.jpeg'
import imgWork2 from '../assets/images/img5.jpeg'
import imgWork3 from '../assets/images/img3.jpeg'
import imgWork4 from '../assets/images/img11.jpeg'
import imgWork5 from '../assets/images/nail1.jpeg'
import imgWork6 from '../assets/images/img9.jpeg'
import imgWork7 from '../assets/images/nail2.jpeg'
import imgAbout from '../assets/images/img2.jpeg'
import imgAbout2 from '../assets/images/img8.jpeg'

const photos = [
  { img: imgAbout,  format: 'portrait',  lieu: 'The Stay', titre: 'Shooting' },
  { img: imgWork1,  format: 'paysage',   lieu: 'Roots',    titre: 'Christmas tour' },
  { img: imgWork2,  format: 'portrait',  lieu: 'The Stay', titre: 'Shooting' },
  { img: imgAbout2, format: 'portrait',  lieu: 'Studio',      titre: 'Shooting' },
  { img: imgWork3,  format: 'paysage',   lieu: 'The Stay',        titre: 'Shooting' },
  { img: imgWork4,  format: 'portrait',  lieu: 'Studio', titre: 'Shooting' },
  { img: imgWork5,  format: 'paysage',   lieu: 'Cocinails',        titre: 'Model photo' },
  { img: imgWork6,  format: 'portrait',  lieu: 'Studio',    titre: 'Shooting' },
  { img: imgWork7,  format: 'paysage',   lieu: 'Cocinails',        titre: 'Model photo'  },
]

export default function Shooting() {
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const precedent = () => setLightboxIdx(i => (i - 1 + photos.length) % photos.length)
  const suivant   = () => setLightboxIdx(i => (i + 1) % photos.length)

  return (
    <MiseEnPage>
      <section className="section-colorlib" >
        <div className="conteneur">

          {/* Titre fond décoratif */}
          <div className="rangee text-center">
              <div className="titre-gras-wrap">
                <h2 className="titre-gras">Shooting</h2>
              </div>
            </div>

          {/* En-tête intro */}
          <div className="intro-en-tete" style={{ paddingTop: '2em' }}>
            <span>Photo Modèle</span>
            <h2>Sessions Shooting</h2>
          </div>

          <div style={{ position: 'relative', marginBottom: '3em' }}>
            <div className="rotation">
              <h2 className="titre-rotation">Photos</h2>
            </div>
          </div>

          {/* Intro courte */}
          <div className="rangee" style={{ justifyContent: 'center', marginBottom: '4em' }}>
            <div className="col col-8" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.9' }}>
                Une sélection de collaborations avec des photographes, en studio comme en extérieur.
                Des univers variés.
              </p>
            </div>
          </div>

          {/* Grille photos asymétrique */}
          <div className="shooting-grille">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`shooting-carte${photo.format === 'portrait' ? ' portrait' : ' paysage'} anime-box`}
                onClick={() => setLightboxIdx(i)}
                style={{ cursor: 'pointer' }}
              >
                <img src={photo.img} alt={photo.titre} />
                <div className="shooting-overlay">
                  <div className="shooting-info">
                    <span className="shooting-lieu">{photo.lieu}</span>
                    <h4 className="shooting-titre">{photo.titre}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox avec navigation */}
      {lightboxIdx !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIdx(null)}>
          <button className="lightbox-fermer" onClick={() => setLightboxIdx(null)}>×</button>
          <button
            className="shooting-nav gauche"
            onClick={e => { e.stopPropagation(); precedent() }}
          >‹</button>
          <div onClick={e => e.stopPropagation()}>
            <img src={photos[lightboxIdx].img} alt={photos[lightboxIdx].titre} />
            <div className="shooting-lightbox-legende">
              <span>{photos[lightboxIdx].lieu}</span>
              <h4>{photos[lightboxIdx].titre}</h4>
            </div>
          </div>
          <button
            className="shooting-nav droite"
            onClick={e => { e.stopPropagation(); suivant() }}
          >›</button>
        </div>
      )}
    </MiseEnPage>
  )
}
