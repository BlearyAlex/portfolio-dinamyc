import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const Menus = [
        { name: "Home", icon: "home-outline", dis: "translate-x-0", path: "/" },
        {
            name: "Proyectos",
            icon: "briefcase-outline",
            dis: "translate-x-16",
            path: "/projects",
        },
        {
            name: "Sobre Mi",
            icon: "person-outline",
            dis: "translate-x-32",
            path: "/about",
        },
        {
            name: "Experiencia",
            icon: "business-outline",
            dis: "translate-x-48",
            path: "/experience",
        },
        {
            name: "Contacto",
            icon: "chatbubble-ellipses-outline",
            dis: "translate-x-64",
            path: "/contact",
        },
    ];

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialActive = parseInt(queryParams.get("activeTab"), 10) || 0;

    const [active, setActive] = useState(initialActive);

    useEffect(() => {
        const updatedUrl = new URL(window.location.href);
        updatedUrl.searchParams.set("activeTab", active.toString());
        window.history.replaceState({ path: updatedUrl.href }, "", updatedUrl.href);
    }, [active]);

    return (
        <nav className="bg-white max-h-[4.4rem] flex rounded-r-xl rounded-l-xl fixed bottom-0 w-full justify-center">
            <ul className="flex relative">
                <span
                    className={`bg-teal-400 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}
                >
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
                </span>
                {Menus.map((menu, i) => (
                    <li
                        key={i}
                        className="w-16"
                    >
                        <Link to={`${menu.path}?activeTab=${i}`}>
                            <a
                                className="flex flex-col text-center pt-6"
                                onClick={() => setActive(i)}
                            >
                                <span
                                    className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-white"
                                        }`}
                                >
                                    <ion-icon name={menu.icon}></ion-icon>
                                </span>
                                <span
                                    className={`  ${active === i
                                        ? "translate-y-4 duration-700 opacity-100"
                                        : "opacity-0 translate-y-10"
                                        }`}
                                >
                                    {menu.name}
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
