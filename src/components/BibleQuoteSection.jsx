import { useState, useEffect } from 'react';

const bibleQuotes = [
  "Je suis le chemin, la vérité et la vie. (Jean 14,6)",
  "Heureux les artisans de paix, car ils seront appelés fils de Dieu. (Matthieu 5,9)",
  "Tout ce que vous voulez que les hommes fassent pour vous, faites-le pour eux. (Matthieu 7,12)",
  "Le Seigneur est mon berger, je ne manque de rien. (Psaume 23,1)",
  "Aimez-vous les uns les autres comme je vous ai aimés. (Jean 13,34)"
];

function getRandomQuote() {
  const idx = Math.floor(Math.random() * bibleQuotes.length);
  return bibleQuotes[idx];
}

function BibleQuoteSection() {
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 1000 * 60 * 60 * 24); // Change chaque jour
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5" style={{background: '#f8f9fa'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="bg-white rounded-3 shadow p-4 text-center">
              <h3 className="mb-3" style={{color: '#19b6c9'}}>Parole du jour</h3>
              <blockquote className="mb-0" style={{fontSize: '1.3rem', fontStyle: 'italic'}}>
                {quote}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BibleQuoteSection; 