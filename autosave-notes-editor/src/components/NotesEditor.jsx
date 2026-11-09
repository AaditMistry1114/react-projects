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

    // saves data to localstorage
    useEffect(() => {

        const timer = setTimeout(() => {
          localStorage.setItem("notes", text);
        }, 1000);
      
      return () => {
        clearTimeout(timer);
      }

    }, [text]);

  return (
    <>
    <textarea value={text}  onChange={(e) => setText(e.currentTarget.value)} className='notes-input' ></textarea>

    <CharacterCount text={text} />
    </>
    
  )
}
