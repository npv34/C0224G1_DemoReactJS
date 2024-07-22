import './App.css';
import Header from "./components/Header/Header";
import {useState} from "react";
import UserList from "./components/Users/User-List/UserList";
import SideBar from "./components/SideBar/SideBar";
import Setting from "./components/Settings/Setting";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [darkMode, setDarkMode] = useState(false)
    const [pageShow, setPageShow] = useState("User manager")

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const handleShowPage = (titlePage) => {
        setPageShow(titlePage)
    }

  return (
      <>
          <div className={darkMode ? "container bg-dark" : "container"}>
              <Header/>
              <div className="row">
                  <div className="col-12 col-md-3">
                      <SideBar showPageMenu={handleShowPage}/>
                  </div>
                  <div className="col-12 col-md-9">
                      {pageShow === "User manager" && <UserList/>}
                      {pageShow === "Settings" && <Setting/>}
                  </div>
              </div>
          </div>
          <ToastContainer />
      </>
  )
}

export default App;
