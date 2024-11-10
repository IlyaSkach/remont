import React from "react";
import "./Services.scss";

function Services() {
  return (
    <section className="servicessection">
      <div className="services">
        <div className="services__item">Услуги по ремонту</div>
        <div className="services__item">Виды работ</div>
        <div className="services__item">Дизайн интерьера</div>
        <div className="services__item">Ремонт помещений</div>
      </div>
      <button className="services__button">
        {/* <svg
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
        </svg> */}
      </button>{" "}
      {/* Круглая кнопка */}
    </section>
  );
}

export default Services;
