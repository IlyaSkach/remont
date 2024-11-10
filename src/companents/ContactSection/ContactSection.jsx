import React from "react";
import "./ContactSection.scss";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__info">
        <h2>Связаться с нами</h2>
        <div className="contact-section__details">
          <div className="contact-section__address">
            <p>Офис</p>
            <p>Москва, ул. Уличная, д. 1, оф. 1</p>
            <p>E-mail: company@company.ru</p>
          </div>
          <div className="contact-section__hours">
            <p>Режим работы</p>
            <p>Пн-Пт: 10:00 — 19:00</p>
            <p>Сб-Вс: 10:00 — 15:00</p>
            <p>Телефон: 8 (800) 900-00-00</p>
          </div>
        </div>
      </div>
      <form className="contact-section__form">
        <h3>Остались вопросы?</h3>
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Телефон/E-mail" />
        <textarea placeholder="Ваше сообщение"></textarea>
        <button type="submit">Получить консультацию</button>
      </form>
    </section>
  );
}

export default ContactSection;
