import CharacterCount from './CharacterCount';
import './NotesEditor.css'

import {useState} from 'react'

export default function NotesEditor() {

    const[text,setText] = useState("");
  return (
    <>
    <textarea value={text}  onChange={(e) => setText(e.currentTarget.value)} className='notes-input' ></textarea>

    <CharacterCount text={text} />
    </>
    
  )
}
