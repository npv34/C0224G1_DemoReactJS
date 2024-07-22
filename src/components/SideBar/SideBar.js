import {useState} from "react";


function SideBar(props) {

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
    ]);

    const handleClickMenu = (index) => {
        listMenu.forEach(item => item.active = false);
        listMenu[index].active = true;
        // component re-render
        props.showPageMenu(listMenu[index].title)
        setListMenu([...listMenu]);

    }


    return (
        <>
            <div className="list-group mt-2">
                {listMenu.map((menu, index) => (
                    <button type="button" onClick={() => handleClickMenu(index)} className={menu.active ? "list-group-item-action list-group-item active" : "list-group-item-action list-group-item"}>{menu.title}</button>
                ))}
            </div>
        </>
    )
}

export default SideBar;