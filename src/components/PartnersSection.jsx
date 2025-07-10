import logoCaritas from '../assets/logo/Logo Caritas.jpg';
import logoArchikin from '../assets/logo/Logo ARCHIKIN.jpg';
import logoCenco from '../assets/logo/Logo CENCO.jpg';
import logoAelf from '../assets/logo/Logo AELF.jpg';

const partners = [
  { name: 'Archidiocèse de Kinshasa', logo: logoArchikin, url: 'https://archikin.org/' },
  { name: 'Caritas Congo', logo: logoCaritas, url: 'https://www.caritasdev.cd/' },
  { name: 'Cenco', logo: logoCenco, url: 'https://www.cenco.org/' },
  { name: 'AELF', logo: logoAelf, url: 'https://www.aelf.org/' },
];

function PartnersSection() {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="mb-4 text-center">Partenaires & Soutiens</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
          {partners.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center text-decoration-none text-dark">
              <img src={p.logo} alt={p.name} style={{height: 100, objectFit: 'contain', background: '#fff', borderRadius: 12, padding: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)'}} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection; 