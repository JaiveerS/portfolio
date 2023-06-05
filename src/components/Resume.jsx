import ResumeContent from "./ResumeContent";


export default function Resume() {
    return(
        <div className="bg-gradient-to-r from-blue-300 to-blue-50 min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
            <div className="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
                <ResumeContent />
            </div>
        </div>
    )

}