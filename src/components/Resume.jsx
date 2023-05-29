import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import markdownPath from "../resume.md";
import remarkGfm from 'remark-gfm'


export default function Resume() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(markdownPath)
          .then(response => response.text())
          .then(text => setMarkdown(text));
      }, []);

    return(
        <div className="bg-gradient-to-r from-blue-300 to-blue-50 text-center min-h-screen flex">
            <div className="m-auto">
                <h1 className="text-6xl font-medium py-4">Resume</h1>
                <div className="text-left max-w-2xl bg-white py-4 px-4 rounded-lg">
                    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
                </div>
            </div>
        </div>
    )

}