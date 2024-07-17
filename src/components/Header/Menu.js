import {useState} from "react";

function Menu() {
    const [listMenu, setListMenu] = useState([
        {
            title: 'Home',
            link: '/',
            active: true,
        },
        {
            title: 'About',
            link: '/about',
            active: false,
        },
        {
            title: 'Contact',
            link: '/contact',
            active: false,
        },
    ]);

    const handleClickMenu = (index) => {
        listMenu.forEach(menu => {
            menu.active = false;
        });
        listMenu[index].active = true;
        // tao ra 1 mang moi co gia tri nhu mang listMenu
        const newMenu = [...listMenu]
        // cho component rendered
        setListMenu(newMenu)
    }


    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { listMenu.map((menu, index) => (
                <li key={index} className="nav-item">
                    <a onClick={() => handleClickMenu(index)} className={menu.active ? "nav-link active bg-success": "nav-link"} aria-current="page">{menu.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default Menu;