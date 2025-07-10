import { useEffect, useState } from 'react';

const images = [
  'https://oa.cd/ai/saintleonard1.jpg', // Remplacer par l’URL réelle si besoin
  'https://oa.cd/ai/saintleonard2.jpg',
  'https://oa.cd/ai/saintleonard3.jpg',
  'https://oa.cd/ai/saintleonard4.jpg',
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container position-relative w-100" style={{maxWidth: 900, margin: '0 auto'}}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Paroisse Saint Leonard ${i+1}`}
          className={`w-100 rounded-3 shadow ${i === index ? 'd-block' : 'd-none'}`}
          style={{height: 400, objectFit: 'cover', transition: 'opacity 0.7s'}}
        />
      ))}
      {/* Indicateurs */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
        {images.map((_, i) => (
          <span key={i} className={`rounded-circle bg-white ${i === index ? 'opacity-100' : 'opacity-50'}`} style={{width: 12, height: 12, display: 'inline-block'}}></span>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel; 