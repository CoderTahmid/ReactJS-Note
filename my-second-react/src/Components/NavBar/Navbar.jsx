import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" }
    ];

    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div onClick={() => setOpen(!open)} className="md:hidden">
                {
                    open === true ?
                        <IoCloseSharp className="text-2xl"></IoCloseSharp> :
                        <RiMenu2Line className="text-2xl"></RiMenu2Line>
                }
            </div>
            <ul className={`md:flex md:static absolute duration-1000 bg-yellow-200 px-6 shadow-lg ${open ? "top-16" : "-top-60"}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;