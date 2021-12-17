import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note,index) => index !== noteId);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea updateNotesList={addNotes} />
      {notes.map((note,index) => {
        return (
          <Note 
            key={index} 
            id={index} 
            title={note.title} 
            content={note.content} 
            deleteNote={deleteNote}  
            />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
