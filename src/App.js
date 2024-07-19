import './App.css';
import Header from "./components/Header/Header";
import {useState} from "react";
import UserList from "./components/Users/User-List/UserList";
import SideBar from "./components/SideBar/SideBar";


function App() {
    const [darkMode, setDarkMode] = useState(false)
    const [pageShow, setPageShow] = useState("User manager")

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

  return (
      <>
          <div className={darkMode ? "container bg-dark" : "container"}>
              <Header/>
              <div className="row">
                  <div className="col-12 col-md-3">
                      <SideBar/>
                  </div>
                  <div className="col-12 col-md-9">
                      {pageShow === "User manager" && <UserList/>}
                  </div>
              </div>

          </div>
      </>
  )
}

export default App;
