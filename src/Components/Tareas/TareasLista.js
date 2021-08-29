import React from "react";
import "./TareaLista.css";
import TareaItem from "./TareaItem";
import Mensaje from "./Mensaje";

const TareasLista = ({ db, deleteData, setEditData }) => {
  return (
    <div className="tarea__lista">
      {db.length === 0 ? (
        <Mensaje />
      ) : (
        db.map((item, i) => (
          <TareaItem
            db={item}
            key={i}
            deleteData={deleteData}
            setEditData={setEditData}
          />
        ))
      )}
    </div>
  );
};

export default TareasLista;
