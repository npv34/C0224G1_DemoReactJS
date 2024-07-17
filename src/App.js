import './App.css';
import Header from "./components/Header/Header";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

  return (
      <>
          <div className={darkMode ? "container bg-dark" : "container"}>
              <Header/>
              <button onClick={handleToggleDarkMode}>Light</button>
              <button onClick={handleToggleDarkMode}>Dark</button>
              <h2>Xin chao</h2>
              <h2>Xin chao</h2>
              <h2>Xin chao</h2>
              <h2>Xin chao</h2>
              <h2>Xin chao</h2>
              <h2>Xin chao</h2>
          </div>
      </>
  )
}

export default App;
