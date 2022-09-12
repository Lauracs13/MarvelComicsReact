import { useState } from "react";
import { useGlobalContext } from "../context";
import axios from "axios";

export const Modal = () => {
  const { selectedComic, closeModal } = useGlobalContext();

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img
          src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`}
          alt={selectedComic.title}
          className="img modal-img"
        />
        <div className="modal-content">
          <button onClick={closeModal}>close</button>
          <h4>{selectedComic.title}</h4>
          <h5>Description:</h5>
          <p>{selectedComic.description}</p>

          {selectedComic.characters.items.length > 0 && <h5>Characters:</h5>}
          <div>
            {selectedComic.characters.items.map((item) => {
              return <span> - {item.name}</span>;
            })}
          </div>

          {selectedComic.variants.length > 0 && <h5>Variants:</h5>}
          <div>
            {selectedComic.variants.map((item) => {
              return <span> - {item.name}</span>;
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};
