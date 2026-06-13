import "../styles/app.css";

export default function About() {
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
              <a href="/">Hem</a>
            </li>
            <li>
              <a href="/healthbyjasmin">Health by Jasmin</a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Om Jasmin</h1>
        <p className="about-text">
          Jag är Jasmin, personen bakom Health by Jasmin, ett enmannaföretag
          baserat i Stockholm, Sverige. Jag har praktiserat främst Ashtanga yoga
          men även yoga i allmänhet och Ayurveda i nästan 17 år. Det som först
          drog mig till både yoga och ayurveda var strukturen, rytmen och sättet
          som båda praktikerna sätter saker i fokus – ibland mjukt, ibland med
          kraft.
        </p>
        <p className="about-text">
          Jag förälskade mig i deras holistiska förhållningssätt och hur de
          utmanar dig att se på dig själv och dina vanor från en helt annan
          vinkel. År 2015/2016 startade jag Health by Jasmin för att skapa ett
          utrymme där jag kunde dela det som verkligen har resonerat med mig
          under åren.
        </p>
        <p className="about-text">
          Det här gör jag i små doser genom yogaklasser, korta kurser, enstaka
          retreats och naturligtvis de magiska ayurvediska massagerna. Jag
          erbjuder också föreläsningar och introduktioner till Ayurveda, för att
          hjälpa människor få en bättre förståelse för dess grund.
        </p>
      </section>

      <section className="image-section about-image"></section>

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
