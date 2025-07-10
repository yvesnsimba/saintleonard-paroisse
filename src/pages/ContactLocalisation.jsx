import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaBus, 
  FaCar, 
  FaWalking, 
  FaTaxi,
  FaBaby,
  FaHeart,
  FaPrayingHands,
  FaHandsHelping,
  FaPaperPlane
} from 'react-icons/fa';

function ContactLocalisation() {
  const horaires = [
    { jour: "Lundi - Vendredi", messe: "6h30", confession: "17h00", adoration: "18h00" },
    { jour: "Samedi", messe: "7h00", confession: "16h00", adoration: "17h00" },
    { jour: "Dimanche", messe: "6h00, 8h00, 10h30, 18h00", confession: "7h30", adoration: "17h00" }
  ];

  const equipe = [
    {
      nom: "Père Emmanuel Tshimanga",
      role: "Curé",
      email: "curé@saintleonard.cd",
      telephone: "+243 900 000 001",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      nom: "Père Jean-Baptiste Ilunga",
      role: "Vicaire",
      email: "vicaire@saintleonard.cd",
      telephone: "+243 900 000 002",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      nom: "Sœur Marie-Claire Mwamba",
      role: "Responsable catéchèse",
      email: "catechese@saintleonard.cd",
      telephone: "+243 900 000 003",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      nom: "Monsieur Patrick Kabasele",
      role: "Secrétaire paroissial",
      email: "secretariat@saintleonard.cd",
      telephone: "+243 900 000 004",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg"
    }
  ];

  const services = [
    {
      titre: "Visite des malades",
      description: "Visite à domicile et communion",
      contact: "Père Emmanuel",
      horaire: "Sur demande",
      icon: FaHandsHelping
    }
  ];

  return (
    <div className="contact-localisation">
      {/* Hero Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Contact & Localisation</h1>
              <p className="lead mb-0">
                Retrouvez toutes les informations pour nous contacter 
                et nous rendre visite à la paroisse Saint Leonard.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaMapMarkerAlt size={64} className="opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4" style={{color: '#19b6c9'}}>Nous contacter</h2>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Nom complet *</label>
                        <input type="text" className="form-control" style={{borderColor: '#19b6c9'}} required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Email *</label>
                        <input type="email" className="form-control" style={{borderColor: '#19b6c9'}} required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Téléphone</label>
                        <input type="tel" className="form-control" style={{borderColor: '#19b6c9'}} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Sujet *</label>
                        <select className="form-select" style={{borderColor: '#19b6c9'}} required>
                          <option value="">Choisir un sujet</option>
                          <option value="bapteme">Demande de baptême</option>
                          <option value="mariage">Demande de mariage</option>
                          <option value="confession">Confession</option>
                          <option value="visite">Visite des malades</option>
                          <option value="information">Information générale</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-bold">Message *</label>
                        <textarea className="form-control" rows={5} style={{borderColor: '#19b6c9'}} required></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-lg px-5 fw-bold" style={{background: '#19b6c9', color: 'white', border: 'none'}}>
                          <FaPaperPlane className="me-2" />
                          Envoyer le message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte Google Maps */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Localisation</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="ratio ratio-16x9 rounded-3 shadow" style={{overflow: 'hidden'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506.03341093127943!2d15.202464827383082!3d-4.347252558024651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a2f00389e7af3%3A0x65ca5935fc9ce4dc!2ssaint%20L%C3%A9onard!5e0!3m2!1sfr!2scd!4v1752137961924!5m2!1sfr!2scd"
                  width="600"
                  height="450"
                  style={{border:0, borderRadius: '0.75rem'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations principales */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="mb-4" style={{color: '#19b6c9'}}>Informations pratiques</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100" style={{transition: 'transform 0.2s, box-shadow 0.2s'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50, background: '#19b6c9', color: 'white'}}>
                          <FaMapMarkerAlt />
                        </div>
                        <h5 className="mb-0" style={{color: '#19b6c9'}}>Adresse</h5>
                      </div>
                      <p className="mb-0">
                        <strong>Paroisse Saint Leonard</strong><br/>
                        123, Avenue de la Paroisse<br/>
                        Quartier Mbudi<br/>
                        Kinshasa, RDC
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100" style={{transition: 'transform 0.2s, box-shadow 0.2s'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50, background: '#19b6c9', color: 'white'}}>
                          <FaPhone />
                        </div>
                        <h5 className="mb-0" style={{color: '#19b6c9'}}>Téléphone</h5>
                      </div>
                      <p className="mb-0">
                        <strong>Secrétariat :</strong> +243 900 000 000<br/>
                        <strong>Urgences :</strong> +243 900 000 999<br/>
                        <strong>Fax :</strong> +243 900 000 888
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100" style={{transition: 'transform 0.2s, box-shadow 0.2s'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50, background: '#19b6c9', color: 'white'}}>
                          <FaEnvelope />
                        </div>
                        <h5 className="mb-0" style={{color: '#19b6c9'}}>Email</h5>
                      </div>
                      <p className="mb-0">
                        <strong>Général :</strong> infodeercreative@gmail.com<br/>
                        <strong>Secrétariat :</strong> secretariat@saintleonard.cd<br/>
                        <strong>Curé :</strong> cure@saintleonard.cd
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Équipe paroissiale */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Équipe paroissiale</h2>
          <div className="row">
            {equipe.map((membre, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100" style={{transition: 'transform 0.2s, box-shadow 0.2s'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <img src={membre.avatar} alt={membre.nom} className="rounded-circle me-3" style={{width: 60, height: 60, objectFit: 'cover'}} />
                      <div>
                        <h5 className="mb-1">{membre.nom}</h5>
                        <p className="fw-bold mb-2" style={{color: '#19b6c9'}}>{membre.role}</p>
                        <p className="mb-1 small">
                          <FaEnvelope className="text-muted me-2" />
                          {membre.email}
                        </p>
                        <p className="mb-0 small">
                          <FaPhone className="text-muted me-2" />
                          {membre.telephone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service paroissial */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#19b6c9'}}>Service paroissial</h2>
          <div className="row">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card border-0 shadow-sm h-100" style={{transition: 'transform 0.2s, box-shadow 0.2s'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50, background: '#19b6c9', color: 'white'}}>
                          <IconComponent />
                        </div>
                        <h5 className="mb-0" style={{color: '#19b6c9'}}>{service.titre}</h5>
                      </div>
                      <p className="text-muted mb-3">{service.description}</p>
                      <div className="row">
                        <div className="col-6">
                          <small className="text-muted">Contact :</small><br/>
                          <strong>{service.contact}</strong>
                        </div>
                        <div className="col-6">
                          <small className="text-muted">Horaire :</small><br/>
                          <strong>{service.horaire}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}

export default ContactLocalisation; 