import React from "react";

export default function Project(props) {
    return(
        <div className="flex flex-col h-48 w-56 border-black border-4 m-2">
            <a className="flex h-48 w-56 px-4 items-center justify-center hover:font-bold" href={props.link}>{props.title}</a>
            <div className="">
                <a className="border-black border-2 bg-green-300 px-2 py-2 cursor-pointer hover:font-bold" href={props.link}>Demo</a>
                <a className="border-black border-2 bg-red-300 px-2 py-2 cursor-pointer hover:font-bold" href={props.link}>Source Code</a>
            </div>
        </div>
    )

}