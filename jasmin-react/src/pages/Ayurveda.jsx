import "../styles/app.css";

export default function Ayurveda() {
  return (
    <>
      <header>
        <nav className="navbar">
          <a href="/">
            <img
              src="/assets/lightlogo.png"
              alt="HealthbyJasminlogo"
              className="logo"
            />
          </a>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/yoga">Yoga</a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Ayurveda</h1>
        <p className="ayurveda-text">
          Ayurveda offers us the knowledge and tools to strengthen and heal
          ourselves, both physically and mentally. It's a holistic approach to
          health that has been around for over 6000 years, with its roots in
          India.
        </p>
        <p className="ayurveda-text">
          Ayurveda sees the whole person – body, mind, and everything in
          between. Nothing stands alone. If you have a headache, it's probably
          not just about your head. There's likely something else going on in
          your body or your life that's connected.
        </p>
        <p className="ayurveda-text">
          One of the most beautiful parts of Ayurveda, in my opinion, is the
          treatments – especially the massages. They're often warming and deeply
          soothing, using warm sesame oil. Some are calming, some balancing, and
          others more cleansing or energizing, depending on what you need.
        </p>
        <p className="ayurveda-text">
          Ayurvedic massages are performed with warm sesame oil and for specific
          massage sessions we use hot water bags. We massage the head, face,
          front and back of the body including feet. Sesame oil is antiseptic
          and anti-inflammatory, it's warming and naturally softens muscle
          tension. It's beneficial for all doshas – vata, pitta and kapha.
        </p>
      </section>

      <section className="image-section ayurveda-image"></section>

      <footer>
        <div>
          <a
            href="https://www.instagram.com/healthbyjasmin/"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>copyright© 2025 HealthbyJasmin</p>
        <p>
          <a href="mailto:healthbyjasmin@gmail.com">healthbyjasmin@gmail.com</a>
        </p>
      </footer>
    </>
  );
}
