import React from "react";

export default function Contact() {

    return(
        <div className="bg-gradient-to-r from-blue-300 to-blue-50 text-center h-screen flex -my-16">
            <div className="m-auto">
                <h1 className="text-6xl font-medium animate-fade-in-down-1">Get In Touch</h1>
                <p className="text-xl py-6 px-10 animate-fade-in-down-2 max-w-3xl">
                    I'm currently looking for opportunities in the Greater Toronto Area, 
                    so please reach out if you are looking for an enthusiastic and creative developer!
                </p>
                <button onClick={() => window.location = 'mailto:jaiveer_@hotmail.com'} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Get In Touch
                </button>
            </div>
        </div>
    )
}