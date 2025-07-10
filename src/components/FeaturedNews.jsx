import { useEffect, useState } from 'react';

const newsGroups = [
  [
    { title: 'Messe des familles', date: 'Dimanche 10h30' },
    { title: 'Préparation au baptême', date: 'Samedi 15 juin' },
    { title: 'Concert de la chorale', date: 'Vendredi 20h' },
    { title: 'Adoration eucharistique', date: 'Jeudi 18h' },
    { title: 'Sortie des jeunes', date: 'Samedi 22 juin' },
    { title: 'Collecte alimentaire', date: 'Toute la semaine' },
  ],
  [
    { title: 'Pèlerinage paroissial', date: 'Dimanche 30 juin' },
    { title: 'Rencontre des catéchumènes', date: 'Mercredi 19h' },
    { title: 'Atelier biblique', date: 'Mardi 17h' },
    { title: 'Soirée louange', date: 'Vendredi 19h' },
    { title: 'Distribution de repas', date: 'Samedi 12h' },
    { title: 'Confessions', date: 'Tous les samedis 16h' },
  ],
];

function FeaturedNews() {
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % newsGroups.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="bg-white bg-opacity-75 rounded-3 shadow p-4 ms-lg-5 mt-4 mt-lg-0" style={{minWidth: 320, maxWidth: 380}}>
      <div className="d-flex align-items-center mb-2">
        <span className="badge bg-danger me-2">À la une</span>
        <h3 className="fw-bold mb-0" style={{color: '#19b6c9', fontSize: '1.4rem'}}>Actualités</h3>
      </div>
      <ul className="list-unstyled mb-0">
        {newsGroups[groupIndex].map((news, idx) => (
          <li className="mb-3" key={idx}>
            <strong>{news.title}</strong><br/>
            <span className="text-muted small">{news.date}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FeaturedNews; 