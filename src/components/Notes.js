import React from "react";
import NotesItem from "./Notes-item";

const Notes = ({ notes, deleteItem }) => {
  return (
    <div>
      {notes.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <div className="Notes">
            <span className="delete" onClick={() => deleteItem(id)}>
              &times;
            </span>
            <NotesItem items={itemProps} />
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
