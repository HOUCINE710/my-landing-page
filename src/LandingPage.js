import React, { useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 300);
    });
  }, []);

  return (
    <div className="landing-container">
      {/* شريط التنقل */}
      <nav className="navbar">
        <div className="logo">تبرع</div>
        <ul className="nav-links">
          <li><a href="#about">من نحن</a></li>
          <li><a href="#services">الخدمات</a></li>
          <li><a href="#contact">اتصل بنا</a></li>
        </ul>
        <a href="/register" className="cta-button">ابدأ الآن</a>
      </nav>

      {/* المحتوى الرئيسي */}
      <header className="hero-section">
        <h1 className="fade-in">تبرع الآن وساهم في صنع الفرق</h1>
        <p className="fade-in">نحن نساعدك في الوصول إلى المحتاجين بسهولة</p>
        <a href="/register" className="cta-button fade-in">انضم إلينا</a>
      </header>

      {/* قسم عن الموقع */}
      <section id="about" className="fade-in">
        <h2>من نحن</h2>
        <p>تبرع هو منصة تجمع المتبرعين بالمحتاجين لمساعدتهم بسرعة وسهولة.</p>
      </section>

      {/* قسم الخدمات */}
      <section id="services" className="fade-in">
        <h2>الخدمات التي نقدمها</h2>
        <div className="service-box">
          <h3>التبرع السريع</h3>
          <p>يمكنك التبرع بملابس، طعام، وأغراض أخرى بسهولة.</p>
        </div>
        <div className="service-box">
          <h3>تحديد المواقع</h3>
          <p>استخدم خريطة الموقع لرؤية أقرب التبرعات إليك.</p>
        </div>
      </section>

      {/* قسم التواصل */}
      <section id="contact" className="fade-in">
        <h2>اتصل بنا</h2>
        <p>للاستفسارات، يمكنك مراسلتنا عبر البريد الإلكتروني: <strong>contact@tabar3.com</strong></p>
      </section>

      {/* الفوتر */}
      <footer className="fade-in">
        <p>جميع الحقوق محفوظة © 2025</p>
      </footer>
    </div>
  );
};

export default LandingPage;
