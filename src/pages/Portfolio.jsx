import MiseEnPage from '../components/MiseEnPage'

const parcours = [
  {
    poste: 'Comptable Junior',
    entreprise: 'AGENTIS',
    fonction: 'Comptabilite generale & Paie',
    periode: 'Jan 2026 — Present',
    details: "Saisir les opérations comptables (factures, dépenses, recettes). Mettre à jour les tableaux de suivi (Excel ou logiciels comptables).",
    actuel: true,
    cote: 'gauche',
  },
  {
    poste: 'Assistance administrative et comptable',
    entreprise: 'ROOTS HOTEL',
    fonction: 'Gestion de la trésorerie',
    periode: 'Oct 2025 — Dec 2026',
    details: "Gestion du stock alimentaire. Gestion de la trésorerie. Déclaration CNPS. Responsable Achat de denrées  alimentaires",
    actuel: false,
    cote: 'droite',
  },
  {
    poste: 'Assistante Comptable ( Stage )',
    entreprise: 'EMUCI CI',
    fonction: 'Initiation a la comptabilite cabinet',
    periode: 'Juill 2025 — Sept 2025',
    details: "Saisie des opérations comptables. Préparation et suivi des tiers/fournisseurs. Rapprochement bancaire. Remise de cheque. Archivage de document de banque",
    actuel: false,
    cote: 'gauche',
  },
  {
    poste: 'Assistante Audit Interne ( stage )',
    entreprise: 'BSIC CI',
    fonction: "Initiation a l'audit",
    periode: 'Jan 2025 — Juin 2025',
    details: "Réalisation de missions d’audit au service conformité. Analyse du contrôle interne et formulation de recommandation pour améliorer les processus.",
    actuel: false,
    cote: 'droite',
  },
  {
    poste: 'Assistante de Direction ( stage ) ',
    entreprise: 'FRIEDLANDER CI',
    fonction: 'Assistante',
    periode: 'Juin 2024 — Sept 2024',
    details: "Gestion administrative. organisation logistique pour le personnel expatrié.",
    actuel: false,
    cote: 'gauche',
  },
  {
    poste: 'Assistante Comptable ( Stage )',
    entreprise: 'BNI',
    fonction: 'Initiation a la comptabilite cabinet',
    periode: 'Juin 2023 — Sept 2023',
    details: "Suivi de l’état des comptes fournisseurs. ",
    actuel: false,
    cote: 'droite',
  },
]

const diplomes = [
  { annee: '2020', titre: 'BACCALAUREAT', lieu: 'Lycee Moderne de Port-Bouet' },
  { annee: '2023', titre: 'LICENCE DE COMPTABILITÉ', lieu: " Institut Universitaire d'Abidjan "},
  { annee: '2025', titre: 'MASTER COMPTABILITÉ & AUDIT', lieu: " Institut Universitaire d'Abidjan " },
]

export default function Parcours() {
  return (
    <MiseEnPage>
      <section className="section-colorlib" style={{ paddingTop: '7em' }}>
        <div className="conteneur">

          <div className="rangee text-center titre-gras-wrap">
            <h2 className="titre-gras">Parcours</h2>
          </div>

          <div className="intro-en-tete" style={{ paddingTop: '2em' }}>
            <span>Experiences professionnelles</span>
            <h2>Mon Parcours</h2>
          </div>

          <div style={{ position: 'relative', marginBottom: '4em' }}>
            <div className="rotation">
              <h2 className="titre-rotation">Carriere</h2>
            </div>
          </div>

          <div className="parcours-timeline">
            <div className="parcours-ligne-centrale"></div>

            {parcours.map((exp, i) => (
              <div
                key={i}
                className={'parcours-item parcours-' + exp.cote}
                style={{ animationDelay: (i * 0.15) + 's' }}
              >
                <div className="parcours-dot">
                  {exp.actuel && <span className="parcours-pulse"></span>}
                </div>

                <div className={'parcours-contenu' + (exp.actuel ? ' actuel' : '')}>
                  <div className="parcours-periode-wrap">
                    <span className="parcours-periode">{exp.periode}</span>
                    {exp.actuel && <span className="parcours-badge">En poste</span>}
                  </div>
                  <h3 className="parcours-poste">{exp.poste}</h3>
                  <div className="parcours-meta">
                    <span>&#x1F3E2; {exp.entreprise}</span>
                    <span className="parcours-sep">|</span>
                    <span>&#x1F4CB; {exp.fonction}</span>
                  </div>
                  <p className="parcours-details">{exp.details}</p>
                </div>
              </div>
            ))}

            <div className="parcours-clearfix"></div>
          </div>

          <div className="parcours-formation">
            <div className="parcours-formation-header">
              <span>Formation academique</span>
              <h3>Diplomes &amp; Certifications</h3>
            </div>
            <div className="parcours-formation-grille">
              {diplomes.map((d, i) => (
                <div key={i} className="parcours-diplome">
                  <div className="parcours-diplome-annee">{d.annee}</div>
                  <div className="parcours-diplome-info">
                    <h4>{d.titre}</h4>
                    <p>{d.lieu}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </MiseEnPage>
  )
}
