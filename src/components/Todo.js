import { useState } from "react";
import Modal from "./Modal";
import Backdrops from "./Backdrops";

function Todos(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHendler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHendler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal /> : null}
      {modalIsOpen ? <Backdrops onClick={closeModalHandler} /> : null}
    </div>
  );
}

export default Todos;
