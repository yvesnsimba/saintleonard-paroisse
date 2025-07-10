import { useState } from 'react';
import { FaCamera, FaImages } from 'react-icons/fa';
import img1 from '../assets/Saint Leonard.jpg';
import img2 from '../assets/Saint Leonard 1.jpg';
import img3 from '../assets/Saint Leonard 2.jpg';
import img4 from '../assets/Saint Leonard 3.jpg';

function Galerie() {
  const [activeCategory, setActiveCategory] = useState('toutes');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: 'toutes', name: 'Toutes les photos' },
    { id: 'saint-leonard', name: 'Saint Leonard' }
  ];

  // Photos avec les vraies images du carrousel
  const photos = [
    { 
      id: 1, 
      category: 'saint-leonard', 
      title: 'Saint Leonard de Noblac', 
      description: 'Représentation de Saint Leonard, patron de notre paroisse',
      image: img1
    },
    { 
      id: 2, 
      category: 'saint-leonard', 
      title: 'Saint Leonard - Vue 1', 
      description: 'Première vue de Saint Leonard de Noblac',
      image: img2
    },
    { 
      id: 3, 
      category: 'saint-leonard', 
      title: 'Saint Leonard - Vue 2', 
      description: 'Deuxième vue de Saint Leonard de Noblac',
      image: img3
    },
    { 
      id: 4, 
      category: 'saint-leonard', 
      title: 'Saint Leonard - Vue 3', 
      description: 'Troisième vue de Saint Leonard de Noblac',
      image: img4
    }
  ];

  const filteredPhotos = activeCategory === 'toutes' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="galerie-page">
      {/* Hero Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Galerie Photos</h1>
              <p className="lead mb-0">
                Découvrez les moments de vie de notre paroisse à travers nos photos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-4" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`btn px-4 py-2 fw-bold ${
                      activeCategory === category.id 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'
                    }`}
                    style={{
                      background: activeCategory === category.id ? '#19b6c9' : 'transparent',
                      color: activeCategory === category.id ? '#fff' : '#19b6c9',
                      border: '2px solid #19b6c9',
                      borderRadius: '25px'
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredPhotos.map(photo => (
              <div key={photo.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm" style={{border: 'none', borderRadius: '12px', overflow: 'hidden'}}>
                  <div 
                    className="card-img-top" 
                    style={{
                      height: '250px',
                      backgroundImage: `url(${photo.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      cursor: 'pointer'
                    }}
                    onClick={() => openModal(photo)}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{photo.title}</h5>
                    <p className="card-text text-muted">{photo.description}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <button 
                      className="btn w-100" 
                      style={{background: '#19b6c9', color: '#fff', border: 'none'}}
                      onClick={() => openModal(photo)}
                    >
                      Voir en grand
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-5">
              <div style={{fontSize: '4rem', color: '#19b6c9'}}>
                <FaImages />
              </div>
              <h3 className="mt-3">Aucune photo trouvée</h3>
              <p className="text-muted">Aucune photo n'est disponible pour cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Section Partage */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Partagez vos photos</h2>
              <p className="lead mb-4">
                Vous avez des photos de moments importants de la paroisse ? 
                Partagez-les avec la communauté !
              </p>
              <button 
                className="btn btn-lg px-5 fw-bold" 
                style={{background: '#19b6c9', color: '#fff', border: 'none'}}
              >
                <FaCamera className="me-2" />
                Envoyer mes photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal pour voir l'image en grand */}
      {selectedPhoto && (
        <div 
          className="modal fade show" 
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999
          }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" style={{border: 'none', borderRadius: '12px'}} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header" style={{border: 'none', padding: '1rem 1.5rem'}}>
                <h5 className="modal-title fw-bold">{selectedPhoto.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeModal}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body p-0">
                <div 
                  style={{
                    width: '100%',
                    height: '60vh',
                    backgroundImage: `url(${selectedPhoto.image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#f8f9fa'
                  }}
                />
              </div>
              <div className="modal-footer" style={{border: 'none', padding: '1rem 1.5rem'}}>
                <p className="text-muted mb-0">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galerie; 