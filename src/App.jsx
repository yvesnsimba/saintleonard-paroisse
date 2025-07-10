import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import BibleQuoteSection from './components/BibleQuoteSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import HistoireParoisse from './pages/HistoireParoisse';
import PatronParoisse from './pages/PatronParoisse';
import CurePretres from './pages/CurePretres';
import ConseilPastoral from './pages/ConseilPastoral';
import GroupesVie from './pages/GroupesVie';
import ContactLocalisation from './pages/ContactLocalisation';
import LectureJour from './pages/LectureJour';
import LectureSemaine from './pages/LectureSemaine';
import Actualites from './pages/Actualites';
import Galerie from './pages/Galerie';
import HoraireMesses from './pages/HoraireMesses';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    document.title = 'Paroisse Saint Leonard - Kinshasa';
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/histoire-paroisse" element={<HistoireParoisse />} />
        <Route path="/patron-paroisse" element={<PatronParoisse />} />
        <Route path="/cure-pretres" element={<CurePretres />} />
        <Route path="/conseil-pastoral" element={<ConseilPastoral />} />
        <Route path="/groupes-vie" element={<GroupesVie />} />
        <Route path="/contact-localisation" element={<ContactLocalisation />} />
        <Route path="/lecture-jour" element={<LectureJour />} />
        <Route path="/lecture-semaine" element={<LectureSemaine />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/horaire-messes" element={<HoraireMesses />} />
        
        {/* Routes d'administration - cachées */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
