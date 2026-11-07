import './CharacterCount.css';

export default function CharacterCount({text}) {
  return (
    <div className="character-count" >
        <p>{text.length} characters</p>
    </div>
  )
}

