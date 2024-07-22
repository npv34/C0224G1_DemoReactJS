import "./SwitchButton.css";
function SwitchButton() {
    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox
                    input</label>
            </div>
        </>
    )
}

export default SwitchButton;