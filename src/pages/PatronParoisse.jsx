import React from 'react';
import { FaCross, FaGift, FaPray, FaHandshake, FaHeart, FaUnlock, FaBaby, FaUsers, FaCalendarAlt, FaCheck, FaBookOpen, FaStar } from 'react-icons/fa';
import imgSaintLeonard from '../assets/Sain Leonard de Noblac.jpg';

function PatronParoisse() {
  const miracles = [
    {
      title: "Libération des prisonniers",
      description: "Saint Léonard est connu pour avoir libéré miraculeusement des prisonniers de leurs chaînes.",
      icon: FaUnlock
    },
    {
      title: "Guérisons miraculeuses",
      description: "De nombreuses guérisons ont été attribuées à son intercession, particulièrement pour les maux de tête.",
      icon: FaHeart
    },
    {
      title: "Protection des femmes enceintes",
      description: "Il est invoqué pour protéger les femmes enceintes et faciliter les accouchements.",
      icon: FaBaby
    },
    {
      title: "Conversion des pécheurs",
      description: "Son exemple de vie a conduit de nombreux pécheurs à la conversion et à la foi.",
      icon: FaPray
    }
  ];

  const patronage = [
    {
      category: "Personnes",
      items: ["Prisonniers", "Femmes enceintes", "Accoucheuses", "Enfants malades", "Agriculteurs"]
    },
    {
      category: "Situations",
      items: ["Délivrance des chaînes", "Protection contre les maladies", "Fécondité", "Conversion", "Réconciliation"]
    },
    {
      category: "Lieux",
      items: ["Prisons", "Hôpitaux", "Fermes", "Églises", "Foyers"]
    }
  ];

  const prayers = [
    {
      title: "Prière à Saint Léonard",
      text: "Ô Saint Léonard, vous qui avez tant aimé les pauvres et les prisonniers, priez pour nous. Aidez-nous à nous libérer des chaînes du péché et à vivre dans la liberté des enfants de Dieu. Amen."
    },
    {
      title: "Prière pour les femmes enceintes",
      text: "Saint Léonard, protecteur des futures mères, veillez sur toutes les femmes enceintes. Accordez-leur santé, force et paix pour mener à bien leur grossesse. Amen."
    },
    {
      title: "Prière pour les prisonniers",
      text: "Ô Saint Léonard, libérateur des captifs, intercédez pour tous les prisonniers. Qu'ils trouvent la force de se convertir et la grâce de la libération intérieure. Amen."
    }
  ];

  return (
    <div className="patron-paroisse">
      {/* Hero Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Saint Léonard</h1>
              <p className="lead mb-0">
                Découvrez la vie et l'œuvre de notre saint patron, 
                protecteur des prisonniers et des femmes enceintes.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaCross className="opacity-75" style={{fontSize: '4rem'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={imgSaintLeonard} alt="Saint Léonard de Noblac" className="img-fluid rounded-3 shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Notre saint patron</h2>
              <p className="lead mb-4">
                Saint Léonard de Noblac (ou de Limoges) est le patron de notre paroisse. 
                Né au Ve siècle, il est l'un des saints les plus populaires du Moyen Âge.
              </p>
              <p className="mb-4">
                Moine et ermite, il est connu pour sa charité envers les pauvres et 
                les prisonniers. Sa vie exemplaire de prière et de service continue 
                d'inspirer notre communauté paroissiale.
              </p>
              <div className="d-flex gap-3">
                <div className="text-center">
                                  <div className="h3 fw-bold" style={{color: '#19b6c9'}}>6 novembre</div>
                <div className="small text-muted">Fête liturgique</div>
              </div>
              <div className="text-center">
                <div className="h3 fw-bold" style={{color: '#19b6c9'}}>Ve siècle</div>
                <div className="small text-muted">Période de vie</div>
              </div>
              <div className="text-center">
                <div className="h3 fw-bold" style={{color: '#19b6c9'}}>Noblac</div>
                <div className="small text-muted">Lieu de culte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biographie */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5">Biographie de Saint Léonard</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="mb-3" style={{color: '#19b6c9'}}>
                        <FaBirthdayCake className="me-2" />
                        Origines
                      </h5>
                      <p>
                        Saint Léonard est né dans une famille noble franque au Ve siècle. 
                        Il était parent du roi Clovis et fut converti au christianisme 
                        par saint Rémi, évêque de Reims.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="mb-3" style={{color: '#19b6c9'}}>
                        <FaPray className="me-2" />
                        Vocation religieuse
                      </h5>
                      <p>
                        Refusant une carrière militaire, il choisit la vie monastique. 
                        Il devint moine et se retira dans la forêt de Limoges pour 
                        vivre en ermite.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="mb-3" style={{color: '#19b6c9'}}>
                        <FaHandshake className="me-2" />
                        Œuvre de charité
                      </h5>
                      <p>
                        Il consacra sa vie à aider les pauvres et les prisonniers. 
                        Il obtint du roi la libération de nombreux captifs et 
                        construisit des oratoires pour leur accueil.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="mb-3" style={{color: '#19b6c9'}}>
                        <FaStar className="me-2" />
                        Mort et culte
                      </h5>
                      <p>
                        Il mourut vers 559 et fut enterré à Noblac (aujourd'hui 
                        Saint-Léonard-de-Noblat). Son tombeau devint un lieu de 
                        pèlerinage renommé.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miracles */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Miracles et intercessions</h2>
          <div className="row">
            {miracles.map((miracle, index) => {
              const IconComponent = miracle.icon;
              return (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <div 
                          className="text-white d-flex align-items-center justify-content-center me-3" 
                          style={{
                            width: '80px', 
                            height: '80px', 
                            borderRadius: '50%',
                            background: '#19b6c9',
                            boxShadow: '0 4px 8px rgba(25, 182, 201, 0.3)'
                          }}
                        >
                          <IconComponent style={{fontSize: '1.5rem', color: 'white'}} />
                        </div>
                        <div>
                          <h5 className="mb-2">{miracle.title}</h5>
                          <p className="text-muted mb-0">{miracle.description}</p>
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

      {/* Patronage */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5">Patronage de Saint Léonard</h2>
          <div className="row">
            {patronage.map((category, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="mb-3" style={{color: '#19b6c9'}}>{category.category}</h5>
                    <ul className="list-unstyled mb-0">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-2">
                          <FaCheck className="me-2" style={{color: '#19b6c9'}} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prières */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Prières à Saint Léonard</h2>
          <div className="row">
            {prayers.map((prayer, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="mb-3" style={{color: '#19b6c9'}}>{prayer.title}</h5>
                    <p className="text-muted mb-0" style={{fontStyle: 'italic'}}>
                      "{prayer.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Célébrations */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="text-center mb-5">Célébrations en l'honneur de Saint Léonard</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                                          <div 
                        className="text-white d-flex align-items-center justify-content-center me-3" 
                        style={{
                          width: '60px', 
                          height: '60px', 
                          borderRadius: '50%',
                          background: '#19b6c9',
                          boxShadow: '0 4px 8px rgba(25, 182, 201, 0.3)'
                        }}
                      >
                        <FaCalendarAlt style={{fontSize: '1.2rem', color: 'white'}} />
                      </div>
                    <h5 className="mb-0">Fête patronale</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Chaque 6 novembre, nous célébrons la fête de notre saint patron 
                    avec une messe solennelle et des prières spéciales.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                                          <div 
                        className="text-white d-flex align-items-center justify-content-center me-3" 
                        style={{
                          width: '60px', 
                          height: '60px', 
                          borderRadius: '50%',
                          background: '#19b6c9', 
                          boxShadow: '0 4px 8px rgba(25, 182, 201, 0.3)'
                        }}
                      >
                        <FaUsers style={{fontSize: '1.2rem', color: 'white'}} />
                      </div>
                    <h5 className="mb-0">Neuvaine</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Une neuvaine est organisée chaque année du 28 octobre au 6 novembre 
                    pour préparer la fête de Saint Léonard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container text-center">
          <h3 className="mb-4">Priez avec Saint Léonard</h3>
          <p className="lead mb-4">
            Que l'exemple de Saint Léonard nous inspire à servir les autres 
            avec amour et compassion, particulièrement les plus démunis.
          </p>
          <a href="/lecture-jour" className="btn btn-lg px-4 fw-bold" style={{background: '#19b6c9', color: '#fff', border: 'none'}}>
            Découvrir les lectures
          </a>
        </div>
      </section>
    </div>
  );
}

export default PatronParoisse; 