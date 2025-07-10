import { 
  FaBook, 
  FaCalendarAlt, 
  FaPrayingHands, 
  FaHeart, 
  FaLightbulb, 
  FaShare, 
  FaPrint, 
  FaDownload,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaRedo
} from 'react-icons/fa';
import React, { useState } from 'react';

function LectureJour() {
  const [lecture] = useState({
    date: "Jeudi, 10 juillet 2025",
    theme: "14ème Semaine du Temps Ordinaire",
    couleur: "Vert",
    premiereLecture: {
      reference: "Genèse 44, 18-21.23b-29 ; 45, 1-5",
      texte: "En ces jours-là, Juda et ses frères, les fils de Jacob, avaient été ramenés devant Joseph. Juda s'approcha de lui et dit : « De grâce, mon seigneur, permets que ton serviteur t'adresse une parole sans que la colère de mon seigneur s'enflamme contre ton serviteur, car tu es aussi grand que Pharaon ! Mon seigneur avait demandé à ses serviteurs : 'Avez-vous encore votre père ou un autre frère ?' Et nous avons répondu à mon seigneur : 'Nous avons encore notre vieux père et un petit frère, l'enfant qu'il a eu dans sa vieillesse ; celui-ci avait un frère qui est mort, il reste donc le seul enfant de sa mère, et notre père l'aime !' Alors tu as dit à tes serviteurs : 'Amenez-le-moi : je veux m'occuper de lui. Si votre plus jeune frère ne revient pas avec vous, vous ne serez plus admis en ma présence.' Donc, lorsque nous sommes retournés auprès de notre père, ton serviteur, nous lui avons rapporté les paroles de mon seigneur. Et, lorsque notre père a dit : 'Repartez pour nous acheter un peu de nourriture', nous lui avons répondu : 'Nous ne pourrons pas repartir si notre plus jeune frère n'est pas avec nous, car nous ne pourrons pas être admis en présence de cet homme si notre plus jeune frère n'est pas avec nous.' Alors notre père, ton serviteur, nous a dit : 'Vous savez bien que ma femme Rachel ne m'a donné que deux fils. Le premier a disparu. Sûrement, une bête féroce l'aura mis en pièces, et je ne l'ai jamais revu. Si vous emmenez encore celui-ci loin de moi et qu'il lui arrive malheur, vous ferez descendre misérablement mes cheveux blancs au séjour des morts.' Joseph ne put se contenir devant tous les gens de sa suite, et il s'écria : « Faites sortir tout le monde. » Quand il n'y eut plus personne auprès de lui, il se fit reconnaître de ses frères. Il pleura si fort que les Égyptiens l'entendirent, et même la maison de Pharaon. Il dit à ses frères : « Je suis Joseph ! Est-ce que mon père vit encore ? » Mais ses frères étaient incapables de lui répondre, tant ils étaient bouleversés de se trouver en face de lui. Alors Joseph dit à ses frères : « Approchez-vous de moi ». Ils s'approchèrent, et il leur dit : « Je suis Joseph, votre frère, que vous avez vendu pour qu'il soit emmené en Égypte. Mais maintenant ne vous affligez pas, et ne soyez pas tourmentés de m'avoir vendu, car c'est pour vous conserver la vie que Dieu m'a envoyé ici avant vous. »",
      message: "Joseph se fait reconnaître de ses frères et leur révèle que Dieu l'a envoyé pour les sauver."
    },
    psaume: {
      reference: "Psaume 104 (105), 16-17, 18-19, 20-21",
      refrain: "Souvenez-vous des merveilles que le Seigneur a faites."
    },
    evangile: {
      reference: "Matthieu 10, 7-15",
      texte: "En ce temps-là, Jésus disait à ses Apôtres : « Sur votre route, proclamez que le royaume des Cieux est tout proche. Guérissez les malades, ressuscitez les morts, purifiez les lépreux, expulsez les démons. Vous avez reçu gratuitement : donnez gratuitement. Ne vous procurez ni or ni argent, ni monnaie de cuivre à mettre dans vos ceintures, ni sac pour la route, ni tunique de rechange, ni sandales, ni bâton. L'ouvrier, en effet, mérite sa nourriture. Dans chaque ville ou village où vous entrerez, informez-vous pour savoir qui est digne de vous accueillir, et restez là jusqu'à votre départ. En entrant dans la maison, saluez ceux qui l'habitent. Si cette maison en est digne, que votre paix vienne sur elle. Si elle n'en est pas digne, que votre paix retourne vers vous. Si l'on ne vous accueille pas et si l'on n'écoute pas vos paroles, sortez de cette maison ou de cette ville, et secouez la poussière de vos pieds. Amen, je vous le dis : au jour du Jugement, le pays de Sodome et de Gomorrhe sera traité moins sévèrement que cette ville. »",
      message: "Jésus envoie ses disciples en mission avec des instructions précises."
    }
  });

  return (
    <div className="lecture-jour">
      {/* Hero Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #19b6c9 0%, #138a99 100%)', color: 'white'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Lecture du jour</h1>
              <p className="lead mb-2">
                {lecture.date}
              </p>
              <p className="mb-0 opacity-75">
                {lecture.theme}
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaBook size={64} className="opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Informations rapides */}
      <section className="py-4" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <FaCalendarAlt className="me-2" style={{color: '#19b6c9'}} />
                <span className="fw-bold">{lecture.date}</span>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <FaPrayingHands className="me-2" style={{color: '#19b6c9'}} />
                <span className="fw-bold">Temps Ordinaire</span>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <FaHeart className="me-2" style={{color: '#19b6c9'}} />
                <span className="fw-bold">Couleur : {lecture.couleur}</span>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <FaLightbulb className="me-2" style={{color: '#19b6c9'}} />
                <span className="fw-bold">{lecture.theme}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Première Lecture */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header" style={{background: '#19b6c9', color: 'white', borderRadius: '12px 12px 0 0'}}>
                  <h3 className="mb-0">
                    <FaBook className="me-2" />
                    Première Lecture
                  </h3>
                </div>
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">{lecture.premiereLecture.reference}</h5>
                  <p className="lead mb-4" style={{lineHeight: '1.8'}}>
                    {lecture.premiereLecture.texte}
                  </p>
                  <div className="alert alert-info" style={{background: '#e3f2fd', border: 'none'}}>
                    <FaLightbulb className="me-2" style={{color: '#19b6c9'}} />
                    <strong>Message :</strong> {lecture.premiereLecture.message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psaume */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header" style={{background: '#19b6c9', color: 'white', borderRadius: '12px 12px 0 0'}}>
                  <h3 className="mb-0">
                    <FaPrayingHands className="me-2" />
                    Psaume
                  </h3>
                </div>
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">{lecture.psaume.reference}</h5>
                  <div className="alert alert-warning mb-4" style={{background: '#fff3cd', border: 'none'}}>
                    <strong>Refrain :</strong> {lecture.psaume.refrain}
                  </div>
                  <div className="psaume-versets">
                    <p className="mb-2" style={{lineHeight: '1.6'}}>
                      {lecture.psaume.refrain}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Évangile */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header" style={{background: '#19b6c9', color: 'white', borderRadius: '12px 12px 0 0'}}>
                  <h3 className="mb-0">
                    <FaBook className="me-2" />
                    Évangile
                  </h3>
                </div>
                <div className="card-body p-4">
                  <h5 className="text-muted mb-3">{lecture.evangile.reference}</h5>
                  <p className="lead mb-4" style={{lineHeight: '1.8'}}>
                    {lecture.evangile.texte}
                  </p>
                  <div className="alert alert-success" style={{background: '#d4edda', border: 'none'}}>
                    <FaLightbulb className="me-2" style={{color: '#19b6c9'}} />
                    <strong>Message :</strong> {lecture.evangile.message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-5" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="text-center mb-4">Actions</h4>
                  <div className="row text-center">
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-primary w-100">
                        <FaShare className="me-2" />
                        Partager
                      </button>
                    </div>
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-secondary w-100">
                        <FaPrint className="me-2" />
                        Imprimer
                      </button>
                    </div>
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-info w-100">
                        <FaDownload className="me-2" />
                        Télécharger
                      </button>
                    </div>
                    <div className="col-md-3 mb-3">
                      <button className="btn btn-outline-success w-100">
                        <FaPlay className="me-2" />
                        Écouter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LectureJour; 