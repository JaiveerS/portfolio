import React from "react";
import Project from "./Project";

export default function Projects() {
    return(
        <div className="bg-gradient-to-r from-blue-300 to-blue-50 text-center min-h-screen flex ">
            <div className="m-auto">
                <h1 className="text-6xl font-medium">Projects</h1>
                <div className="flex space-between flex-wrap justify-center p-10 max-w-screen-2xl">
                    <Project title="E-Commerce Website" link="http://140.238.147.51/"/>
                    <Project title="Smart Employee Management System" link="https://employee-managment-f5252.web.app/login"/>
                    <Project title="Blue Collar React App" link="http://140.238.155.208/"/>
                    <Project title="Portfolio" link="https://jaiveer.netlify.app/"/>
                </div>
            </div>
        </div>
    )

}