import React from "react";
import "./TareaLista.css";
import TareaItem from "./TareaItem";

const TareasLista = ({ db, deleteData, setEditData }) => {
  return (
    <div className="tarea__lista">
      {db.map((item, i) => (
        <TareaItem
          db={item}
          key={i}
          deleteData={deleteData}
          setEditData={setEditData}
        />
      ))}
    </div>
  );
};

export default TareasLista;
