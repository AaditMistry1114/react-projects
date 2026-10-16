
import './QuizScreen.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from 'react';

export default function QuizScreen({ questions, onQuizComplete }) {
    // Manages the current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Stores the currently selected option
    const [selectedOption, setSelectedOption] = useState(null);

    // Stores answers for all questions
    const [answer, setAnswer] = useState([]);

    // Gets the current question
    const currentQuestion = questions[currentQuestionIndex];

    // score

    const answerScore = questions.filter((question, index) => answer[index] === question.correctAnswer).length;


    function handleNextQuestion() {
        setAnswer(prevAnswer => {
            const updatedAnswer = [...prevAnswer];
            updatedAnswer[currentQuestionIndex] = selectedOption;
            return updatedAnswer;
        });

        setSelectedOption(null);

        if (currentQuestionIndex === questions.length - 1) {
            onQuizComplete(answerScore);
            return;
        }

        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }

    return (
        <section className="quiz-container">
            <div className="quiz-card">
                <div className="quiz-header">
                    <h2>React Quiz</h2>
                    <p>
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </p>
                </div>

                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{
                            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
                        }}
                    />
                </div>

                <div className="question-content">
                    <p className="question-label">
                        QUESTION {currentQuestionIndex + 1}
                    </p>
                    <h3>{currentQuestion.question}</h3>
                </div>

                <div className="answer-options">
                    {currentQuestion.options.map(option => (
                        <button
                            key={option}
                            className={`answer-option ${option === selectedOption ? "selected-option" : ""
                                }`}
                            onClick={() => setSelectedOption(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <button
                    className="next-button"
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null}
                >
                    Next <FaLongArrowAltRight />
                </button>
            </div>
        </section>
    );
}
