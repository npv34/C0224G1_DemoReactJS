import SwitchButton from "../Common/SwitchButton/SwitchButton";
import {useEffect} from "react";

function Setting() {

    useEffect(() => {
        console.log("Component Setting didmounting")
    }, [])

    useEffect(() => {
        return () => {
            console.log("Component Setting will unmounting")
        }
    }, [])


    return (
        <>
            <h1>Setting Page</h1>
            Dark Mode: <SwitchButton/>
        </>
    )
}

export default Setting;