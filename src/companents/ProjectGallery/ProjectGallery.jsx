// ProjectGallery.jsx
import React from "react";
import "./ProjectGallery.scss";

// Пример путей к изображениям (замените на свои изображения)
import image1 from "../../assets/img/17.png";
import image2 from "../../assets/img/16.png";
import image3 from "../../assets/img/15.png";
import image4 from "../../assets/img/14.png";
import image5 from "../../assets/img/13.png";
import image6 from "../../assets/img/11.png";
import image7 from "../../assets/img/10.png";
import image8 from "../../assets/img/12.png";

const GalleryComponent = () => {
  const items = [
    { id: 1, img: image1, text: "Новостройка" },
    { id: 2, img: image2, text: "Вторичка" },
    { id: 3, img: image3, text: "Новостройка" },
    { id: 4, img: image4, text: "Вторичка" },
    { id: 5, img: image5, text: "Вторичка" },
    { id: 6, img: image6, text: "Вторичка" },
    { id: 7, img: image7, text: "Новостройка" },
    { id: 8, img: image8, text: "Новостройка" },
  ];

  return (
    <>
      <section className="container">
        <div className="gallery__title">
          Примеры <span className="stroke">выполненных</span> работ
        </div>
        <div className="gallery">
          {items.map((item) => (
            <div
              key={item.id}
              className={`gallery__item gallery__item--${item.id}`}
            >
              <img src={item.img} alt={`Gallery item ${item.id}`} />
              <div className="gallery__overlay">
                <span className="gallery__text">{item.text}</span>
              </div>
              <div className="gallery__over">
               <div>
                <p className="gallery__over-title">Сроки</p>
                <p className="gallery__over-dis">4-5 дней</p>
               </div>
               <div>
                <p className="gallery__over-title">Стоимость</p>
                <p className="gallery__over-dis">Нет данных</p>
               </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="main-content__button-gallery">
            Все проекты
          </button>
        </div>
      </section>
    </>
  );
};

export default GalleryComponent;
