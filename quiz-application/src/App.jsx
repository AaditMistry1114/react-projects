import { useState } from "react"
import QuizScreen from "./components/QuizScreen"
import WelcomeScreen from "./components/WelcomeScreen"


export default function App() {

  // for managing screens
  const[screen,setScreen] = useState("welcome");

  return (
    <>
      { screen === "welcome" ? <WelcomeScreen onScreenChange={setScreen}  /> : <QuizScreen /> }
    </>
  )
}
