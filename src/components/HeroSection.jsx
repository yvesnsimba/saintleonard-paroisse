import React, { useEffect, useState, useRef } from 'react';
import FeaturedNews from './FeaturedNews';
import img1 from '../assets/Saint Leonard.jpg';
import img2 from '../assets/Saint Leonard 1.jpg';
import img3 from '../assets/Saint Leonard 2.jpg';
import img4 from '../assets/Saint Leonard 3.jpg';

const images = [img1, img2, img3, img4];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section position-relative d-flex align-items-center justify-content-center overflow-hidden"
      style={{minHeight: '80vh', width: '100%'}}
    >
      {/* Images de fond superposées avec fondu enchaîné */}
      {images.map((img, i) => (
        <div
          key={i}
          className="hero-bg-fade position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1.2s',
            zIndex: 0,
          }}
        />
      ))}
      {/* Overlay sombre pour lisibilité */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(0,0,0,0.25)', zIndex: 1}}></div>
      {/* Indicateurs du carrousel */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2" style={{zIndex: 3}}>
        {images.map((_, i) => (
          <span key={i} className={`rounded-circle bg-white ${i === index ? 'opacity-100' : 'opacity-50'}`} style={{width: 12, height: 12, display: 'inline-block'}}></span>
        ))}
      </div>
      {/* Contenu central */}
      <div className="container position-relative" style={{zIndex: 4}}>
        <div className="row justify-content-between align-items-center flex-column flex-lg-row">
          <div className="col-lg-7 text-lg-start text-center">
            <h1 className="display-4 fw-bold mb-4" style={{color: '#fff', textShadow: '0 4px 16px rgba(0,0,0,0.3)'}}>Ensemble dans la prière, l'amour et le service, marchons à la suite du Christ.</h1>
            <p className="lead mb-4" style={{color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.2)', fontWeight: 400}}>
              Messes, sacrements, fraternité, catéchèse et vie communautaire pour tous les fidèles.
            </p>
            <div className="d-flex justify-content-lg-start justify-content-center gap-3 mt-4">
              <a href="#" className="btn px-4 py-2" style={{background: '#19b6c9', color: '#fff', fontWeight: 700, fontSize: '1.1rem'}}>Découvrir la vie paroissiale</a>
              <a href="#" className="btn px-4 py-2" style={{background: '#19b6c9', color: '#fff', fontWeight: 700, fontSize: '1.1rem'}}>Faire un don</a>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-lg-end justify-content-center">
            <FeaturedNews />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 