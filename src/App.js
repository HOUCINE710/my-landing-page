import React, { useEffect, useState } from 'react';
import { Rocket, Shield, Zap, LogIn, UserPlus, X, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.feature-card');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Rocket size={24} /> CompanyName
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="auth-button" onClick={() => setShowLoginForm(true)}>
              <LogIn size={20} />
              <span>Login</span>
            </button>
            <button className="auth-button" onClick={() => setShowRegisterForm(true)}>
              <UserPlus size={20} />
              <span>Register</span>
            </button>
          </div>
        </nav>
      </header>

      {showLoginForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowLoginForm(false)}>
              <X size={24} />
            </button>
            <h2>Login</h2>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              <button type="submit" className="submit-button">Login</button>
            </form>
          </div>
        </div>
      )}

      {showRegisterForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowRegisterForm(false)}>
              <X size={24} />
            </button>
            <h2>Register</h2>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input type="email" id="register-email" required />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input type="password" id="register-password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" required />
              </div>
              <button type="submit" className="submit-button">Register</button>
            </form>
          </div>
        </div>
      )}

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Transform Your Digital Experience</h1>
              <p className="hero-description">
                Empower your business with cutting-edge solutions that drive growth
                and innovation. Join thousands of satisfied customers who trust us.
              </p>
              <a href="#contact" className="cta-button">Get Started</a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Digital Workspace"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="features-container">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Rocket />
                </div>
                <h3 className="feature-title">Fast Performance</h3>
                <p className="feature-description">
                  Lightning-fast solutions that keep your business running at peak efficiency.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Shield />
                </div>
                <h3 className="feature-title">Secure & Reliable</h3>
                <p className="feature-description">
                  Enterprise-grade security ensuring your data is always protected.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Zap />
                </div>
                <h3 className="feature-title">Easy Integration</h3>
                <p className="feature-description">
                  Seamlessly integrate with your existing tools and workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We're dedicated to providing innovative solutions for businesses worldwide.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@company.com</p>
            <p>Phone: (555) 123-4567</p>
            <div className="social-links">
              <a href="https://github.com/HOUCINE710" className="social-link"><Github size={20} /></a>
              <a href="https://github.com/HOUCINE710" className="social-link"><Twitter size={20} /></a>
              <a href="https://github.com/HOUCINE710" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CompanyName. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;