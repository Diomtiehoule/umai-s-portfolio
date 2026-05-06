import { Link } from 'react-router-dom'
import MiseEnPage from '../components/MiseEnPage'
import imgAPropos from '../assets/images/main2.jpeg'
import imgServices from '../assets/images/img24.jpeg'

const temoignages = [
  { texte: '« Un petit fleuve nommé Duden coule près de chez nous et nous approvisionne en ce qui est nécessaire. »', auteur: 'Georges Dupont' },
  { texte: '« Même l\'omnipotent Ponctuation n\'a aucun contrôle sur les textes aveugles. »', auteur: 'Daniel Fontaine' },
  { texte: '« Lorsqu\'elle atteignit les premières collines des Montagnes Italiques, elle eut une dernière vue sur la ligne d\'horizon de sa ville natale. »', auteur: 'Liam Renard' },
]

import { useState } from 'react'

export default function APropos() {
  const [temoignageCourant, setTemoignageCourant] = useState(0)

  return (
    <MiseEnPage>
      {/* ── À PROPOS ── */}
      <section className="section-colorlib" >
        <div className="conteneur">
          <div className="rangee text-center">
              <div className="titre-gras-wrap">
                <h2 className="titre-gras">À Propos</h2>
              </div>
            </div>
          <div className="rangee mb-4em" style={{ paddingTop: '2em', alignItems: 'flex-start' }}>
            <div className="col col-5 anime-box">
              <img src={imgAPropos} alt="Noah Henderson" className="img-apropos" style={{ width: '100%' }} />
            </div>
            <div className="col col-6 anime-box" style={{ marginLeft: '8.33%' }}>
              <div className="desc-apropos">
                <h2>
                  <span>Sara</span>
                  <span>VANIE</span>
                </h2>
                <div className="desc" style={{ paddingLeft: '6em', position: 'relative' }}>
                  <div className="rotation">
                    <h2 className="titre-rotation">À Propos</h2>
                  </div>
                  <p>
                    Je suis Sara Karen VANIE, jeune comptable, Titulaire d'un Master en Comptabilité, Contrôle & Audit (CCA), je cultive une identité artistique forte: entre shootings, collaborations dans l’hotellerie et création crochet via  ma marque SAR'ART CROCHET
                  </p>
                  <p className="icones-sociales">
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>f</span></a>
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>t</span></a>
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>g+</span></a>
                    <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>d</span></a>
                  </p>
                  <p>
                    <Link to="/parcours" className="btn btn-contour">Voir Mon Parcours</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 colonnes de texte */}
          <div className="rangee anime-box">
              <div className="col col-4">
                <p>
                  Personne déterminée et claire dans ses objectifs, guidée par des valeurs humaines fortes telles que le respect, l’intégrité et l’empathie. Je m’engage à avancer avec cohérence, à rester fidèle à mes principes et à construire des relations basées sur la confiance et l’authenticité.
                </p>
              </div>
            <div className="col col-4">
              <p>
                Personne créative et passionnée par la mode et l’art, je m’exprime à travers le crochet, la création de contenus vidéo et le mannequinat. J’aime transformer mes idées en visuels uniques, en combinant esthétique, originalité et sens du détail, tout en développant une identité artistique.
              </p>
            </div>
            <div className="col col-4">
              <p>
                Personne curieuse et sensible, passionnée par la musique et la lecture, je trouve dans ces univers une source d’inspiration et d’évasion. J’aime découvrir de nouvelles sonorités, explorer différents styles littéraires et enrichir ma vision du monde à travers les mots et les émotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section className="section-colorlib" style={{ background: 'var(--bg-alt)' }}>
        <div className="conteneur">
          <div className="rangee text-center">
              <div className="titre-gras-wrap">
                <h2 className="titre-gras">Objectifs</h2>
              </div>
            </div>
          <div className="rangee" style={{ paddingTop: '2em' }}>
            <div className="col col-12">
              <div className="services-flex">
                <div className="un-tiers">
                  <div className="intro-en-tete">
                    <span>Cible</span>
                    <h2>Mes Objectifs</h2>
                    <p>
                      Je combine une solide expertise en comptabilité et audit avec un univers créatif riche : modèle photo, fondatrice de marque crochet et membre de chœur. Je maîtrise les environnements financiers exigeants tout en cultivant une présence forte dans les secteurs de la mode, de la communication et de l'artisanat.
                    </p>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div className="rotation">
                      <h2 className="titre-rotation">Objectifs</h2>
                    </div>
                    <div style={{ paddingLeft: '3em' }}>
                      <div className="service-bloc anime-box">
                        <h3>1 - Carrière profésionnelle</h3>
                        <p>
                          Évoluer progressivement dans le domaine de la comptabilité en développant mes compétences techniques et analytiques, afin de devenir un comptable confirmé puis, à terme, un responsable comptable ou un expert-comptable. Je souhaite acquérir une solide maîtrise des normes comptables, de la gestion financière et des outils digitaux, tout en contribuant efficacement à la performance et à la transparence financière de l’entreprise.
                        </p>
                      </div>
                      <div className="service-bloc anime-box">
                        <h3>2 - Passion</h3>
                        <p>
                          Allier une progression rapide en finance (comptabilité → finance d’entreprise) avec le développement d’une activité de modèle photo, afin de construire à la fois une carrière stable et une marque personnelle forte.
                        </p>
                      </div>
                      <div className="service-bloc anime-box">
                        <h3>3 - Personnel</h3>
                        <p>
                          Devenir une personne rigoureuse, confiante et polyvalente, capable de concilier performance professionnelle en finance et expression créative à travers le modeling.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="un-quart" style={{ backgroundImage: `url(${imgServices})` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      {/*<section className="section-colorlib">*/}
      {/*  <div className="conteneur">*/}
      {/*    <div className="rangee text-center" style={{ position: 'relative' }}>*/}
      {/*      <h2 className="titre-gras">Témoignages</h2>*/}
      {/*    </div>*/}
      {/*    <div className="intro-en-tete" style={{ paddingTop: '2em' }}>*/}
      {/*      <span>Témoignages</span>*/}
      {/*      <h2>Ce Que Disent Nos Clients</h2>*/}
      {/*    </div>*/}
      {/*    <div style={{ position: 'relative', marginBottom: '2em' }}>*/}
      {/*      <div className="rotation"><h2 className="titre-rotation">Avis</h2></div>*/}
      {/*    </div>*/}
      {/*    <div className="temoignage-carousel anime-box">*/}
      {/*      <div className="temoignage-slide">*/}
      {/*        <blockquote>*/}
      {/*          <p>{temoignages[temoignageCourant].texte}</p>*/}
      {/*          <span>&mdash; {temoignages[temoignageCourant].auteur}</span>*/}
      {/*        </blockquote>*/}
      {/*      </div>*/}
      {/*      <div className="temoignage-dots">*/}
      {/*        {temoignages.map((_, i) => (*/}
      {/*          <button key={i} className={`dot${temoignageCourant === i ? ' actif' : ''}`}*/}
      {/*            onClick={() => setTemoignageCourant(i)} />*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </MiseEnPage>
  )
}
