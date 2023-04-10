import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {

    return(
        <nav className=" bg-gradient-to-r from-blue-300 to-blue-50 sticky top-0 z-50 flex flex-wrap items-center px-2 py-4">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
                {/* <h1 className="px-2 text-5xl">
                    <Link to={""}>jaiveer</Link>
                </h1> */}
                <ul className="flex">
                    <li className="px-2 text-2xl hover:font-medium hover:underline"><Link to={""}>Home</Link></li>
                    <li className="px-2 text-2xl hover:font-medium hover:underline"><Link to={"projects"}>Projects</Link></li>
                    <li className="px-2 text-2xl hover:font-medium hover:underline"><Link to={"resume"}>Resume</Link></li>
                    <li className="px-2 text-2xl hover:font-medium hover:underline"><Link to={"contact"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
