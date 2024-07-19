import {useState} from "react";

function Menu() {

    const [listMenu, setListMenu] = useState([
        {
            title: 'User manager',
            active: true,
        },
        {
            title: 'Post manager',
            active: false,
        },
        {
            title: 'Settings',
            active: false,
        },
        {
            title: 'My Account',
            active: false,
        }
    ])


    return (
        <>
            <div className="list-group mt-2">
                {listMenu.map(menu => (
                    <button type="button" className={menu.active ? "list-group-item-action list-group-item active" : "list-group-item-action list-group-item"}>{menu.title}</button>
                ))}
            </div>
        </>
    )
}

export default Menu;