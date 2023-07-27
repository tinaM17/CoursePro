
const Footer = ()=>{
    return (
      <div>
        <section className="cta-section">
          <div className="container flex cta-section-container">
            <h2>Join Our 7452 Happy Students​ Today!</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              explicabo, optio sed ipsam provident nostrum dolor, officiis
            </p>
            <button className="primary-button">Get started</button>
          </div>
        </section>
        <div className="subfooter">
          <div className="container flex sub-footer-container">
            <button
              className="hover-link"
              style={{ backgroundColor: 'transparent' }}
            >
              Privacy policy
            </button>
            <button
              className="hover-link"
              style={{ backgroundColor: 'transparent' }}
            >
              Terms & Conditions
            </button>
            <button
              className="hover-link"
              style={{ backgroundColor: 'transparent' }}
            >
              Security Information
            </button>
          </div>
        </div>
      </div>
    )
}

export default Footer