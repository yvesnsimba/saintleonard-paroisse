import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '60vh', textAlign: 'center', background: '#f8f9fa'}}>
      <div className="bg-white rounded-3 shadow p-5" style={{maxWidth: 500}}>
        <div className="mb-4">
          <FaSearch className="fa-3x text-muted mb-3" style={{fontSize: '3rem'}} />
          <h1 className="display-1 fw-bold mb-3" style={{color: '#19b6c9'}}>404</h1>
        </div>
        <h2 className="mb-3">Page introuvable</h2>
        <p className="mb-4 text-muted">
          Cette page semble avoir disparu dans les couloirs de notre paroisse. 
          Ne vous inquiétez pas, nous vous ramenons sur le bon chemin !
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <NavLink to="/" className="btn px-4 py-2 fw-bold" style={{background: '#19b6c9', color: '#fff', border: 'none'}}>
            Retour à l'accueil
          </NavLink>
          <button onClick={() => window.history.back()} className="btn px-4 py-2 fw-bold" style={{background: 'transparent', color: '#19b6c9', border: '2px solid #19b6c9'}}>
            Retour en arrière
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound; 