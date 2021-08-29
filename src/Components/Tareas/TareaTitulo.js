import React from "react";
import "./TareaTitulo.css";
import * as BiIcons from "react-icons/bi";
const TareaTitulo = () => {
  return (
    <div className="tareas__titulo">
      <h1>
        {" "}
        <BiIcons.BiCalendarHeart className="titulo-icon" /> Tareas del Día
      </h1>
    </div>
  );
};

export default TareaTitulo;
