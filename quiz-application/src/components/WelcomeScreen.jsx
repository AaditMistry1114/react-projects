import './WelcomeScreen.css';
import { FcTodoList } from "react-icons/fc";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";



export default function WelcomeScreen( { onScreenChange,onStartQuiz, questionsCount } ) {
  return (
    <section className='welcome-container'>
        <div className="welcome-card">
            <FaReact  className='welcome-logo' />
            <h2>React Quiz</h2>
            <p className='welcome-description' >Test your React knowledge with this interactive quiz.</p>
            <p className='question-count' > <FcTodoList />  {questionsCount} Questions </p>
            <button onClick={onStartQuiz} >Start Quiz <FaLongArrowAltRight /> </button>
        </div> 
    </section>
  )
} 

