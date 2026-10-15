import './WelcomeScreen.css';
import { FcTodoList } from "react-icons/fc";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";



export default function WelcomeScreen( { onScreenChange } ) {
  return (
    <section className='welcome-container'>
        <div className="welcome-card">
            <FaReact  className='welcome-logo' />
            <h2>React Quiz</h2>
            <p className='welcome-description' >Test your React knowledge with this interactive quiz.</p>
            <p className='question-count' > <FcTodoList />  5 Questions </p>
            <button onClick={() => onScreenChange("quiz")} >Start Quiz <FaLongArrowAltRight /> </button>
        </div> 
    </section>
  )
}

