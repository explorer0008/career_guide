const { useEffect } = React;

const services = [
  {
    icon: "bi-compass",
    title: "Career Discovery",
    text: "Explore career paths matched to your interests, strengths, personality and long-term goals.",
    link: "Explore careers",
    href: "cc.html"
  },
  {
    icon: "bi-person-video3",
    title: "Expert Counselling",
    text: "Talk with experienced counsellors who can help you make practical and confident decisions.",
    link: "Book a session",
    href: "session.html"
  },
  {
    icon: "bi-bar-chart-line",
    title: "Skill Assessment",
    text: "Understand your current strengths and discover the skills required for your preferred career.",
    link: "Take assessment",
    href: "form.html"
  }
];

const careers = [
  {
    title: "Technology & Engineering",
    text: "Build products and solve real-world problems.",
    image: "html.jpeg.jpeg"
  },
  {
    title: "Career Planning",
    text: "Turn your interests into an achievable roadmap.",
    image: "Career Counseling.jpeg"
  },
  {
    title: "Professional Guidance",
    text: "Choose the direction that fits your future.",
    image:
      "Making a decision for career path, career guidance and development, businessman standing at road direction signs, determination to pick the right choice in career.jpeg"
  }
];

function Navbar() {
  useEffect(() => {
    const updateNavbar = () => {
      document
        .querySelector(".navbar")
        ?.classList.toggle("scrolled", window.scrollY > 35);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar);

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="brand-icon">
            <i className="bi bi-signpost-split-fill"></i>
          </span>
          CareerPath
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavigation"
          aria-label="Open navigation"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="mainNavigation">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#process">How it works</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
          </ul>

          <a className="btn-main" href="session.html">
            Book a session
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="hero-badge">
              <i className="bi bi-stars"></i>
              Guidance for a brighter future
            </div>

            <h1 className="hero-title">
              Find a career that feels <span>made for you.</span>
            </h1>

            <p className="hero-text">
              Discover your strengths, explore meaningful career paths and
              create a clear plan with support from experienced career
              counsellors.
            </p>

            <div className="hero-actions">
              <a className="btn-main" href="form.html">
                Start free assessment
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a className="btn-outline-main" href="#process">
                <i className="bi bi-play-circle"></i>
                See how it works
              </a>
            </div>

            <div className="trust-row">
              <div className="trust-item">
                <i className="bi bi-check-circle-fill"></i>
                Personalised guidance
              </div>

              <div className="trust-item">
                <i className="bi bi-check-circle-fill"></i>
                Expert counsellors
              </div>

              <div className="trust-item">
                <i className="bi bi-check-circle-fill"></i>
                Practical career plans
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  className="hero-image"
                  src="q5z29tae.png"
                  alt="Student receiving career guidance"
                />
              </div>

              <div className="floating-card card-one">
                <i className="bi bi-lightbulb-fill"></i>
                <div>
                  <strong>Discover strengths</strong>
                  <small>Know what suits you</small>
                </div>
              </div>

              <div className="floating-card card-two">
                <i className="bi bi-graph-up-arrow"></i>
                <div>
                  <strong>Build your roadmap</strong>
                  <small>Move forward confidently</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-box reveal">
          <div className="row g-3">
            <div className="col-6 col-lg-3 stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Career categories</div>
            </div>

            <div className="col-6 col-lg-3 stat-item">
              <div className="stat-number">1K+</div>
              <div className="stat-label">Students guided</div>
            </div>

            <div className="col-6 col-lg-3 stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Expert mentors</div>
            </div>

            <div className="col-6 col-lg-3 stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Positive feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-padding bg-soft" id="services">
      <div className="container">
        <div className="text-center mb-5 reveal">
          <span className="section-label">
            <i className="bi bi-grid-fill"></i>
            Our services
          </span>

          <h2 className="section-title mx-auto">
            Everything you need to choose your next step
          </h2>

          <p className="section-description mx-auto">
            Career decisions become easier when you understand yourself,
            your options and the steps needed to reach your goals.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4 reveal" key={service.title}>
              <article className="service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <a className="service-link" href={service.href}>
                  {service.link}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Tell us about yourself",
      text: "Complete a short assessment covering your interests, goals and strengths."
    },
    {
      title: "Discover suitable paths",
      text: "Receive career suggestions that match your personality and abilities."
    },
    {
      title: "Speak with a counsellor",
      text: "Discuss your options and clear up doubts with an experienced mentor."
    },
    {
      title: "Follow your action plan",
      text: "Get a practical roadmap for education, skills and career development."
    }
  ];

  return (
    <section className="section-padding" id="process">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 reveal">
            <img
              className="process-image"
              src="Choice way concept_ _ Premium Vector.jpeg"
              alt="Choosing between different career paths"
            />
          </div>

          <div className="col-lg-6 reveal">
            <span className="section-label">
              <i className="bi bi-diagram-3-fill"></i>
              How it works
            </span>

            <h2 className="section-title">
              From uncertainty to a clear career plan
            </h2>

            <p className="section-description mb-3">
              Our simple process helps you make informed decisions without
              feeling overwhelmed.
            </p>

            {steps.map((step, index) => (
              <div className="process-step" key={step.title}>
                <div className="step-number">{index + 1}</div>

                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerAreas() {
  return (
    <section className="section-padding bg-soft" id="careers">
      <div className="container">
        <div className="d-lg-flex justify-content-between align-items-end mb-5 reveal">
          <div>
            <span className="section-label">
              <i className="bi bi-briefcase-fill"></i>
              Explore opportunities
            </span>

            <h2 className="section-title mb-lg-0">
              Start exploring your possibilities
            </h2>
          </div>

          <a className="btn-outline-main mt-3 mt-lg-0" href="cc.html">
            View all careers
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className="row g-4">
          {careers.map((career) => (
            <div className="col-md-6 col-lg-4 reveal" key={career.title}>
              <article className="career-card">
                <img src={career.image} alt={career.title} />

                <div className="career-overlay">
                  <h3>{career.title}</h3>
                  <p>{career.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="cta-box reveal">
          <span className="section-label text-white">
            <i className="bi bi-rocket-takeoff-fill"></i>
            Your journey starts here
          </span>

          <h2>Ready to turn career confusion into confidence?</h2>

          <p className="my-4">
            Take the first step today. Complete your assessment or schedule a
            personalised guidance session with one of our counsellors.
          </p>

          <div className="d-flex gap-3 flex-wrap">
            <a className="btn-light-custom" href="form.html">
              Take assessment
              <i className="bi bi-arrow-right"></i>
            </a>

            <a className="btn-outline-light btn px-4 fw-bold" href="session.html">
              Book counselling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <a className="navbar-brand footer-brand" href="#home">
              <span className="brand-icon">
                <i className="bi bi-signpost-split-fill"></i>
              </span>
              CareerPath
            </a>

            <p className="footer-description">
              Helping students understand their strengths, explore
              opportunities and build careers they can feel proud of.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h3 className="footer-title">Explore</h3>
            <a className="footer-link" href="#home">Home</a>
            <a className="footer-link" href="#services">Services</a>
            <a className="footer-link" href="#careers">Careers</a>
            <a className="footer-link" href="about.html">About</a>
          </div>

          <div className="col-6 col-lg-2">
            <h3 className="footer-title">Support</h3>
            <a className="footer-link" href="session.html">Counselling</a>
            <a className="footer-link" href="form.html">Assessment</a>
            <a className="footer-link" href="cc.html">Career guide</a>
          </div>

          <div className="col-lg-3">
            <h3 className="footer-title">Contact</h3>

            <p>
              <i className="bi bi-envelope me-2"></i>
              hello@careerpath.com
            </p>

            <p>
              <i className="bi bi-telephone me-2"></i>
              +91 98765 43210
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} CareerPath. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <Services />
        <Process />
        <CareerAreas />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
