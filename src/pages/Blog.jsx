import { useState } from 'react'
import { Link } from 'react-router-dom'
import MiseEnPage from '../components/MiseEnPage'
import imgBlog1 from '../assets/images/img16.jpg'
import imgBlog2 from '../assets/images/img17.jpg'
import imgBlog3 from '../assets/images/img18.jpg'
import imgBlog4 from '../assets/images/img19.jpeg'
import imgBlog5 from '../assets/images/img20.jpeg'
import imgBlog6 from '../assets/images/img21.jpg'
import imgBlog7 from '../assets/images/img22.jpg'
import imgBlog8 from '../assets/images/img14.jpg'
import imgBlog9 from '../assets/images/img15.jpg'

const pieces = [
  { img: imgBlog1, categorie: 'Accessoires' },
  { img: imgBlog2, categorie: 'Vetements',  },
  { img: imgBlog3, categorie: 'Vetements',  },
  { img: imgBlog4, categorie: 'Vetements',  },
  { img: imgBlog5, categorie: 'Vetements',  },
  { img: imgBlog6, categorie: 'Accessoires', },
  { img: imgBlog7, categorie: 'Accessoires', },
  { img: imgBlog8, categorie: 'Vetements',  },
  { img: imgBlog9, categorie: 'Vetements',  },
]

const categories = ['Tous', 'Accessoires', 'Vetements']

export default function SarArtCrochet() {
  const [filtre, setFiltre] = useState('Tous')

  const piecesFiltrees = filtre === 'Tous'
    ? pieces
    : pieces.filter(p => p.categorie === filtre)

  return (
    <MiseEnPage>
      <section className="section-colorlib" style={{ paddingTop: '7em' }}>
        <div className="conteneur">

          <div className="rangee text-center titre-gras-wrap">
            <h2 className="titre-gras">Crochet</h2>
          </div>

          <div className="intro-en-tete" style={{ paddingTop: '2em' }}>
            <span>Creation artisanale</span>
            <h2>Sar'Art Crochet</h2>
          </div>

          <div style={{ position: 'relative', marginBottom: '3em' }}>
            <div className="rotation">
              <h2 className="titre-rotation">Crochet</h2>
            </div>
          </div>

          <div className="crochet-filtres" style={{ textAlign: 'center', marginBottom: '3em' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className={'crochet-filtre-btn' + (filtre === cat ? ' actif' : '')}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="rangee">
            {[0, 1, 2].map(col => (
              <div key={col} className="col col-4">
                {piecesFiltrees.filter((_, i) => i % 3 === col).map((piece, i) => (
                  <div key={i} className="article-blog anime-box">
                    <Link to="#" className="img-blog">
                      <img src={piece.img} alt={piece.titre} />
                      <div className="superposition"></div>
                      <div className="lien">
                        <span className="lire">Sar'Art</span>
                      </div>
                    </Link>
                    <div className="desc-article">
                      <span className="meta">{piece.categorie}</span>
                      <h2><Link to="#">{piece.titre}</Link></h2>
                      <p>{piece.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>
    </MiseEnPage>
  )
}
