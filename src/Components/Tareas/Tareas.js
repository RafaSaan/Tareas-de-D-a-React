import React, { useEffect, useState } from "react";
import "./Tareas.css";
import TareasForm from "./TareasForm";
import TareasLista from "./TareasLista";
import TareaTitulo from "./TareaTitulo";

const dB = [];

const Tareas = () => {
  const [bd, setBd] = useState(dB);
  const [editData, setEditData] = useState(null);

  const createData = data => {
    data.id = Date.now();
    console.log(data);
    setBd([...bd, data]);
  };
  const updateData = data => {
    let newData = bd.map(el => (el.id === data.id ? data : el));
    setBd(newData);
  };
  const deleteData = id => {
    const isDelete = window.confirm("¿Estas seguro de eliminar la tarea?");
    if (isDelete) {
      let newDataFilt = bd.filter(el => el.id !== id);
      setBd(newDataFilt);
    } else {
      return;
    }
  };

  useEffect(() => {
    let dataStore = localStorage.getItem("tareas");
    if (dataStore !== null) {
      setBd(JSON.parse(dataStore));
    } else {
      return [];
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(bd));
  }, [bd]);
  return (
    <main className="tareas__contenedor">
      <TareaTitulo />
      <TareasForm
        createData={createData}
        updateData={updateData}
        editData={editData}
        setEditData={setEditData}
      />

      <TareasLista db={bd} deleteData={deleteData} setEditData={setEditData} />
    </main>
  );
};

export default Tareas;
