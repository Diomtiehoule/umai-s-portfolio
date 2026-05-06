import MiseEnPage from '../components/MiseEnPage'
import imgServices from '../assets/images/img23.jpeg'

export default function Services() {
  return (
    <MiseEnPage>
      <section className="section-colorlib">
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
                <div className="un-quart" style={{ backgroundImage: `url(${imgServices})` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MiseEnPage>
  )
}
