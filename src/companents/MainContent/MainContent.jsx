import React, { useState } from "react";
import "./MainContent.scss";
import Header from "../Header/Header";

function MainContent() {
  const [background, setBackground] = useState("");
  const [headerText, setHeaderText] = useState("Ремонт <span>и</span> дизайн");
  const [hideServicesBackground, setHideServicesBackground] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [columnText, setColumnText] = useState({ title: "", description: "" });

  const handleButtonClick = (backgroundClass, header, columnText, button) => {
    setBackground(backgroundClass);
    setHeaderText(header);
    setHideServicesBackground(true);
    setColumnText(columnText);
    setActiveButton(button);
  };

  const handleResetBackgroundClick = () => {
    setBackground("");
    setHeaderText("Ремонт <span>и</span> дизайн"); // Сброс headerText на исходное значение
    setHideServicesBackground(false);
    setActiveButton(null);
  };

  return (
    <section className={`main-content ${background}`}>
      <div
        className={`main-content-wrapper ${activeButton ? "text-white" : ""}`}
      >
        <Header />
        <h1
          dangerouslySetInnerHTML={{ __html: headerText }}
          className={`title ${activeButton ? "text-white" : ""}`}
        ></h1>
        <p className={`desc ${activeButton ? "text-white" : ""}`}>
          в Москве и Московской области
        </p>
        <button
          className={`main-content__button ${activeButton ? "text-white" : ""}`}
        >
          Оставить заявку
        </button>
      </div>

      {activeButton && (
        <div className={`color-column ${activeButton}`}>
          <h2 className="column-title">{columnText.title}</h2>
          <p className="column-description">{columnText.description}</p>
          <button className="back-button" onClick={handleResetBackgroundClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4090_64)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.62439 8.75V7.25L8.62439 7.25L8.62439 1.74934L15.6251 8.75L0.62439 8.75Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4090_64">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.625 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      )}

      <div
        className={`servicessection ${
          hideServicesBackground ? "no-background" : ""
        }`}
      >
        <div className="services">
          <div
            className="services__item"
            onClick={() =>
              handleButtonClick(
                "repair-services-background",
                "Услуги по ремонту",
                {
                  title: "Услуги по ремонту",
                  description:
                    "С другой стороны реализация намеченных плановых заданий требуют от нас анализа.",
                },
                "repair"
              )
            }
          >
            Услуги по ремонту
          </div>
          <div
            className="services__item"
            onClick={() =>
              handleButtonClick(
                "work-types-background",
                "Виды работ",
                {
                  title: "Виды работ",
                  description:
                    "С другой стороны реализация намеченных плановых заданий требуют от нас анализа.",
                },
                "work"
              )
            }
          >
            Виды работ
          </div>
          <div
            className="services__item"
            onClick={() =>
              handleButtonClick(
                "interior-design-background",
                "Дизайн интерьера",
                {
                  title: "Дизайн интерьера",
                  description:
                    "С другой стороны реализация намеченных плановых заданий требуют от нас анализа.",
                },
                "design"
              )
            }
          >
            Дизайн интерьера
          </div>
          <div
            className="services__item"
            onClick={() =>
              handleButtonClick(
                "room-repair-background",
                "Ремонт помещений",
                {
                  title: "Ремонт помещений",
                  description:
                    "С другой стороны реализация намеченных плановых заданий требуют от нас анализа.",
                },
                "room"
              )
            }
          >
            Ремонт помещений
          </div>
        </div>
        <button
          className="services__button"
          onClick={handleResetBackgroundClick}
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4090_39)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.25 0H8.75V8H14.2507L7.25 15.0007V0Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4090_39">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default MainContent;
