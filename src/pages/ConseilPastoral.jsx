import React from 'react';
import { FaUsers, FaUserTie, FaEnvelope, FaPhone, FaLightbulb, FaHandsHelping, FaComments, FaPlusCircle } from 'react-icons/fa';
import photoCure from '../assets/Cure de la paroisse.jpg';
import photoVicaire from '../assets/Vicaire paroissial.jpg';
import photoPretre1 from '../assets/Prêtre coopérateur.jpg';
import photoPretre2 from '../assets/Prêtre coopérateur 2.jpg';

const membres = [
  {
    nom: 'Père Jean-Pierre MUKENDI',
    fonction: 'Curé, Président du Conseil',
    photo: photoCure,
    email: 'cure@saintleonard-kinshasa.org',
    telephone: '+243 81 234 5678',
  },
  {
    nom: 'Marie KABAMBA',
    fonction: 'Vice-présidente',
    photo: null,
    email: 'marie.kabamba@saintleonard-kinshasa.org',
    telephone: '+243 82 111 2233',
  },
  {
    nom: 'André KABONGO',
    fonction: 'Secrétaire',
    photo: photoVicaire,
    email: 'andre.kabongo@saintleonard-kinshasa.org',
    telephone: '+243 82 345 6789',
  },
  {
    nom: 'Michel BEMBA',
    fonction: 'Membre',
    photo: photoPretre1,
    email: 'michel.bemba@saintleonard-kinshasa.org',
    telephone: '+243 83 456 7890',
  },
  {
    nom: 'Paul LUBANGA',
    fonction: 'Membre',
    photo: photoPretre2,
    email: 'paul.lubanga@saintleonard-kinshasa.org',
    telephone: '+243 84 567 8901',
  },
  {
    nom: 'Claire MUKUNA',
    fonction: 'Responsable Solidarité',
    photo: null,
    email: 'claire.mukuna@saintleonard-kinshasa.org',
    telephone: '+243 85 123 4567',
  },
];

const missions = [
  'Animer la vie pastorale de la paroisse',
  'Favoriser la communion et la participation de tous',
  'Soutenir les groupes et services paroissiaux',
  'Organiser les grandes célébrations et événements',
  'Être à l’écoute des besoins des fidèles',
  'Promouvoir la solidarité et l’entraide',
];

function ConseilPastoral() {
  return (
    <div className="conseil-pastoral-page">
      {/* Section Hero */}
      <section className="hero-section py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container text-center">
          <FaUsers style={{fontSize: '3rem'}} className="mb-3" />
          <h1 className="display-4 fw-bold mb-3">Conseil Pastoral / Comité Paroissial</h1>
          <p className="lead mb-0">Une équipe au service de la vie et de la mission de la paroisse.</p>
        </div>
      </section>

      {/* Présentation des membres */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Les membres du conseil</h2>
          <div className="row">
            {membres.map((m, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center d-flex flex-column align-items-center">
                    <div className="mb-3">
                      {m.photo ? (
                        <img src={m.photo} alt={m.nom} className="rounded-circle shadow" style={{width: 100, height: 100, objectFit: 'cover', border: '4px solid #19b6c9'}} />
                      ) : (
                        <FaUserTie style={{fontSize: '3rem', color: '#19b6c9'}} />
                      )}
                    </div>
                    <h5 className="fw-bold mb-1">{m.nom}</h5>
                    <div className="mb-2 text-muted">{m.fonction}</div>
                    <div className="mb-2">
                      <a href={`mailto:${m.email}`} className="me-2 text-decoration-none" style={{color: '#19b6c9'}}><FaEnvelope /></a>
                      <a href={`tel:${m.telephone}`} className="text-decoration-none" style={{color: '#19b6c9'}}><FaPhone /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rôles et missions */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Rôles et missions</h2>
          <ul className="fs-5 mb-0 mx-auto" style={{maxWidth: 700}}>
            {missions.map((mission, idx) => (
              <li key={idx} className="mb-3 d-flex align-items-center">
                <FaLightbulb className="me-2" style={{color: '#19b6c9'}} />{mission}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact conseil */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Contacter le conseil</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <FaComments style={{fontSize: '2rem', color: '#19b6c9'}} className="mb-3" />
                  <p className="fs-5 mb-4">Pour toute question, suggestion ou demande, contactez-nous via ce formulaire ou par email.</p>
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
                      <textarea className="form-control" rows={4} placeholder="Votre message..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg" style={{background: '#19b6c9', color: 'white'}}>
                      <FaEnvelope className="me-2" />Envoyer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l’action */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container text-center">
          <h2 className="mb-4">Envie de vous impliquer dans la paroisse&nbsp;?</h2>
          <p className="lead mb-4">Rejoignez le conseil ou proposez vos talents pour servir la communauté !</p>
          <a href="#" className="btn btn-lg px-4 fw-bold" style={{background: '#fff', color: '#19b6c9', border: 'none'}}>
            <FaPlusCircle className="me-2" />Je veux m’impliquer
          </a>
        </div>
      </section>
    </div>
  );
}

export default ConseilPastoral; 