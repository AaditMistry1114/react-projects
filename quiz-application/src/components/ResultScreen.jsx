
import { CiTrophy } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import "./ResultScreen.css";

export default function ResultScreen({
    finalScore,
    questionsCount,
    onScreenChange
}) {
    const percentage = questionsCount > 0
        ? Math.round((finalScore / questionsCount) * 100)
        : 0;

    return (
        <section className="result-screen">
            <div className="result-container">
                <div className="result-header">
                    <CiTrophy className="result-header-logo" />
                    <h2>Quiz Completed!</h2>
                    <p>Great job! Here's how you performed.</p>
                </div>

                <div className="result-score-container">
                    <h3>{finalScore}/{questionsCount}</h3>
                    <p>Your Score</p>
                    <p>{percentage}%</p>
                </div>

                <button
                    className="play-again-btn"
                    onClick={() => onScreenChange("welcome")}
                >
                    Play Again <IoReload />
                </button>
            </div>
        </section>
    );
}
