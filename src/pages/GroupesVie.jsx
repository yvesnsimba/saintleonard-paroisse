import React from 'react';
import { FaUsers, FaHandsHelping, FaPrayingHands, FaBible, FaHeart, FaPlusCircle, FaEnvelope } from 'react-icons/fa';

const groupes = [
  {
    nom: 'Groupe de prière',
    description: 'Rencontres hebdomadaires pour prier, louer et intercéder ensemble.',
    icone: <FaPrayingHands style={{color: '#19b6c9', fontSize: '2rem'}} />,
  },
  {
    nom: 'Groupe biblique',
    description: 'Étude et partage de la Parole de Dieu en petits groupes.',
    icone: <FaBible style={{color: '#19b6c9', fontSize: '2rem'}} />,
  },
  {
    nom: 'Groupe de solidarité',
    description: 'Actions caritatives, visites aux malades, aide aux plus démunis.',
    icone: <FaHandsHelping style={{color: '#19b6c9', fontSize: '2rem'}} />,
  },
  {
    nom: 'Groupe des jeunes',
    description: 'Rencontres, activités et formation pour les jeunes de la paroisse.',
    icone: <FaUsers style={{color: '#19b6c9', fontSize: '2rem'}} />,
  },
  {
    nom: 'Groupe des couples et familles',
    description: 'Accompagnement, partages et temps forts pour les couples et familles.',
    icone: <FaHeart style={{color: '#19b6c9', fontSize: '2rem'}} />,
  },
];

const temoignages = [
  {
    nom: 'Marie',
    texte: 'Le groupe de prière m’a permis de grandir dans la foi et de trouver une vraie famille spirituelle.',
  },
  {
    nom: 'Jean',
    texte: 'Grâce au groupe biblique, j’ai découvert la richesse de la Parole de Dieu et tissé de belles amitiés.',
  },
  {
    nom: 'Claire',
    texte: 'Participer au groupe de solidarité m’a donné le goût du service et de la fraternité.',
  },
];

function GroupesVie() {
  return (
    <div className="groupes-vie-page">
      {/* Section Hero */}
      <section className="hero-section py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container text-center">
          <FaUsers style={{fontSize: '3rem'}} className="mb-3" />
          <h1 className="display-4 fw-bold mb-3">Groupes de vie paroissiaux</h1>
          <p className="lead mb-0">Vivre la foi, partager, servir et grandir ensemble dans la paroisse.</p>
        </div>
      </section>

      {/* Présentation des groupes */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Nos groupes de vie</h2>
          <div className="row">
            {groupes.map((groupe, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <div className="mb-3">{groupe.icone}</div>
                    <h5 className="fw-bold mb-2">{groupe.nom}</h5>
                    <p className="text-muted mb-0 flex-grow-1">{groupe.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi rejoindre un groupe ? */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Pourquoi rejoindre un groupe&nbsp;?</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list-unstyled fs-5 mb-0">
                <li className="mb-3"><FaUsers className="me-2" style={{color: '#19b6c9'}} />Créer des liens fraternels et vivre la communion</li>
                <li className="mb-3"><FaBible className="me-2" style={{color: '#19b6c9'}} />Approfondir sa foi et partager la Parole</li>
                <li className="mb-3"><FaHandsHelping className="me-2" style={{color: '#19b6c9'}} />Servir et s’engager dans la solidarité</li>
                <li className="mb-3"><FaHeart className="me-2" style={{color: '#19b6c9'}} />Être soutenu dans les moments importants de la vie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment rejoindre un groupe ? */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Comment rejoindre un groupe&nbsp;?</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <FaPlusCircle style={{fontSize: '2rem', color: '#19b6c9'}} className="mb-3" />
                  <p className="fs-5 mb-4">Contactez le responsable de la paroisse ou remplissez le formulaire ci-dessous pour être mis en relation avec un groupe adapté à votre situation.</p>
                  <form>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Nom" required />
                      </div>
                      <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <select className="form-select" required>
                        <option value="">Choisissez un groupe...</option>
                        {groupes.map((groupe, idx) => (
                          <option key={idx} value={groupe.nom}>{groupe.nom}</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="btn btn-lg" style={{background: '#19b6c9', color: 'white'}}>
                      <FaEnvelope className="me-2" />Envoyer ma demande
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Ils témoignent</h2>
          <div className="row justify-content-center">
            {temoignages.map((temoin, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <FaHeart style={{color: '#19b6c9', fontSize: '2rem'}} className="mb-3" />
                    <blockquote className="blockquote mb-3">{temoin.texte}</blockquote>
                    <footer className="blockquote-footer">{temoin.nom}</footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l’action */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container text-center">
          <h2 className="mb-4">Envie de rejoindre un groupe&nbsp;?</h2>
          <p className="lead mb-4">N’attendez plus pour vivre la fraternité et la joie de l’Évangile en petit groupe !</p>
          <a href="#" className="btn btn-lg px-4 fw-bold" style={{background: '#fff', color: '#19b6c9', border: 'none'}}>
            <FaPlusCircle className="me-2" />Je veux rejoindre un groupe
          </a>
        </div>
      </section>
    </div>
  );
}

export default GroupesVie; 