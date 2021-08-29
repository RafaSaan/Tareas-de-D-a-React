import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import "./TareaItem.css";

const TareaItem = ({ db, deleteData, setEditData }) => {
  const { titulo, tarea, id } = db;
  return (
    <div className="tarea__item">
      <div className="tarea__info">
        <h3 className="tarea__item__titulo">{titulo}</h3>
        <p className="tarea__parrafo">{tarea}</p>
      </div>
      <div className="tarea__acciones">
        <div className="tarea__import">Importante</div>
        <div className="">
          <AiIcons.AiOutlineEdit
            className="item-icon edit"
            onClick={() => setEditData(db)}
          />
          <BsIcons.BsTrash2
            className="item-icon delete"
            onClick={() => deleteData(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TareaItem;
