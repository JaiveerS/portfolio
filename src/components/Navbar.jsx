import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {

    return(
        <nav className="bg-yellow-300 sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <h1 className="px-2 text-5xl">
                    <Link to={""}>JS</Link>
                </h1>
                <ul className="flex">
                    <li className="px-2 text-lg"><Link to={""}>Home</Link></li>
                    <li className="px-2 text-lg"><Link to={"projects"}>Projects</Link></li>
                    <li className="px-2 text-lg"><Link to={"resume"}>Resume</Link></li>
                    <li className="px-2 text-lg"><Link to={"contact"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
