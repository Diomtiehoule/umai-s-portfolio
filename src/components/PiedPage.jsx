import { useState } from 'react'
import img1 from '../assets/images/main1.jpeg'
import img2 from '../assets/images/img20.jpeg'
import img3 from '../assets/images/img2.jpeg'

const articlesBlog = [
  { img: img1, date: 'Carrière', titre: "Mon parcours" , link : "/parcours" },
  { img: img2, date: 'Artisanat', titre: "Sar'Art crochet" , link : "/sarart-crochet" },
  { img: img3, date: 'Photographie', titre: 'Shooting' , link : "/shooting" },
]

export default function PiedPage() {
  const [email, setEmail] = useState('')

  return (
    <footer>
      <div id="pied-page">
        <div className="conteneur">
          <div className="rangee">
            {/* Colonne 1 : contact rapide */}
            <div className="col col-4 pb-sm">
              <h2>Parlons-en</h2>
              <p>À la rencontre du professionnalisme et de l’art, je construis un équilibre entre rigueur, discipline et créativité.</p>
              <p><a href="#">karenvanie8@gmail.com</a></p>
              <p className="icones-sociales">
                <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>K</span></a>
                <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>a</span></a>
                <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>r</span></a>
                <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>e</span></a>
                <a href="#"><span style={{ fontSize: 18, color: '#CA82F8' }}>n</span></a>
              </p>
            </div>

            {/* Colonne 2 : derniers articles */}
            <div className="col col-4 pb-sm">
              <h2>Univers</h2>
              {articlesBlog.map((a, i) => (
                <div key={i} className="entree-footer">
                  <a href={a.link} className="img-featured" style={{ backgroundImage: `url(${a.img})` }}></a>
                  <div className="desc-footer">
                    <span>{a.date}</span>
                    <h3><a href={a.link}>{a.titre}</a></h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Colonne 3 : newsletter */}
            <div className="col col-4 pb-sm">
              <h2>Newsletter</h2>
              <p>Restez informé des dernières actualités et réalisations.</p>
              <div className="newsletter-abonnement text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button className="btn-personnalise">S'abonner</button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="rangee" style={{ marginTop: '3em' }}>
            <div className="col col-12 text-center">
              <p style={{ marginBottom: 0 }}>
                &copy; {new Date().getFullYear()} Tous droits réservés. Sara VANIE - Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
