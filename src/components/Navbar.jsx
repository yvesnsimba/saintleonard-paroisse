import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChurch } from 'react-icons/fa';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3"
      style={{
        top: 0,
        transition: 'margin-top 0.3s',
        position: 'sticky',
        zIndex: 1050,
      }}
    >
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/" style={{fontSize: '2.2rem', letterSpacing: '1px', fontWeight: 400}}>
          <FaChurch className="me-3" style={{color: '#19b6c9', fontSize: '2rem'}} />
          <span style={{fontWeight: 400}}>Saint </span>
          <span style={{fontWeight: 700}}> Leonard</span>
        </NavLink>

        {/* Bouton hamburger pour mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navigation */}
        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Accueil */}
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/" 
                end
                style={({ isActive }) => ({
                  color: isActive ? '#19b6c9' : '#333',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'color 0.3s ease'
                })}
                onMouseEnter={(e) => e.target.style.color = '#19b6c9'}
                onMouseLeave={(e) => {
                  if (!e.target.classList.contains('active')) {
                    e.target.style.color = '#333';
                  }
                }}
              >
                Accueil
              </NavLink>
            </li>

            {/* Paroisse avec dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                style={{
                  color: '#333',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#19b6c9'}
                onMouseLeave={(e) => e.target.style.color = '#333'}
              >
                Paroisse
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/histoire-paroisse"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Histoire de la paroisse
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/patron-paroisse"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Patron de la paroisse
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/cure-pretres"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Le curé et les prêtres
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/conseil-pastoral"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Conseil pastoral / Comité paroissial
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/groupes-vie"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Groupes de vie
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/galerie"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Galerie
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/horaire-messes"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Horaire des messes
                  </NavLink>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/contact-localisation"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Contact & localisation
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Lectures avec dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                style={{
                  color: '#333',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#19b6c9'}
                onMouseLeave={(e) => e.target.style.color = '#333'}
              >
                Lectures
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/lecture-jour"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Lecture du jour
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="dropdown-item" 
                    to="/lecture-semaine"
                    style={({ isActive }) => ({
                      color: isActive ? '#19b6c9' : '#333',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive ? '#f8f9fa' : 'transparent',
                      transition: 'all 0.3s ease'
                    })}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#19b6c9';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.classList.contains('active')) {
                        e.target.style.color = '#333';
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Lecture de la semaine
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Actualités */}
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/actualites"
                style={({ isActive }) => ({
                  color: isActive ? '#19b6c9' : '#333',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'color 0.3s ease'
                })}
                onMouseEnter={(e) => e.target.style.color = '#19b6c9'}
                onMouseLeave={(e) => {
                  if (!e.target.classList.contains('active')) {
                    e.target.style.color = '#333';
                  }
                }}
              >
                Actualités
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 