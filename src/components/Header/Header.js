import Menu from "./Menu";
import InputSearch from "../Common/InputSearch/InputSearch";
import SwitchButton from "../Common/SwitchButton/SwitchButton";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <Menu/>
                        <SwitchButton/>
                       <InputSearch/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;