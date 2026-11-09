import CharacterCount from './CharacterCount';
import SaveStatus from './SaveStatus';
import './NotesEditor.css';
import { useState, useEffect } from 'react';

export default function NotesEditor() {

  const [text, setText] = useState("");

  // for status state
  const [status, setStatus] = useState("saved");

  // retrieve data from localstorage
  useEffect(() => {
    const retrievedData = localStorage.getItem("notes");
    setText(retrievedData ? retrievedData : "");
  }, []);

  // saves data to localstorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("notes", text);
      setStatus("saved");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <>
      <div className="editor-header">
        <h3>Your Note</h3>
      </div>

      <div className="editor-wrapper">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
            setStatus("saving");
          }}
          className="notes-input"
        />

        <SaveStatus status={status} />
      </div>

      <CharacterCount text={text} />
    </>
  );
}
