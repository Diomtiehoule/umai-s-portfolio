import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import MiseEnPage from '../components/MiseEnPage'
import imgAPropos from '../assets/images/main2.jpeg'
import imgAPropos2 from '../assets/images/main1.jpeg'
import imgServices from '../assets/images/img1.jpeg'
import imgUniverParcours from '../assets/images/main1.jpeg'
import imgUniverCrochet from '../assets/images/img20.jpeg'
import imgUniverShooting from '../assets/images/img2.jpeg'

const competences = [
  { label: 'Comptabilité générale', niveau: 92, icone: '📊' },
  { label: 'Déclarations fiscales', niveau: 85, icone: '📋' },
  { label: 'Sage / Cegid', niveau: 80, icone: '💻' },
  { label: 'Model photo', niveau: 78, icone: '📸' },
  { label: "Crochet / Création", niveau: 90, icone: '🧶' },
]

const univers = [
  {
    img: imgUniverParcours,
    label: 'Carrière',
    titre: 'Mon Parcours',
    desc: 'Comptable confirmée, de l\'assistante aux postes de direction — découvrez mon évolution professionnelle.',
    lien: '/parcours',
  },
  {
    img: imgUniverCrochet,
    label: 'Artisanat',
    titre: "Sar'Art Crochet",
    desc: 'Pièces uniques, faites main avec amour — bonnets, sacs, plaids et bien plus encore.',
    lien: '/sarart-crochet',
  },
  {
    img: imgUniverShooting,
    label: 'Photographie',
    titre: 'Shooting',
    desc: 'Séances photo, collaborations mode & hôtellerie — mon univers visuel en images.',
    lien: '/shooting',
  },
]

function BarreCompetence({ label, niveau, icone, delai }) {
  const [largeur, setLargeur] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLargeur(niveau), delai)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [niveau, delai])

  return (
    <div className="comp-item" ref={ref}>
      <div className="comp-entete">
        <span className="comp-icone">{icone}</span>
        <span className="comp-label">{label}</span>
        <span className="comp-pourcent">{largeur > 0 ? niveau + '%' : '0%'}</span>
      </div>
      <div className="comp-piste">
        <div
          className="comp-barre"
          style={{ width: largeur + '%', transition: 'width 1.2s cubic-bezier(.4,0,.2,1)' }}
        />
      </div>
    </div>
  )
}

export default function Accueil() {
  const [imgAProposCourante, setImgAProposCourante] = useState(0)
  const imgAProposListe = [imgAPropos, imgAPropos2]

  return (
    <MiseEnPage>

      {/* ── À PROPOS ── */}
      <section id="a-propos" className="section-colorlib">
        <div className="conteneur">
          <div className="rangee text-center">
              <div className="titre-gras-wrap">
                <h2 className="titre-gras">À Propos</h2>
              </div>
            </div>
          <div className="rangee" style={{ alignItems: 'flex-start', paddingTop: '2em' }}>
            <div className="col col-5 anime-box">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={imgAProposListe[imgAProposCourante]}
                  alt="Portrait"
                  className="img-apropos"
                  style={{ width: '100%', cursor: 'pointer' }}
                  onClick={() => setImgAProposCourante(v => (v + 1) % imgAProposListe.length)}
                />
                <button
                  onClick={() => setImgAProposCourante(v => (v + 1) % imgAProposListe.length)}
                  style={{
                    position: 'absolute', bottom: 10, right: 10,
                    background: '#CA82F8', color: '#fff', border: 'none',
                    padding: '6px 12px', cursor: 'pointer', fontSize: 12,
                    textTransform: 'uppercase', letterSpacing: 2
                  }}
                >
                  Suivant →
                </button>
              </div>
            </div>
            <div className="col col-6 anime-box" style={{ marginLeft: '8.33%' }}>
              <div className="desc-apropos">
                <div>
                  <h2>
                    <span>Sara</span>
                    <span>VANIE</span>
                  </h2>
                </div>
                <div className="desc" style={{ paddingLeft: '6em', position: 'relative' }}>
                  <div className="rotation">
                    <h2 className="titre-rotation">À Propos</h2>
                  </div>
                  <p>
                    Je suis Sara Karen VANIE, jeune comptable, Titulaire d'un Master en Comptabilité, Contrôle & Audit (CCA), je cultive une identité artistique forte: entre shootings, collaborations dans l'hotellerie et création crochet via ma marque SAR'ART CROCHET
                  </p>
                  <p className="icones-sociales">
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>K</span></a>
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>a</span></a>
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>r</span></a>
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>e</span></a>
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>n</span></a>
                  </p>
                  <p>
                    <Link to="/contact" className="btn btn-contour">Me Contacter !</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-colorlib" style={{ background: '#141414' }}>
        <div className="conteneur">
          <div className="rangee text-center">
              <div className="titre-gras-wrap">
                <h2 className="titre-gras">Services</h2>
              </div>
            </div>
          <div className="rangee" style={{ paddingTop: '2em' }}>
            <div className="col col-12">
              <div className="services-flex">
                <div className="un-tiers">
                  <div className="intro-en-tete">
                    <span>Mes Services</span>
                    <h2>Voici Quelques-unes de Mes Compétences</h2>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div className="rotation">
                      <h2 className="titre-rotation">Services</h2>
                    </div>
                    <div className="rangee" style={{ paddingLeft: '3em' }}>
                      <div className="col col-6">
                        <div className="service-bloc anime-box">
                          <h3>1 - Comptable</h3>
                          <ul>
                            <li>Suivi de la trésorerie</li>
                            <li>Enregistrement de toutes les opérations financières</li>
                            <li>Archivage et organisation des documents comptables</li>
                            <li>Élaboration des états financiers</li>
                          </ul>
                        </div>
                        <div className="service-bloc anime-box">
                          <h3>3 - Community Manager</h3>
                          <ul>
                            <li>Création de contenu visuel</li>
                            <li>Couverture d'évènement</li>
                            <li>Conception et publication de Vlog</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="service-bloc anime-box">
                          <h3>2 - Model photo</h3>
                          <ul>
                            <li>Participation à des séances photo</li>
                            <li>Mise en avant des service partenaire</li>
                            <li>Motion Design</li>
                            <li>Animation</li>
                            <li>Effets Visuels</li>
                          </ul>
                        </div>
                        <div className="service-bloc anime-box">
                          <h3>4 - Créatrice de mode</h3>
                          <ul>
                            <li>Confection de pièce crochet sur mesure ( vêtements, accessoires, déco )</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="un-quart"
                  style={{ backgroundImage: `url(${imgServices})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MON UNIVERS ── */}
      <section id="univers" className="section-colorlib" style={{ background: '#0e0e0e', padding: '6em 0' }}>
        <div className="conteneur">
          <div className="rangee text-center">
              <div className="titre-gras-wrap">
                <h2 className="titre-gras">Univers</h2>
              </div>
            </div>
          <div className="intro-en-tete" style={{ paddingTop: '2em' }}>
            <span>Explorez</span>
            <h2>Mon Univers</h2>
          </div>
          <div style={{ position: 'relative', marginBottom: '3em' }}>
            <div className="rotation">
              <h2 className="titre-rotation">Univers</h2>
            </div>
          </div>

          <div className="univers-grille">
            {univers.map((u, i) => (
              <Link to={u.lien} key={i} className="univers-carte anime-box" style={{ animationDelay: (i * 0.15) + 's' }}>
                <div className="univers-bg" style={{ backgroundImage: `url(${u.img})` }}></div>
                <div className="univers-overlay"></div>
                <div className="univers-contenu">
                  <span className="univers-label">{u.label}</span>
                  <h3 className="univers-titre">{u.titre}</h3>
                  <p className="univers-desc">{u.desc}</p>
                  <span className="univers-btn">Découvrir →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </MiseEnPage>
  )
}
