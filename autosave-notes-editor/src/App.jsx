import Header from "./components/Header";
import NotesEditor from "./components/NotesEditor";
import './App.css'

export default function App() {
  return (
    <>
        <Header />

        <main className="app-container">
          <NotesEditor />
        </main>

    </>
  )
}
