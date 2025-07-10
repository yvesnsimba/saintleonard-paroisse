import React from 'react';
import { FaChurch, FaUserTie, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPrayingHands, FaUsers, FaBook, FaHeart, FaHandshake, FaLightbulb } from 'react-icons/fa';
import cureImg from '../assets/Cure de la paroisse.jpg';
import vicaireImg from '../assets/Vicaire paroissial.jpg';
import pretre1Img from '../assets/Prêtre coopérateur.jpg';
import pretre2Img from '../assets/Prêtre coopérateur 2.jpg';

function CurePretres() {
  // Données du curé
  const cure = {
    nom: "Père Jean-Pierre MUKENDI",
    titre: "Curé de la Paroisse Saint Léonard",
    photo: cureImg,
    dateNaissance: "15 mars 1975",
    ordination: "29 juin 2003",
    formation: "Séminaire Saint Jean-Baptiste de Kinshasa",
    specialites: ["Théologie morale", "Catéchèse", "Accompagnement spirituel"],
    description: "Le Père Jean-Pierre Mukendi est le curé de la paroisse Saint Léonard depuis 2018. Passionné par l'accompagnement spirituel des jeunes et des familles, il s'engage particulièrement dans la formation catéchétique et l'animation liturgique.",
    contact: {
      telephone: "+243 81 234 5678",
      email: "cure@saintleonard-kinshasa.org",
      horaires: "Lundi - Vendredi : 9h00 - 17h00"
    }
  };

  // Données des prêtres
  const pretres = [
    {
      id: 1,
      nom: "Père André KABONGO",
      titre: "Vicaire paroissial",
      photo: vicaireImg,
      dateNaissance: "8 septembre 1980",
      ordination: "15 décembre 2008",
      formation: "Séminaire Saint Jean-Baptiste de Kinshasa",
      specialites: ["Liturgie", "Musique sacrée", "Jeunesse"],
      description: "Le Père André Kabongo est vicaire paroissial depuis 2020. Il est responsable de l'animation liturgique et de la pastorale des jeunes. Il anime également la chorale paroissiale.",
      responsabilites: ["Animation liturgique", "Pastorale des jeunes", "Chorale paroissiale"],
      contact: {
        telephone: "+243 82 345 6789",
        email: "andre.kabongo@saintleonard-kinshasa.org"
      }
    },
    {
      id: 2,
      nom: "Père Michel BEMBA",
      titre: "Prêtre coopérateur",
      photo: pretre1Img,
      dateNaissance: "22 avril 1985",
      ordination: "25 juin 2012",
      formation: "Séminaire Saint Jean-Baptiste de Kinshasa",
      specialites: ["Catéchèse", "Formation des adultes", "Accompagnement des familles"],
      description: "Le Père Michel Bemba est prêtre coopérateur depuis 2019. Il se consacre particulièrement à la formation catéchétique des adultes et à l'accompagnement des familles en difficulté.",
      responsabilites: ["Catéchèse des adultes", "Accompagnement des familles", "Formation biblique"],
      contact: {
        telephone: "+243 83 456 7890",
        email: "michel.bemba@saintleonard-kinshasa.org"
      }
    },
    {
      id: 3,
      nom: "Père Paul LUBANGA",
      titre: "Prêtre coopérateur",
      photo: pretre2Img,
      dateNaissance: "10 novembre 1982",
      ordination: "30 novembre 2010",
      formation: "Séminaire Saint Jean-Baptiste de Kinshasa",
      specialites: ["Sacrements", "Accompagnement spirituel", "Visites pastorales"],
      description: "Le Père Paul Lubanga est prêtre coopérateur depuis 2017. Il est particulièrement dédié à l'administration des sacrements et aux visites pastorales auprès des malades et des personnes âgées.",
      responsabilites: ["Administration des sacrements", "Visites pastorales", "Accompagnement spirituel"],
      contact: {
        telephone: "+243 84 567 8901",
        email: "paul.lubanga@saintleonard-kinshasa.org"
      }
    }
  ];



  return (
    <div className="cure-pretres-page">
      {/* Section Hero */}
      <section className="hero-section py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <FaChurch className="mb-3" style={{fontSize: '3rem'}} />
              <h1 className="display-4 fw-bold mb-3">Le Curé et les Prêtres</h1>
              <p className="lead mb-0">
                Découvrez l'équipe sacerdotale de la paroisse Saint Léonard, au service de notre communauté paroissiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Curé */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: '#19b6c9'}}>
                <FaUserTie className="me-2" />
                Notre Curé
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg" style={{borderRadius: '16px'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={cure.photo} 
                      alt={cure.nom}
                      className="w-100 h-100"
                      style={{objectFit: 'cover', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px'}}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <span className="badge" style={{background: '#19b6c9', color: 'white'}}>
                          Curé de la paroisse
                        </span>
                      </div>
                      <h3 className="card-title fw-bold mb-3">{cure.nom}</h3>
                      <p className="card-text mb-4">{cure.description}</p>
                      
                      <div className="row mb-4">
                        <div className="col-md-6">
                          <h6 className="fw-bold mb-2">Informations personnelles</h6>
                          <ul className="list-unstyled">
                            <li><strong>Date de naissance :</strong> {cure.dateNaissance}</li>
                            <li><strong>Ordination :</strong> {cure.ordination}</li>
                            <li><strong>Formation :</strong> {cure.formation}</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6 className="fw-bold mb-2">Spécialités</h6>
                          <div className="d-flex flex-wrap gap-1">
                            {cure.specialites.map((specialite, index) => (
                              <span key={index} className="badge bg-light text-dark">
                                {specialite}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="border-top pt-3">
                        <h6 className="fw-bold mb-2">Contact</h6>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="d-flex align-items-center mb-2">
                              <FaPhone className="me-2" style={{color: '#19b6c9'}} />
                              <small>{cure.contact.telephone}</small>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="d-flex align-items-center mb-2">
                              <FaEnvelope className="me-2" style={{color: '#19b6c9'}} />
                              <small>{cure.contact.email}</small>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="d-flex align-items-center mb-2">
                              <FaClock className="me-2" style={{color: '#19b6c9'}} />
                              <small>{cure.contact.horaires}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prêtres */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: '#19b6c9'}}>
                <FaUsers className="me-2" />
                Nos Prêtres
              </h2>
            </div>
          </div>
          <div className="row">
            {pretres.map((pretre) => (
              <div key={pretre.id} className="col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm" style={{borderRadius: '12px'}}>
                  <img 
                    src={pretre.photo} 
                    className="card-img-top" 
                    alt={pretre.nom}
                    style={{height: '250px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge" style={{background: '#19b6c9', color: 'white'}}>
                        {pretre.titre}
                      </span>
                    </div>
                    <h5 className="card-title fw-bold mb-2">{pretre.nom}</h5>
                    <p className="card-text text-muted mb-3 flex-grow-1">{pretre.description}</p>
                    
                    <div className="mb-3">
                      <h6 className="fw-bold mb-2">Responsabilités</h6>
                      <div className="d-flex flex-wrap gap-1 mb-2">
                        {pretre.responsabilites.map((resp, index) => (
                          <span key={index} className="badge bg-light text-dark">
                            {resp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-top pt-3 mt-auto">
                      <h6 className="fw-bold mb-2">Contact</h6>
                      <div className="d-flex align-items-center mb-1">
                        <FaPhone className="me-2" style={{color: '#19b6c9'}} />
                        <small>{pretre.contact.telephone}</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <FaEnvelope className="me-2" style={{color: '#19b6c9'}} />
                        <small>{pretre.contact.email}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Section Message de l'équipe */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #0d8a9a 100%)', color: 'white'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <FaLightbulb className="mb-3" style={{fontSize: '3rem'}} />
              <h2 className="mb-3">Message de l'équipe sacerdotale</h2>
              <p className="lead mb-4">
                "Chers frères et sœurs, nous sommes heureux de vous accompagner dans votre cheminement spirituel. 
                Notre mission est de vous servir avec amour et dévouement, en vous guidant vers une relation plus 
                profonde avec le Christ. N'hésitez pas à nous solliciter pour tout besoin spirituel ou pastoral."
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light">
                  <FaBook className="me-2" />
                  Demander un rendez-vous
                </button>
                <button className="btn btn-outline-light">
                  <FaEnvelope className="me-2" />
                  Nous écrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurePretres; 