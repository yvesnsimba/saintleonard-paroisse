import { 
  FaChurch, 
  FaHistory, 
  FaUserTie, 
  FaCalendarAlt, 
  FaUsers, 
  FaHandsHelping, 
  FaImage, 
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaUsers as FaGroup
} from 'react-icons/fa';
import imgAbout from '../assets/Saint Leonard.jpg';

function HistoireParoisse() {
  const timeline = [
    {
      year: "1960",
      title: "Fondation de la paroisse",
      description: "Création de la paroisse Saint Leonard dans le quartier de Mbudi, Kinshasa."
    },
    {
      year: "1965",
      title: "Construction de l'église",
      description: "Édification du premier bâtiment de l'église paroissiale."
    },
    {
      year: "1980",
      title: "Extension du presbytère",
      description: "Agrandissement des locaux paroissiaux pour accueillir plus de fidèles."
    },
    {
      year: "1995",
      title: "Création de la chorale",
      description: "Formation de la chorale paroissiale qui existe encore aujourd'hui."
    },
    {
      year: "2005",
      title: "Rénovation complète",
      description: "Modernisation de l'église et amélioration des installations."
    },
    {
      year: "2020",
      title: "Numérisation",
      description: "Mise en place des outils numériques pour la communication paroissiale."
    }
  ];

  const keyFigures = [
    {
      name: "Père Jean-Baptiste Mwamba",
      role: "Premier curé (1960-1975)",
      description: "Fondateur de la paroisse, il a posé les bases de la communauté paroissiale."
    },
    {
      name: "Père Pierre Mukendi",
      role: "Curé (1975-1990)",
      description: "Il a développé les activités pastorales et la catéchèse."
    },
    {
      name: "Père André Kabasele",
      role: "Curé (1990-2010)",
      description: "Il a modernisé la paroisse et créé de nombreux groupes de vie."
    },
    {
      name: "Père Emmanuel Tshimanga",
      role: "Curé actuel (2010-présent)",
      description: "Il continue l'œuvre de ses prédécesseurs avec un focus sur la jeunesse."
    }
  ];

  return (
    <div className="histoire-paroisse">
      {/* Hero Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Histoire de la paroisse</h1>
              <p className="lead mb-0">
                Découvrez l'histoire riche et passionnante de la paroisse Saint Leonard, 
                de sa fondation en 1960 à nos jours.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaChurch size={64} className="opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={imgAbout} alt="Église Saint Leonard" className="img-fluid rounded-3 shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Une histoire de foi et de communauté</h2>
              <p className="lead mb-4">
                La paroisse Saint Leonard a été fondée en 1960 dans le quartier de Mbudi, 
                au cœur de Kinshasa. Depuis plus de 60 ans, elle accompagne les fidèles 
                dans leur cheminement de foi.
              </p>
              <p className="mb-4">
                De sa création à nos jours, la paroisse a connu de nombreuses évolutions 
                et transformations, toujours guidée par la mission d'annoncer l'Évangile 
                et de servir la communauté locale.
              </p>
              <div className="d-flex gap-3">
                <div className="text-center">
                  <div className="h3 fw-bold" style={{color: '#19b6c9'}}>60+</div>
                  <div className="small text-muted">Années d'histoire</div>
                </div>
                <div className="text-center">
                  <div className="h3 fw-bold" style={{color: '#19b6c9'}}>5000+</div>
                  <div className="small text-muted">Fidèles accueillis</div>
                </div>
                <div className="text-center">
                  <div className="h3 fw-bold" style={{color: '#19b6c9'}}>15+</div>
                  <div className="small text-muted">Groupes de vie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronologie */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5">Chronologie historique</h2>
          <div className="row">
            {timeline.map((event, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 60, height: 60, background: '#19b6c9'}}>
                        <span className="fw-bold">{event.year}</span>
                      </div>
                      <h5 className="mb-0">{event.title}</h5>
                    </div>
                    <p className="text-muted mb-0">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personnages clés */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Personnages clés</h2>
          <div className="row">
            {keyFigures.map((figure, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                        <FaUserTie style={{color: '#19b6c9'}} />
                      </div>
                      <div>
                        <h5 className="mb-1">{figure.name}</h5>
                        <p className="fw-bold mb-2" style={{color: '#19b6c9'}}>{figure.role}</p>
                        <p className="text-muted mb-0">{figure.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements marquants */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5">Événements marquants</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: 80, height: 80, background: '#19b6c9'}}>
                  <FaCalendarAlt size={32} />
                </div>
                <h5>Visites pastorales</h5>
                <p className="text-muted">Plusieurs visites pastorales ont marqué l'histoire de la paroisse, renforçant la foi de la communauté.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: 80, height: 80, background: '#19b6c9'}}>
                  <FaUsers size={32} />
                </div>
                <h5>Pèlerinages</h5>
                <p className="text-muted">Des pèlerinages annuels ont permis aux fidèles de renforcer leur spiritualité et leur fraternité.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: 80, height: 80, background: '#19b6c9'}}>
                  <FaHandsHelping size={32} />
                </div>
                <h5>Actions caritatives</h5>
                <p className="text-muted">De nombreuses actions caritatives ont été menées pour aider les plus démunis de la communauté.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Galerie historique</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-3 text-center">
                  <div className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3" style={{height: 200}}>
                    <FaImage size={48} className="text-muted" />
                  </div>
                  <h6>Église en 1965</h6>
                  <p className="text-muted small">Premier bâtiment de l'église</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-3 text-center">
                  <div className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3" style={{height: 200}}>
                    <FaImage size={48} className="text-muted" />
                  </div>
                  <h6>Communauté en 1980</h6>
                  <p className="text-muted small">Les fidèles de l'époque</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-3 text-center">
                  <div className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3" style={{height: 200}}>
                    <FaImage size={48} className="text-muted" />
                  </div>
                  <h6>Rénovation 2005</h6>
                  <p className="text-muted small">Travaux de modernisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container text-center">
          <h3 className="mb-4">Découvrez la paroisse aujourd'hui</h3>
          <p className="lead mb-4">
            L'histoire continue de s'écrire chaque jour avec la participation active 
            de tous les fidèles de la communauté paroissiale.
          </p>
          <a href="/contact-localisation" className="btn btn-lg px-4 fw-bold" style={{background: '#19b6c9', color: '#fff', border: 'none'}}>
            <FaMapMarkerAlt className="me-2" />
            Nous rendre visite
          </a>
        </div>
      </section>
    </div>
  );
}

export default HistoireParoisse; 