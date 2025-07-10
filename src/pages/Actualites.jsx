import React, { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaBullhorn, FaEnvelope, FaArrowRight, FaClock, FaMapMarkerAlt, FaUser, FaTimes, FaShare, FaBookmark } from 'react-icons/fa';

function Actualites() {
  // État pour gérer les modals
  const [selectedActualite, setSelectedActualite] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Données des actualités récentes avec contenu détaillé
  const actualitesRecentes = [
    {
      id: 1,
      titre: "Célébration de la fête de Saint Léonard",
      date: "15 juillet 2025",
      auteur: "Père Jean-Pierre",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      resume: "La paroisse célèbre la fête de son saint patron avec une messe solennelle et des festivités communautaires.",
      categorie: "Événement",
      contenuComplet: `La paroisse Saint Léonard célèbre cette année la fête de son saint patron avec un programme riche et varié. 

La journée commencera par une messe solennelle à 10h00, présidée par Monseigneur l'Archevêque, en présence de nombreux prêtres du diocèse. Cette célébration sera l'occasion de rendre grâce pour l'intercession de Saint Léonard dans la vie de notre communauté paroissiale.

Après la messe, un grand repas communautaire sera partagé dans la salle paroissiale, permettant aux fidèles de se retrouver dans une ambiance fraternelle. Des animations pour les enfants et les jeunes sont également prévues.

L'après-midi sera marquée par des témoignages de fidèles sur l'importance de Saint Léonard dans leur vie spirituelle, suivis d'un temps de prière et d'adoration du Saint-Sacrement.

Cette célébration est ouverte à tous les fidèles du diocèse et sera l'occasion de renforcer les liens fraternels au sein de notre communauté paroissiale.`
    },
    {
      id: 2,
      titre: "Nouveau groupe de catéchèse pour les jeunes",
      date: "12 juillet 2025",
      auteur: "Équipe pastorale",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      resume: "Un nouveau groupe de catéchèse a été créé pour accompagner les jeunes dans leur cheminement spirituel.",
      categorie: "Formation",
      contenuComplet: `L'équipe pastorale de la paroisse Saint Léonard est heureuse d'annoncer la création d'un nouveau groupe de catéchèse spécialement destiné aux jeunes de 18 à 25 ans.

Ce groupe, animé par le Père Jean-Pierre et une équipe de laïcs formés, propose un accompagnement spirituel adapté aux défis que rencontrent les jeunes d'aujourd'hui. Les rencontres auront lieu tous les samedis de 14h00 à 16h00 dans la salle paroissiale.

Le programme comprend :
- Des temps de prière et de méditation
- L'étude de la Parole de Dieu
- Des discussions sur des thèmes d'actualité à la lumière de la foi
- Des témoignages de jeunes engagés
- Des activités de service et de solidarité

Les inscriptions sont ouvertes jusqu'au 31 août 2025. Pour plus d'informations, contactez l'équipe pastorale ou le secrétariat paroissial.`
    },
    {
      id: 3,
      titre: "Rénovation de la salle paroissiale",
      date: "10 juillet 2025",
      auteur: "Conseil pastoral",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      resume: "Les travaux de rénovation de la salle paroissiale sont en cours pour améliorer l'accueil des fidèles.",
      categorie: "Infrastructure",
      contenuComplet: `Le conseil pastoral de la paroisse Saint Léonard a décidé de procéder à une rénovation complète de la salle paroissiale pour améliorer l'accueil et le confort des fidèles.

Les travaux, qui ont débuté le 1er juillet 2025, comprennent :
- La rénovation du système électrique et d'éclairage
- L'installation d'un système de climatisation
- La modernisation des sanitaires
- L'amélioration de l'acoustique
- La rénovation de la cuisine paroissiale
- L'installation d'un système de son et vidéo

Ces améliorations permettront d'accueillir plus confortablement les différentes activités paroissiales : réunions, formations, repas communautaires, et célébrations spéciales.

Les travaux devraient s'achever fin août 2025. Pendant cette période, certaines activités seront temporairement déplacées dans d'autres locaux du quartier.`
    },
    {
      id: 4,
      titre: "Pèlerinage diocésain à Lourdes",
      date: "8 juillet 2025",
      auteur: "Archidiocèse de Kinshasa",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      resume: "Inscriptions ouvertes pour le pèlerinage diocésain à Lourdes prévu en septembre 2025.",
      categorie: "Pèlerinage",
      contenuComplet: `L'Archidiocèse de Kinshasa organise un pèlerinage diocésain à Lourdes du 15 au 22 septembre 2025, sous la direction spirituelle de Monseigneur l'Archevêque.

Ce pèlerinage, qui s'inscrit dans l'année de la miséricorde, sera l'occasion pour les fidèles de vivre une expérience spirituelle intense au sanctuaire marial de Lourdes.

Le programme comprend :
- La participation aux messes et processions
- La prière du chapelet à la grotte
- La célébration du sacrement de réconciliation
- La participation aux veillées de prière
- Des temps de partage et de fraternité

Le voyage inclut :
- Le transport aérien Kinshasa-Paris-Lourdes
- L'hébergement en hôtel 3 étoiles
- La pension complète
- L'accompagnement spirituel et pastoral
- L'assurance voyage

Les inscriptions sont ouvertes jusqu'au 31 juillet 2025. Pour plus d'informations et pour s'inscrire, contactez le secrétariat diocésain.`
    }
  ];

  // Données des événements à venir
  const evenementsAVenir = [
    {
      id: 1,
      titre: "Messe de rentrée paroissiale",
      date: "7 septembre 2025",
      heure: "10h00",
      lieu: "Église Saint Léonard",
      description: "Célébration de rentrée avec bénédiction des cartables et des enseignants."
    },
    {
      id: 2,
      titre: "Retraite spirituelle pour les jeunes",
      date: "20-22 septembre 2025",
      heure: "Vendredi 18h00 - Dimanche 16h00",
      lieu: "Centre spirituel diocésain",
      description: "Retraite de trois jours pour les jeunes de 18-25 ans."
    },
    {
      id: 3,
      titre: "Concert de chorale paroissiale",
      date: "15 octobre 2025",
      heure: "19h00",
      lieu: "Église Saint Léonard",
      description: "Concert de musique sacrée avec la chorale paroissiale."
    }
  ];

  // Données des annonces paroissiales
  const annoncesParoissiales = [
    {
      id: 1,
      titre: "Collecte pour les plus démunis",
      date: "Jusqu'au 31 juillet 2025",
      description: "Collecte de denrées alimentaires et de vêtements pour les familles en difficulté.",
      urgent: true
    },
    {
      id: 2,
      titre: "Inscriptions catéchisme 2025-2026",
      date: "Du 1er au 30 août 2025",
      description: "Inscriptions ouvertes pour le catéchisme des enfants et des jeunes.",
      urgent: false
    },
    {
      id: 3,
      titre: "Bénédiction des familles",
      date: "Dimanche 3 août 2025",
      description: "Bénédiction spéciale pour toutes les familles de la paroisse.",
      urgent: false
    }
  ];

  return (
    <div className="actualites-page">
      {/* Section Hero */}
      <section className="hero-section py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <FaNewspaper className="mb-3" style={{fontSize: '3rem'}} />
              <h1 className="display-4 fw-bold mb-3">Actualités Paroissiales</h1>
              <p className="lead mb-0">
                Restez informés des dernières nouvelles, événements et annonces de notre communauté paroissiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités récentes */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: '#19b6c9'}}>
                <FaNewspaper className="me-2" />
                Actualités récentes
              </h2>
            </div>
          </div>
          <div className="row">
            {actualitesRecentes.map((actualite) => (
              <div key={actualite.id} className="col-lg-6 col-xl-3 mb-4">
                <div className="card h-100 shadow-sm border-0" style={{borderRadius: '12px', minHeight: '400px'}}>
                  <img 
                    src={actualite.image} 
                    className="card-img-top" 
                    alt={actualite.titre}
                    style={{height: '200px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge" style={{background: '#19b6c9', color: 'white'}}>
                        {actualite.categorie}
                      </span>
                      <small className="text-muted">{actualite.date}</small>
                    </div>
                    <h5 className="card-title fw-bold mb-2">{actualite.titre}</h5>
                    <p className="card-text text-muted mb-3 flex-grow-1">{actualite.resume}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <small className="text-muted">
                        <FaUser className="me-1" />
                        {actualite.auteur}
                      </small>
                      <button 
                        className="btn btn-sm" 
                        style={{background: '#19b6c9', color: 'white'}}
                        onClick={() => {
                          setSelectedActualite(actualite);
                          setShowModal(true);
                        }}
                      >
                        Lire plus <FaArrowRight className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Événements à venir */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: '#19b6c9'}}>
                <FaCalendarAlt className="me-2" />
                Événements à venir
              </h2>
            </div>
          </div>
          <div className="row">
            {evenementsAVenir.map((evenement) => (
              <div key={evenement.id} className="col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px', minHeight: '400px'}}>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{evenement.titre}</h5>
                    <div className="mb-3 flex-grow-1">
                      <div className="d-flex align-items-center mb-2">
                        <FaCalendarAlt className="me-2" style={{color: '#19b6c9'}} />
                        <span className="fw-semibold">{evenement.date}</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaClock className="me-2" style={{color: '#19b6c9'}} />
                        <span>{evenement.heure}</span>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <FaMapMarkerAlt className="me-2" style={{color: '#19b6c9'}} />
                        <span>{evenement.lieu}</span>
                      </div>
                      <p className="card-text text-muted">{evenement.description}</p>
                    </div>
                    <button className="btn w-100 mt-auto" style={{background: '#19b6c9', color: 'white'}}>
                      Plus d'infos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Annonces paroissiales */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: '#19b6c9'}}>
                <FaBullhorn className="me-2" />
                Annonces paroissiales
              </h2>
            </div>
          </div>
          <div className="row">
            {annoncesParoissiales.map((annonce) => (
              <div key={annonce.id} className="col-lg-4 mb-4">
                <div className={`card h-100 border-0 shadow-sm ${annonce.urgent ? 'border-start border-danger border-4' : ''}`} style={{borderRadius: '12px', minHeight: '400px'}}>
                  <div className="card-body d-flex flex-column">
                    {annonce.urgent && (
                      <div className="mb-2">
                        <span className="badge bg-danger">URGENT</span>
                      </div>
                    )}
                    <h5 className="card-title fw-bold mb-2">{annonce.titre}</h5>
                    <p className="card-text text-muted mb-3 flex-grow-1">{annonce.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <small className="text-muted">{annonce.date}</small>
                      <button className="btn btn-sm" style={{background: '#19b6c9', color: 'white'}}>
                        Détails
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <FaEnvelope className="mb-3" style={{fontSize: '3rem'}} />
              <h2 className="mb-3">Restez informés</h2>
              <p className="lead mb-4">
                Recevez nos actualités et événements directement dans votre boîte mail.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group">
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      placeholder="Votre adresse email"
                      style={{borderRadius: '8px 0 0 8px'}}
                    />
                    <button 
                      className="btn btn-light btn-lg" 
                      type="button"
                      style={{borderRadius: '0 8px 8px 0'}}
                    >
                      S'abonner
                    </button>
                  </div>
                  <small className="d-block mt-2 opacity-75">
                    Nous respectons votre vie privée. Désabonnement possible à tout moment.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal pour les détails des actualités */}
      {showModal && selectedActualite && (
        <div 
          className="modal fade show" 
          style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 shadow" style={{borderRadius: '16px'}}>
              {/* Header du modal */}
              <div className="modal-header border-0 pb-0" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white', borderTopLeftRadius: '16px', borderTopRightRadius: '16px'}}>
                <div className="d-flex justify-content-between align-items-start w-100">
                  <div>
                    <span className="badge bg-light text-dark mb-2">{selectedActualite.categorie}</span>
                    <h4 className="modal-title fw-bold mb-1">{selectedActualite.titre}</h4>
                    <div className="d-flex align-items-center gap-3">
                      <small>
                        <FaCalendarAlt className="me-1" />
                        {selectedActualite.date}
                      </small>
                      <small>
                        <FaUser className="me-1" />
                        {selectedActualite.auteur}
                      </small>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  ></button>
                </div>
              </div>

              {/* Body du modal */}
              <div className="modal-body p-4">
                {/* Image */}
                <div className="mb-4">
                  <img 
                    src={selectedActualite.image} 
                    alt={selectedActualite.titre}
                    className="w-100 rounded"
                    style={{height: '300px', objectFit: 'cover'}}
                  />
                </div>

                {/* Contenu détaillé */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Article complet</h5>
                  <div style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
                    {selectedActualite.contenuComplet.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <FaShare className="me-1" />
                      Partager
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <FaBookmark className="me-1" />
                      Sauvegarder
                    </button>
                  </div>
                  <button 
                    className="btn" 
                    style={{background: '#19b6c9', color: 'white'}}
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Actualites; 