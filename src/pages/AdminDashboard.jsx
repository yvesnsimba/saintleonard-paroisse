import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaNewspaper, 
  FaBook, 
  FaUsers, 
  FaCalendarAlt, 
  FaImages, 
  FaCog, 
  FaSignOutAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaHome
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier l'authentification
    const auth = localStorage.getItem('adminAuthenticated');
    if (auth !== 'true') {
      navigate('/admin');
      return;
    }
    setIsAuthenticated(true);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin');
  };

  const sections = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: FaHome },
    { id: 'actualites', name: 'Actualités', icon: FaNewspaper },
    { id: 'lectures', name: 'Lectures', icon: FaBook },
    { id: 'groupes', name: 'Groupes de vie', icon: FaUsers },
    { id: 'evenements', name: 'Événements', icon: FaCalendarAlt },
    { id: 'galerie', name: 'Galerie', icon: FaImages },
    { id: 'parametres', name: 'Paramètres', icon: FaCog }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <FaNewspaper className="text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Actualités</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <FaBook className="text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Lectures</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <FaUsers className="text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Groupes</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Actions rapides</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setActiveSection('actualites')}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaPlus className="text-blue-600 mr-3" />
              <span className="font-medium">Ajouter une actualité</span>
            </button>
            <button
              onClick={() => setActiveSection('lectures')}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaPlus className="text-blue-600 mr-3" />
              <span className="font-medium">Modifier les lectures</span>
            </button>
            <button
              onClick={() => setActiveSection('groupes')}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaPlus className="text-blue-600 mr-3" />
              <span className="font-medium">Gérer les groupes</span>
            </button>
            <button
              onClick={() => setActiveSection('evenements')}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaPlus className="text-blue-600 mr-3" />
              <span className="font-medium">Ajouter un événement</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'actualites':
        return (
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Gestion des actualités</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <FaPlus className="inline mr-2" />
                Ajouter
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Interface de gestion des actualités à implémenter...</p>
            </div>
          </div>
        );
      case 'lectures':
        return (
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Gestion des lectures</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <FaEdit className="inline mr-2" />
                Modifier
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Interface de gestion des lectures à implémenter...</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                {sections.find(s => s.id === activeSection)?.name}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Interface de gestion à implémenter...</p>
            </div>
          </div>
        );
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaHome className="text-xl" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center text-red-600 hover:text-red-800 transition-colors"
              >
                <FaSignOutAlt className="mr-2" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="mr-3" />
                    {section.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 