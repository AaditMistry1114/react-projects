import CharacterCount from './CharacterCount';
import './NotesEditor.css'

import {useState, useEffect} from 'react'

export default function NotesEditor() {

    const[text,setText] = useState("");

    // localStorage.setItem("notes", "this is autosave notes app");

    // retrieve data from localstorage
    useEffect(() => {

      const retrievedData = localStorage.getItem("notes"); 

      setText(retrievedData ? retrievedData : "");

    }, []);

  return (
    <>
    <textarea value={text}  onChange={(e) => setText(e.currentTarget.value)} className='notes-input' ></textarea>

    <CharacterCount text={text} />
    </>
    
  )
}
