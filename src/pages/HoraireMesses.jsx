import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaCar, 
  FaClock, 
  FaBaby, 
  FaHeart, 
  FaCross, 
  FaPrayingHands,
  FaBook,
  FaPray,
  FaMusic,
  FaChurch,
  FaEye,
  FaTimes,
  FaUsers,
  FaCalendarAlt,
  FaInfoCircle
} from 'react-icons/fa';
import { useState } from 'react';

function HoraireMesses() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedSacrament, setSelectedSacrament] = useState(null);

  const horaires = [
    {
      jour: 'Lundi',
      messes: [
        { heure: '06:00', type: 'Messe d\'office', langue: 'Lingala', lieu: 'Église principale' }
      ]
    },
    {
      jour: 'Mardi',
      messes: [
        { heure: '06:00', type: 'Messe d\'office', langue: 'Lingala', lieu: 'Église principale' }
      ]
    },
    {
      jour: 'Mercredi',
      messes: [
        { heure: '06:00', type: 'Messe d\'office', langue: 'Lingala', lieu: 'Église principale' }
      ]
    },
    {
      jour: 'Jeudi',
      messes: [
        { heure: '06:00', type: 'Messe d\'office', langue: 'Lingala', lieu: 'Église principale' }
      ]
    },
    {
      jour: 'Vendredi',
      messes: [
        { heure: '06:00', type: 'Messe d\'office', langue: 'Lingala', lieu: 'Église principale' }
      ]
    },
    {
      jour: 'Samedi',
      messes: [
        { heure: '06:00', type: 'Messe d\'office', langue: 'Lingala', lieu: 'Église principale' },
        { heure: '18:30', type: 'Messe', langue: 'Lingala', lieu: 'Église principale' }
      ]
    },
    {
      jour: 'Dimanche',
      messes: [
        { heure: '06:30', type: 'Messe', langue: 'Lingala', lieu: 'Église principale' },
        { heure: '09:30', type: 'Messe', langue: 'Lingala', lieu: 'Église principale' },
        { heure: '11:30', type: 'Messe', langue: 'Français', lieu: 'Église principale' },
        { heure: '18:30', type: 'Messe', langue: 'Français', lieu: 'Église principale' }
      ]
    }
  ];

  const sacrements = [
    {
      id: 'bapteme',
      nom: 'Baptême',
      description: 'Célébration du baptême des enfants et adultes',
      contact: 'Père Jean-Pierre',
      telephone: '+243 123 456 789',
      icon: FaBaby,
      details: [
        'Préparation au baptême',
        'Catéchèse pour parents et parrains',
        'Célébration solennelle',
        'Certificat de baptême',
        'Accompagnement post-baptême'
      ],
      requirements: 'Inscription 3 mois à l\'avance',
      documents: 'Acte de naissance, livret de famille',
      duration: 'Préparation: 3 mois, Célébration: 1h30'
    },
    {
      id: 'mariage',
      nom: 'Mariage',
      description: 'Préparation et célébration des mariages',
      contact: 'Père Michel',
      telephone: '+243 123 456 790',
      icon: FaHeart,
      details: [
        'Préparation au mariage',
        'Accompagnement des fiancés',
        'Célébration nuptiale',
        'Certificat de mariage',
        'Suivi pastoral'
      ],
      requirements: 'Inscription 6 mois à l\'avance',
      documents: 'Actes de naissance, certificat de baptême, témoins',
      duration: 'Préparation: 6 mois, Célébration: 2h'
    },
    {
      id: 'confirmation',
      nom: 'Confirmation',
      description: 'Sacrement de confirmation pour les jeunes',
      contact: 'Père Jean-Pierre',
      telephone: '+243 123 456 789',
      icon: FaCross,
      details: [
        'Catéchèse de confirmation',
        'Formation spirituelle',
        'Célébration de confirmation',
        'Certificat de confirmation',
        'Accompagnement post-confirmation'
      ],
      requirements: 'Âge minimum: 12 ans',
      documents: 'Certificat de baptême, certificat de communion',
      duration: 'Préparation: 1 an, Célébration: 1h'
    },
    {
      id: 'reconciliation',
      nom: 'Réconciliation',
      description: 'Confession et sacrement de pénitence',
      contact: 'Tous les prêtres',
      telephone: 'Sur rendez-vous',
      icon: FaPrayingHands,
      details: [
        'Accueil et écoute',
        'Examen de conscience',
        'Confession individuelle',
        'Absolution',
        'Conseils spirituels'
      ],
      requirements: 'Ouvert à tous les fidèles',
      documents: 'Aucun document requis',
      duration: 'Variable selon les besoins'
    }
  ];

  const activities = [
    {
      id: 'renouveau-charismatique',
      title: 'Renouveau Charismatique',
      schedule: 'Mardi 19h00 - 20h30',
      icon: FaPray,
      description: 'Groupe de prière charismatique pour approfondir sa foi et vivre l\'expérience de l\'Esprit Saint.',
      details: [
        'Prière en langue',
        'Louange et adoration',
        'Témoignages',
        'Enseignements bibliques',
        'Prière de guérison'
      ],
      contact: 'Père Michel',
      phone: '+243 123 456 790',
      location: 'Salle paroissiale',
      participants: 'Tous les fidèles',
      requirements: 'Ouvert à tous'
    },
    {
      id: 'prieres-cevb',
      title: 'Prières C.E.V.B',
      schedule: 'Jeudi 18h30 - 20h00',
      icon: FaPrayingHands,
      description: 'Groupe de prière C.E.V.B (Communauté Évangélique de la Vie dans l\'Esprit) pour la louange et l\'adoration.',
      details: [
        'Louange et adoration',
        'Prière communautaire',
        'Témoignages de foi',
        'Enseignements bibliques',
        'Prière d\'intercession'
      ],
      contact: 'Responsable C.E.V.B',
      phone: '+243 123 456 793',
      location: 'Chez les Bayangelis',
      participants: 'Membres C.E.V.B',
      requirements: 'Ouvert aux membres'
    },
    {
      id: 'adoration',
      title: 'Adoration Eucharistique',
      schedule: 'Jeudi 09h30',
      icon: FaEye,
      description: 'Temps de prière et d\'adoration devant le Saint-Sacrement exposé.',
      details: [
        'Exposition du Saint-Sacrement',
        'Chapelet',
        'Prière silencieuse',
        'Bénédiction eucharistique',
        'Chants d\'adoration'
      ],
      contact: 'Père Jean-Pierre',
      phone: '+243 123 456 789',
      location: 'Église principale',
      participants: 'Tous les fidèles',
      requirements: 'Respect et silence'
    },
    {
      id: 'repetitions-chorales',
      title: 'Répétitions Chorales',
      schedule: 'Jeudi 18h00 - 19h30',
      icon: FaMusic,
      description: 'Répétitions de la chorale paroissiale pour animer les célébrations liturgiques.',
      details: [
        'Chants liturgiques',
        'Harmonisation vocale',
        'Préparation des messes',
        'Chants traditionnels',
        'Nouveaux chants'
      ],
      contact: 'Chef de chœur',
      phone: '+243 123 456 791',
      location: 'Salle de musique',
      participants: 'Choristes confirmés',
      requirements: 'Audition préalable'
    },
    {
      id: 'catechisme',
      title: 'Catéchisme',
      schedule: 'Samedi 14h00 - 16h00',
      icon: FaBook,
      description: 'Formation catéchétique pour les enfants et jeunes en préparation aux sacrements.',
      details: [
        'Enseignement biblique',
        'Préparation au baptême',
        'Préparation à la communion',
        'Préparation à la confirmation',
        'Vie chrétienne'
      ],
      contact: 'Catéchistes',
      phone: '+243 123 456 792',
      location: 'Salles de catéchisme',
      participants: 'Enfants et jeunes',
      requirements: 'Inscription obligatoire'
    },
    {
      id: 'confession',
      title: 'Confession',
      schedule: 'Samedi 07h30 - 16h00',
      icon: FaChurch,
      description: 'Sacrement de réconciliation pour tous les fidèles qui souhaitent se confesser.',
      details: [
        'Confession individuelle',
        'Accompagnement spirituel',
        'Conseils pastoraux',
        'Préparation pénitentielle',
        'Absolution'
      ],
      contact: 'Tous les prêtres',
      phone: '+243 123 456 789',
      location: 'Confessionnaux',
      participants: 'Tous les fidèles',
      requirements: 'Disponibilité des prêtres'
    }
  ];

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  const openSacramentModal = (sacrament) => {
    setSelectedSacrament(sacrament);
  };

  const closeSacramentModal = () => {
    setSelectedSacrament(null);
  };

  return (
    <div className="horaire-messes-page">
      {/* Hero Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Horaire des Messes</h1>
              <p className="lead mb-0">
                Découvrez les horaires de toutes nos célébrations et activités paroissiales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horaire des Messes */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="mb-4">Horaires des Messes</h2>
              <div className="row g-4">
                {horaires.map((jour, index) => (
                  <div key={index} className="col-12">
                    <div className="card shadow-sm" style={{border: 'none', borderRadius: '12px'}}>
                      <div className="card-header" style={{background: '#19b6c9', color: 'white', borderRadius: '12px 12px 0 0'}}>
                        <h5 className="mb-0 fw-bold">{jour.jour}</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          {jour.messes.map((messe, messeIndex) => (
                            <div key={messeIndex} className="col-md-6 mb-3">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <h6 className="mb-1 fw-bold">{messe.heure}</h6>
                                  <p className="mb-1 text-muted">{messe.type}</p>
                                  <small className="text-muted">{messe.lieu}</small>
                                </div>
                                <span className="badge" style={{background: '#19b6c9', color: 'white'}}>
                                  {messe.langue}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacrements */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="mb-3">Sacrements</h2>
              <p className="lead">
                Découvrez les informations pour la préparation et la célébration des sacrements
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {sacrements.map((sacrement, index) => {
              const IconComponent = sacrement.icon;
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 shadow-sm text-center" style={{border: 'none', borderRadius: '12px'}}>
                    <div className="card-body">
                      <div className="mb-3" style={{fontSize: '2.5rem', color: '#19b6c9'}}>
                        <IconComponent />
                      </div>
                      <h5 className="card-title fw-bold">{sacrement.nom}</h5>
                      <p className="card-text text-muted">{sacrement.description}</p>
                      <div className="mt-3">
                        <p className="mb-1"><strong>Contact:</strong></p>
                        <p className="mb-1">{sacrement.contact}</p>
                        <small className="text-muted">{sacrement.telephone}</small>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <button 
                        className="btn w-100" 
                        style={{background: '#19b6c9', color: '#fff', border: 'none'}}
                        onClick={() => openSacramentModal(sacrement)}
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activités paroissiales */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="mb-3">Autres Activités</h2>
              <p className="lead">
                Découvrez les autres activités et groupes de la paroisse
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm" style={{border: 'none', borderRadius: '12px'}}>
                    <div className="card-body text-center">
                      <div className="mb-3" style={{fontSize: '2.5rem', color: '#19b6c9'}}>
                        <IconComponent />
                      </div>
                      <h5 className="card-title fw-bold">{activity.title}</h5>
                      <p className="card-text">{activity.schedule}</p>
                      <p className="card-text text-muted small">{activity.description}</p>
                      <button 
                        className="btn" 
                        style={{background: '#19b6c9', color: '#fff', border: 'none'}}
                        onClick={() => openModal(activity)}
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal pour les détails des activités */}
      {selectedActivity && (
        <div 
          className="modal fade show" 
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999
          }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" style={{border: 'none', borderRadius: '12px'}} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header" style={{border: 'none', padding: '1.5rem', background: '#19b6c9', color: 'white', borderRadius: '12px 12px 0 0'}}>
                <div className="d-flex align-items-center">
                  <div style={{fontSize: '2rem', marginRight: '1rem'}}>
                    <selectedActivity.icon />
                  </div>
                  <div>
                    <h4 className="modal-title fw-bold mb-0">{selectedActivity.title}</h4>
                    <p className="mb-0 opacity-75">{selectedActivity.schedule}</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={closeModal}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body p-4">
                <div className="row">
                  <div className="col-12">
                    <h5 className="fw-bold mb-3">Description</h5>
                    <p className="mb-4">{selectedActivity.description}</p>
                    
                    <h5 className="fw-bold mb-3">Activités proposées</h5>
                    <ul className="list-unstyled">
                      {selectedActivity.details.map((detail, index) => (
                        <li key={index} className="mb-2">
                          <FaInfoCircle className="me-2" style={{color: '#19b6c9'}} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer" style={{border: 'none', padding: '1.5rem'}}>
                <button 
                  className="btn px-4" 
                  style={{background: '#19b6c9', color: '#fff', border: 'none'}}
                  onClick={closeModal}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour les détails des sacrements */}
      {selectedSacrament && (
        <div 
          className="modal fade show" 
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999
          }}
          onClick={closeSacramentModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" style={{border: 'none', borderRadius: '12px'}} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header" style={{border: 'none', padding: '1.5rem', background: '#19b6c9', color: 'white', borderRadius: '12px 12px 0 0'}}>
                <div className="d-flex align-items-center">
                  <div style={{fontSize: '2rem', marginRight: '1rem'}}>
                    <selectedSacrament.icon />
                  </div>
                  <div>
                    <h4 className="modal-title fw-bold mb-0">{selectedSacrament.nom}</h4>
                    <p className="mb-0 opacity-75">{selectedSacrament.description}</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={closeSacramentModal}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body p-4">
                <div className="row">
                  <div className="col-12">
                    <h5 className="fw-bold mb-3">Étapes du sacrement</h5>
                    <ul className="list-unstyled">
                      {selectedSacrament.details.map((detail, index) => (
                        <li key={index} className="mb-2">
                          <FaInfoCircle className="me-2" style={{color: '#19b6c9'}} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="row mt-4">
                      <div className="col-md-4">
                        <h6 className="fw-bold mb-2">
                          <FaCalendarAlt className="me-2" style={{color: '#19b6c9'}} />
                          Durée
                        </h6>
                        <p className="mb-0">{selectedSacrament.duration}</p>
                      </div>
                      <div className="col-md-4">
                        <h6 className="fw-bold mb-2">
                          <FaInfoCircle className="me-2" style={{color: '#19b6c9'}} />
                          Prérequis
                        </h6>
                        <p className="mb-0">{selectedSacrament.requirements}</p>
                      </div>
                      <div className="col-md-4">
                        <h6 className="fw-bold mb-2">
                          <FaBook className="me-2" style={{color: '#19b6c9'}} />
                          Documents
                        </h6>
                        <p className="mb-0">{selectedSacrament.documents}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer" style={{border: 'none', padding: '1.5rem'}}>
                <button 
                  className="btn px-4" 
                  style={{background: '#19b6c9', color: '#fff', border: 'none'}}
                  onClick={closeSacramentModal}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HoraireMesses; 