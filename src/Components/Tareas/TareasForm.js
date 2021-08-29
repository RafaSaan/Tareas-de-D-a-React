import { useState, useEffect } from "react";
import * as BiIcons from "react-icons/bi";
import "./TareasForm.css";

const initialDataForm = {
  titulo: "",
  tarea: "",
  id: null,
};
const TareasForm = ({ createData, updateData, editData, setEditData }) => {
  const [form, setForm] = useState(initialDataForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.titulo || !form.tarea) {
      alert("Ingresa los datos solicitados, por favor.");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = e => {
    setForm(initialDataForm);
    setEditData(null);
  };

  useEffect(() => {
    if (editData) {
      setForm(editData);
    } else {
      setForm(initialDataForm);
    }
  }, [editData]);

  return (
    <div className="tareas__form__contenedor">
      <h2 className="titulo-form">
        {editData ? "Editar Tarea" : "Agregar Tarea"}
      </h2>
      <form className="tareas__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          className="tareas__input"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Tarea"
          className="tareas__input"
          name="tarea"
          value={form.tarea}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <button className="tareas-btn">
          {" "}
          Agregar Tarea
          <BiIcons.BiPlus className="btn-plus" />
        </button>
      </form>
    </div>
  );
};

export default TareasForm;
