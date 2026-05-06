import { useState } from 'react'
import MiseEnPage from '../components/MiseEnPage'

const IcoInstagram = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
)
const IcoTiktok = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.08a8.18 8.18 0 0 0 4.78 1.52V7.15a4.85 4.85 0 0 1-1.01-.46z"/>
    </svg>
)
const IcoLinkedin = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
)

const infos = [
  {
    icone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
    ),
    couleur: '#CA82F8',
    label: 'Localisation',
    valeur: 'Abidjan, Côte d\'Ivoire',
    lien: null,
  },
  {
    icone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 5.72 5.72l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16l-.35.92z"/>
        </svg>
    ),
    couleur: '#4ADE80',
    label: 'Téléphone',
    valeur: '+225 07 59 26 74 25',
    lien: 'tel:+2250759267425',
  },
  {
    icone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
    ),
    couleur: '#60A5FA',
    label: 'Email',
    valeur: 'karenvanie8@gmail.com',
    lien: 'mailto:karenvanie8@gmail.com',
  },
]

const sociaux = [
  {
    nom: 'Instagram',
    url: 'https://www.instagram.com/_saraxjo_?igsh=bHY3cWZzcWEweWtk&utm_source=qr',
    couleur: '#E1306C',
    bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    Ico: IcoInstagram,
  },
  {
    nom: 'TikTok',
    url: 'https://www.tiktok.com/@mugikaren?_r=1&_t=ZS-965foze184N',
    couleur: '#fff',
    bg: '#010101',
    Ico: IcoTiktok,
  },
  {
    nom: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karen-vani%C3%A9-839a9922b?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    couleur: '#fff',
    bg: 'linear-gradient(135deg, #0077B5, #00A0DC)',
    Ico: IcoLinkedin,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ message: '', nom: '', email: '' })
  const [envoye, setEnvoye] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnvoye(true)
    setForm({ message: '', nom: '', email: '' })
  }

  return (
      <MiseEnPage>
        <section className="section-colorlib" style={{ paddingTop: '12em' }}>
          <div className="conteneur">
            <div className="rangee text-center" style={{ position: 'relative' }}>
              <h2 className="titre-gras">Contact</h2>
            </div>
            <div className="intro-en-tete" style={{ paddingTop: '2em' }}>
              <span>Contact</span>
              <h2>Contactez-moi</h2>
            </div>
            <div style={{ position: 'relative', marginBottom: '3em' }}>
              <div className="rotation">
                <h2 className="titre-rotation">Contact</h2>
              </div>
            </div>

            <div className="rangee">
              {/* ── Colonne gauche ── */}
              <div className="col col-4 anime-box">

                {/* Bloc adresse */}
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '28px 24px',
                  marginBottom: '20px',
                }}>
                  <p style={{
                    fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px',
                    color: 'var(--text-muted)', fontWeight: 600, margin: '0 0 20px 0',
                  }}>
                    Mon Adresse
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {infos.map((info, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                          {/* Icône ronde */}
                          <div style={{
                            width: '38px', height: '38px', borderRadius: '50%',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                            color: info.couleur,
                          }}>
                            {info.icone}
                          </div>
                          {/* Texte */}
                          <div style={{ paddingTop: '2px' }}>
                            <p style={{
                              margin: 0,
                              fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px',
                              color: 'var(--text-muted)', fontFamily: "'Karla', Arial, sans-serif",
                              marginBottom: '3px',
                            }}>
                              {info.label}
                            </p>
                            {info.lien ? (
                                <a href={info.lien} style={{
                                  color: 'var(--text-primary)', fontSize: '14px',
                                  textDecoration: 'none', fontFamily: "'Karla', Arial, sans-serif",
                                  transition: 'color 0.2s',
                                }}
                                   onMouseEnter={e => e.target.style.color = info.couleur}
                                   onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                                >
                                  {info.valeur}
                                </a>
                            ) : (
                                <span style={{
                                  color: 'var(--text-primary)', fontSize: '14px',
                                  fontFamily: "'Karla', Arial, sans-serif",
                                }}>
                            {info.valeur}
                          </span>
                            )}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Bloc réseaux sociaux */}
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '28px 24px',
                }}>
                  <p style={{
                    fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px',
                    color: 'var(--text-muted)', fontWeight: 600, margin: '0 0 20px 0',
                  }}>
                    Retrouvez-moi sur
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {sociaux.map((s, i) => (
                        <a
                            key={s.nom}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex', alignItems: 'center', gap: '14px',
                              textDecoration: 'none',
                              padding: '10px 14px',
                              borderRadius: '6px',
                              border: hoveredSocial === i ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--border)',
                              background: hoveredSocial === i ? 'var(--bg-elevated)' : 'transparent',
                              transform: hoveredSocial === i ? 'translateX(4px)' : 'translateX(0)',
                              transition: 'all 0.22s ease',
                            }}
                            onMouseEnter={() => setHoveredSocial(i)}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                          {/* Icône avec fond couleur */}
                          <div style={{
                            width: '38px', height: '38px', borderRadius: '50%',
                            background: s.bg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0, color: '#fff',
                            boxShadow: '0 3px 10px rgba(0,0,0,0.35)',
                          }}>
                            <s.Ico />
                          </div>
                          {/* Label */}
                          <span style={{
                            flex: 1,
                            color: 'var(--text-primary)', fontSize: '14px',
                            fontFamily: "'Karla', Arial, sans-serif", fontWeight: 500,
                          }}>
                        {s.nom}
                      </span>
                          {/* Flèche */}
                          <span style={{
                            color: hoveredSocial === i ? 'var(--accent)' : 'var(--text-muted)',
                            fontSize: '16px', transition: 'color 0.22s', flexShrink: 0,
                          }}>→</span>
                        </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Formulaire ── */}
              <div className="col col-7 anime-box" style={{ marginLeft: '8.33%' }}>
                {envoye ? (
                    <div style={{
                      padding: '3em 2em',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--accent)',
                      borderRadius: 6,
                      textAlign: 'center',
                    }}>
                      <div style={{ fontSize: '44px', marginBottom: '0.4em' }}>✨</div>
                      <h3 style={{ color: '#CA82F8', marginBottom: '0.5em' }}>Message envoyé !</h3>
                      <p>Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
                      <button className="btn btn-primaire" onClick={() => setEnvoye(false)}>
                        Envoyer un autre message
                      </button>
                    </div>
                ) : (
                    <div>
                  <textarea
                      className="champ-contact"
                      rows="7"
                      placeholder="Votre message"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'vertical' }}
                  />
                      <div className="rangee">
                        <div className="col col-6">
                          <input
                              type="text"
                              className="champ-contact"
                              placeholder="Votre nom"
                              value={form.nom}
                              onChange={e => setForm({ ...form, nom: e.target.value })}
                          />
                        </div>
                        <div className="col col-6">
                          <input
                              type="email"
                              className="champ-contact"
                              placeholder="Votre email"
                              value={form.email}
                              onChange={e => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <button
                          className="btn btn-primaire"
                          onClick={handleSubmit}
                          disabled={!form.message || !form.nom || !form.email}
                      >
                        Envoyer le Message
                      </button>
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </MiseEnPage>
  )
}