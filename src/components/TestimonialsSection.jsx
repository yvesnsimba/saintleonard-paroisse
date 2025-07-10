import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Grâce Mavungu',
    role: 'Paroissienne',
    text: 'La paroisse Saint Leonard est une vraie famille pour moi. J\'y ai trouvé écoute, soutien et joie de servir.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Jean-Baptiste Ilunga',
    role: 'Père de famille',
    text: 'Grâce à la catéchèse, mes enfants grandissent dans la foi et la fraternité. Merci à toute l\'équipe paroissiale!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Mireille Tshimanga',
    role: 'Catéchiste',
    text: 'Les messes et les groupes de prière m\'aident à avancer chaque jour avec confiance.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Patrick Kabasele',
    role: 'Jeune paroissien',
    text: 'Les activités pour les jeunes sont formidables et m\'ont permis de me faire de vrais amis.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 position-relative" style={{background: '#fff'}}>
      <div className="container">
        <h2 className="mb-4 text-center">Témoignages</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="bg-light rounded-3 shadow p-4 text-center position-relative">
              <img src={testimonials[testimonialIndex].avatar} alt={testimonials[testimonialIndex].name} className="rounded-circle mb-3 border border-3" style={{width: 80, height: 80, objectFit: 'cover'}} />
              <blockquote className="mb-3" style={{fontSize: '1.2rem', fontStyle: 'italic', color: '#333'}}>
                "{testimonials[testimonialIndex].text}"
              </blockquote>
              <div className="fw-bold">{testimonials[testimonialIndex].name}</div>
              <div className="text-muted small mb-2">{testimonials[testimonialIndex].role}</div>
              {/* Indicateurs du carrousel */}
              <div className="d-flex justify-content-center gap-2 mt-2">
                {testimonials.map((_, i) => (
                  <span key={i} className={`rounded-circle ${i === testimonialIndex ? 'bg-primary' : 'bg-secondary'} opacity-75`} style={{width: 10, height: 10, display: 'inline-block', cursor: 'pointer'}} onClick={() => setTestimonialIndex(i)}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection; 