import React, {useState} from "react";
import Note from "../note";

function CreateArea(props) {
  const [note,setNote] = useState(new Note("",""));

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <button type="button" onClick={() => {
          const addNotes = props.updateNotesList;
          addNotes(note);
          setNote(new Note("",""));
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
