import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <div className="fw-bold" style={{fontSize: '1.3rem'}}>Paroisse Saint Leonard</div>
            <div className="small">Archidiocèse de Kinshasa</div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="nav justify-content-center">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Accueil</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Paroisse</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Lectures</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Actualités</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-white-50">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <a href="#" className="text-white-50 ms-2" aria-label="Facebook">
              <FaFacebookF style={{fontSize: '1.2rem'}} />
            </a>
            <a href="#" className="text-white-50 ms-2" aria-label="Twitter">
              <FaTwitter style={{fontSize: '1.2rem'}} />
            </a>
            <a href="#" className="text-white-50 ms-2" aria-label="Instagram">
              <FaInstagram style={{fontSize: '1.2rem'}} />
            </a>
            <a href="#" className="text-white-50 ms-2" aria-label="Youtube">
              <FaYoutube style={{fontSize: '1.2rem'}} />
            </a>
          </div>
        </div>
        <div className="text-center small text-white-50">
          &copy; {new Date().getFullYear()} Paroisse Saint Leonard — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer; 