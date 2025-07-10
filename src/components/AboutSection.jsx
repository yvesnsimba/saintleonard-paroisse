import imgAbout from "../assets/Saint Leonard.jpg";

function AboutSection() {
  return (
    <section className="py-5" style={{background: '#f8f9fa'}}>
      <div className="container">
        <div className="row align-items-center g-5 flex-column flex-lg-row">
          <div className="col-lg-5 text-center">
            <img src={imgAbout} alt="Façade de la paroisse" className="img-fluid rounded-3 shadow" style={{maxHeight: 320, objectFit: 'cover'}} />
          </div>
          <div className="col-lg-7">
            <h2 className="mb-3">À propos de la paroisse</h2>
            <p className="lead mb-3">
              Fondée au cœur de Kinshasa, la paroisse Saint Leonard est un lieu de rassemblement, de prière et de fraternité pour tous les fidèles.
            </p>
            <ul className="mb-4 ps-3">
              <li><strong>Mission :</strong> Annoncer l'Évangile et célébrer les sacrements</li>
              <li><strong>Valeurs :</strong> Accueil, solidarité, engagement, prière</li>
              <li><strong>Histoire :</strong> Présente depuis plusieurs décennies, la paroisse accompagne familles, jeunes et personnes vulnérables dans leur cheminement de foi.</li>
            </ul>
            <a href="#" className="btn px-4 py-2 fw-bold" style={{background: '#19b6c9', color: '#fff', border: 'none'}}>En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 