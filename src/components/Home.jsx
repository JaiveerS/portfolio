import React from "react";

export default function Home() {
    return(
        <div>
            <div className="bg-yellow-300 text-center min-h-screen flex -my-16">
                <div className="m-auto">
                    <h3 className="text-4xl animate-fade-in-down-1">Hi there! I'm</h3>
                    <h1 className="text-8xl py-1 animate-fade-in-down-2">Jaiveer Singh</h1>
                    <h2 className="text-4xl py-2 animate-fade-in-down-3"> I'm a Software Engineer</h2>
                    <p className="py-2 animate-fade-in-down-4"> This website was created using React + TailwindCSS + Vite</p>
                </div>
            </div>
        </div>
    )
}