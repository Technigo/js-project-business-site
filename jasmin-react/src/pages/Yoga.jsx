import "../styles/app.css";

export default function Yoga() {
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
              <a href="/ayurveda">Ayurveda</a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Yoga</h1>
        <p>
          Yoga is more than movement — it is the practice of awareness and
          connection between body, mind, and spirit. Here you can explore
          classes to support your daily life and practice.
        </p>

        <h3>Ashtanga Yoga</h3>
        <p className="ashtanga-text">
          Ashtanga Yoga is a practice where the breath is at the core,
          synchronized with gentle, dynamic movements. The method comes from
          India and, just like Ayurveda, it looks at the whole person — body,
          mind, and everything in between.
        </p>
        <p className="ashtanga-text">
          We start where we are, and work with what we've got. Everyone can
          practice Ashtanga — just in different ways. For those who feel called,
          there's a traditional six-day-a-week rhythm. But for most of us, it's
          about practicing when we can and in a way that fits our lives.
        </p>
        <p className="ashtanga-text">
          Ashtanga has two main styles: one is called Mysore, a self-practice
          where you slowly learn a set sequence of poses, bit by bit, with help
          from a teacher. The other is the more familiar guided class, where
          everyone moves together with instructions. Both are valuable.
        </p>

        <h3>Yin Yoga</h3>
        <p>
          Yin Yoga is a slow, meditative practice focused on stillness and deep
          release. Poses are held for several minutes to target the connective
          tissues — fascia, ligaments and joints — rather than the muscles. This
          allows for improved flexibility, joint mobility, and a calming effect
          on the nervous system. Yin invites you to turn inward.
        </p>
      </section>

      <section className="image-section ashtanga-image"></section>

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
