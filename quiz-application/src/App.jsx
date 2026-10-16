
import { useState } from "react";
import QuizScreen from "./components/QuizScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import ResultScreen from "./components/ResultScreen";
import questions from "./data/questions.js";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [finalScore, setFinalScore] = useState(0);
  const [quizAttempt, setQuizAttempt] = useState(0);

  function handleQuizScore(score) {
    setFinalScore(score);
    setScreen("result");
  }

  function handleStartQuiz() {
    setQuizAttempt(prev => prev + 1);
    setScreen("quiz");
  }

  return (
    <>
      {screen === "welcome" && (
        <WelcomeScreen
          onStartQuiz={handleStartQuiz}
          questionsCount={questions.length}
        />
      )}

      {screen === "quiz" && (
        <QuizScreen
          key={quizAttempt}
          questions={questions}
          onQuizComplete={handleQuizScore}
        />
      )}

      {screen === "result" && (
        <ResultScreen
          finalScore={finalScore}
          questionsCount={questions.length}
          onScreenChange={setScreen}
        />
      )}
    </>
  );
}
