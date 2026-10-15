import './QuizScreen.css'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function QuizScreen() {
  return (
    <section className='quiz-container' >
        <div className='quiz-card' >
            <div className='quiz-header'>
                <h2>React Quiz</h2>
                <p>Question 1 of 5</p>
            </div>
            <div className="progress-container">
                <div className="progress-bar"></div>
            </div>

            <div className="question-content">
                <p className="question-label">QUESTION 1</p>
                <h3>What is React?</h3>
            </div>
            
            <div className="answer-options">
                <button className="answer-option">Programming Language</button>
                <button className="answer-option">JS Library</button>
                <button className="answer-option">Tool</button>
                <button className="answer-option">Application</button>
            </div>
            <button className='next-button' >Next <FaLongArrowAltRight /> </button>
        </div>
    </section>
  )
}
