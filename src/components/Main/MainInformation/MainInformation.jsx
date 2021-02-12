import React from "react";
import s from "./MainInformation.module.css";

const MainInformation = () => {
  return (
    <div>
      <div>
        <img
          src="https://img2.akspic.ru/image/21076-stolica-gorod-otrazhenie-liniya_gorizonta-osveshhenie-1920x1080.jpg"
          width="1250px"
          height="700px"
          border="5"
          title="Фон"
        ></img>
      </div>
      <div className={s.mainContent}>
        <div>Аватарка</div>
      </div>
    </div>
  );
};

export default MainInformation;
