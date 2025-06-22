import React, { useState } from "react";
import { House, NotebookPen, Pencil } from "lucide-react";
import "../style/Note.css";

const initialNotes = [
  {
    title: "Card Title ⋆˚꩜｡",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat corporis maxime, mollitia optio repudiandae nihil, alias nam voluptatum eligendi aliquam culpa possimus nostrum quaerat facere earum dolor ratione eum distinctio officiis non enim, ducimus laudantium. At, quasi id? Reiciendis accusamus hic animi. Ab excepturi quam, molestias eius sunt ipsam. ",
  },
  {
    title: "Card Title ⋆˚✿˖°",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat corporis maxime, mollitia optio repudiandae nihil, alias nam voluptatum eligendi aliquam culpa possimus nostrum quaerat facere earum dolor ratione eum distinctio officiis non enim, ducimus laudantium. At, quasi id? Reiciendis accusamus hic animi. Ab excepturi quam, molestias eius sunt ipsam..",
  },
  {
    title: "Card Title ₊˚⊹ ᰔ",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat corporis maxime, mollitia optio repudiandae nihil, alias nam voluptatum eligendi aliquam culpa possimus nostrum quaerat facere earum dolor ratione eum distinctio officiis non enim, ducimus laudantium. At, quasi id? Reiciendis accusamus hic animi. Ab excepturi quam, molestias eius sunt ipsam.",
  },
];

const Note = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleEditing = (index) => {
    setEditingIndex(editingIndex === index ? null : index);
  };

  const handleChange = (index, field, value) => {
    const updatedNotes = [...notes];
    updatedNotes[index][field] = value;
    setNotes(updatedNotes);
  };

  return (
    <div className="app-container">
      <div className="header-banner">
        <div className="header-content">
          <h1>ʚ Welcome ɞ</h1>
          <p>Made for little moments ~</p>
        </div>
      </div>

      <div className="main-content">
        <div className="navigation-tabs">
          <a className="tab" href="/">
            <House color="#98b821" /> Home
          </a>
          <a className="tab active" href="/">
            <NotebookPen color="#98b821" /> Notes
          </a>
        </div>

        <div className="route-content">
          <div className="home-screen">
            <div className="profile-banner">
              <div className="profile-inner">
                <div className="profile-details">
                  <h1>Notepad ♫.ᐟ</h1>
                </div>
              </div>
            </div>

            <div className="note-section">
              {notes.map((note, index) => (
                <div className="card" key={index}>
                  {editingIndex === index ? (
                    <input
                      className="editable-title"
                      value={note.title}
                      onChange={(e) =>
                        handleChange(index, "title", e.target.value)
                      }
                    />
                  ) : (
                    <h3>{note.title}</h3>
                  )}

                  {editingIndex === index ? (
                    <textarea
                      value={note.content}
                      className="note-content"
                      onChange={(e) =>
                        handleChange(index, "content", e.target.value)
                      }
                      rows={5}
                    />
                  ) : (
                    <p>{note.content}</p>
                  )}

                  <div
                    className="icon-container"
                    onClick={() => toggleEditing(index)}
                  >
                    <Pencil color="black" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
