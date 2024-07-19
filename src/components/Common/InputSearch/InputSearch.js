import {useState} from "react";

function InputSearch(props) {

    const handleChange = (e) => {
        props.search(e.target.value)
    }

    return (
        <>

                <input onKeyUp={handleChange} className="form-control me-2" type="search" placeholder="Search"
                       aria-label="Search"/>

        </>

    )
}

export default InputSearch;