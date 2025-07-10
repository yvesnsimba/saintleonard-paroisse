function NewsletterSection() {
  return (
    <section className="py-5" style={{background: '#f8f9fa'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="bg-white rounded-3 shadow p-4 text-center">
              <h3 className="mb-3">Newsletter paroissiale</h3>
              <p className="mb-4">Recevez chaque semaine les nouvelles, horaires et temps forts de la paroisse.</p>
              <form className="row g-2 justify-content-center">
                <div className="col-12 col-md-8">
                  <input type="email" className="form-control" placeholder="Votre email" required />
                </div>
                <div className="col-12 col-md-4">
                  <button type="submit" className="btn w-100 fw-bold" style={{background: '#19b6c9', color: '#fff', border: 'none'}}>Je m'inscris</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection; 