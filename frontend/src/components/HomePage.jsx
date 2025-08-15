// ===================================================================
// SECTION 1: IMPORTS
// ===================================================================
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import './HomePage.css';

// Import all necessary icons
import { 
  FaFacebook, FaInstagram, FaTwitter, 
  FaPaypal, FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaSpotify,
  FaArrowRight, FaUserGraduate, FaBuilding, FaRocket
} from 'react-icons/fa6';
// MODIFIED: Icons for removed sections are no longer needed

// ===================================================================
// SECTION 2: STATIC DATA
// ===================================================================
const backgroundImages = [ '/images/hero1.jpeg', '/images/hero2.jpeg', '/images/hero3.jpeg' ];
const testimonialsData = [
  { id: 't1', image: '/images/testimonial1.jpeg', name: 'Priya Sharma', job: 'Software Engineer', opinion: 'This platform was a game-changer. I found an internship that matched my exact skill set and it turned into a full-time job offer.' },
  { id: 't2', image: '/images/testimonial2.jpeg', name: 'Michael Chen', job: 'Founder of Innovate Inc.', opinion: 'As a startup founder, posting my idea here brought me not just visibility, but also a co-founder with the technical skills I was missing.' },
  { id: 't3', image: '/images/testimonial3.jpeg', name: 'Sofia Rossi', job: 'UI/UX Designer', opinion: 'The quality of job advertisements is top-notch. I found a role at a design-focused company that truly values creativity.' },
];
const companyLogos = [ <FaGoogle />, <FaApple />, <FaMicrosoft />, <FaAmazon />, <FaPaypal />, <FaSpotify /> ];
// MODIFIED: 'jobSeekerBenefits', 'recruiterBenefits', 'trendingTopics', 'learningChannels', and 'programmingLanguages' arrays have been deleted.

// ===================================================================
// SECTION 3: THE MAIN HOME PAGE COMPONENT
// ===================================================================
const HomePage = () => {
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location.hash === '#footer-contact') {
      const footer = document.getElementById('footer-contact');
      if (footer) {
        setTimeout(() => footer.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <div className="home-page-wrapper">

      {/* --- HERO SECTION --- */}
      <section className="home-section hero-section">
        <div className="hero-background">
          {backgroundImages.map((image, index) => (
            <img key={index} src={image} alt="Platform background" className={index === currentImageIndex ? 'active' : ''} />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="home-content-container">
          <div className="hero-content animated-content">
            <h1>
              Connecting <span className="highlight-text">Ambition</span> with <span className="highlight-text">Opportunity</span>
            </h1>
            <p>
              Welcome to the NexusLink, the premier ecosystem designed to bridge the gap between emerging talent and innovative companies. Our mission is to empower the next generation of professionals by providing a centralized hub to connect, collaborate, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* --- "ARE YOU?" SECTION --- */}
      <section className="home-section persona-section">
        <div className="home-content-container">
          <h2 className="persona-section-title">Are you...</h2>
          <div className="persona-cards-grid">
            <Link to="/talent" className="persona-card">
              <div className="persona-card-icon"><FaUserGraduate /></div>
              <div className="persona-card-content">
                <h3>A Student or Intern?</h3>
                <p>Explore candidate profiles, showcase your skills, and find your next opportunity.</p>
              </div>
              <div className="persona-card-arrow"><FaArrowRight /></div>
            </Link>
            <Link to="/talentD" className="persona-card">
              <div className="persona-card-icon"><FaBuilding /></div>
              <div className="persona-card-content">
                <h3>A Company?</h3>
                <p>Discover top talent, post job openings, and build your dream team.</p>
              </div>
              <div className="persona-card-arrow"><FaArrowRight /></div>
            </Link>
            <Link to="/startup" className="persona-card">
              <div className="persona-card-icon"><FaRocket /></div>
              <div className="persona-card-content">
                <h3>A Startup or Innovator?</h3>
                <p>Share your vision, find co-founders, and connect with the community.</p>
              </div>
              <div className="persona-card-arrow"><FaArrowRight /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- NEW: ABOUT US SECTION --- */}
      <section className="home-section about-us-section">
        <div className="home-content-container">
          <h2 className="about-section-title">Bridging the Gap Between Talent and Innovation</h2>
          <p className="about-section-text">
            NexusLink is more than just a platform; it's an ecosystem. Our core mission is to empower the next generation of professionals by creating direct pathways to the most exciting opportunities in the tech industry. We provide a centralized hub where students can showcase their skills, startups can share their vision, and established companies can discover the talent that will shape their future.
          </p>
        </div>
      </section>

      {/* --- STATS AND LOGOS SECTION --- */}
      <section className="home-section stats-section-wrapper">
        <div className="home-content-container">
          <div className="large-stats-grid">
            <div className="stat-item"><div className="stat-number">8M+</div><div className="stat-title">Matches Made</div></div>
            <div className="stat-item"><div className="stat-number">150K+</div><div className="stat-title">Tech Jobs</div></div>
            <div className="stat-item"><div className="stat-number">10M+</div><div className="stat-title">Candidates</div></div>
          </div>
          <div className="stats-divider"></div>
          <div className="logo-slider-container">
            <p className="slider-title">Trusted by leading companies worldwide</p>
            <div className="logo-slider">
              <div className="logo-track">
                {companyLogos.map((Logo, index) => <div className="slider-logo" key={index}>{Logo}</div>)}
                {companyLogos.map((Logo, index) => <div className="slider-logo" key={index + companyLogos.length}>{Logo}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="home-section testimonials-section">
        <div className="home-content-container">
          <h2>Voices of Our Community</h2>
          <div className="testimonials-grid">
            {testimonialsData.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* --- REMOVED SECTIONS --- */}
      {/* The Learning Hub, Programming Languages, and Split Sections have been deleted. */}

      {/* --- FOOTER / CONTACT SECTION --- */}
      <footer id="footer-contact" className="home-section footer-section">
        <div className="home-content-container footer-grid">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Community Portal is a dedicated platform fostering growth and innovation by connecting students with companies and ideas.</p>
          </div>
          <div className="footer-col">
            <h4>Head Office</h4>
            <p>123 Innovation Drive,<br />Tech Park, Colombo,<br />Sri Lanka, 40850</p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <p>Join our community for the latest updates.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Community Portal. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;