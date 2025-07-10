function ContactSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-5 align-items-center flex-column flex-lg-row">
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 rounded-3 shadow mb-4 mb-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506.03341093127943!2d15.202464827383082!3d-4.347252558024651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a2f00389e7af3%3A0x65ca5935fc9ce4dc!2ssaint%20L%C3%A9onard!5e0!3m2!1sfr!2scd!4v1752137961924!5m2!1sfr!2scd"
                width="600"
                height="450"
                style={{border:0, borderRadius: '0.75rem'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-3">Contact rapide</h3>
            <ul className="list-unstyled mb-4">
              <li><strong>Adresse :</strong> 123, Avenue de la Paroisse, Kinshasa</li>
              <li><strong>Téléphone :</strong> +243 900 000 000</li>
              <li><strong>Email :</strong> infodeercreative@gmail.com</li>
            </ul>
            <form className="bg-light rounded-3 shadow-sm p-4">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Votre nom" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Votre email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows={3} placeholder="Votre message" required></textarea>
              </div>
              <button type="submit" className="btn px-4 fw-bold" style={{background: '#19b6c9', color: '#fff', border: 'none'}}>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection; 