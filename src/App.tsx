import { AiFillPrinter } from "react-icons/ai";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className="flex justify-center bg-gray-900 print:bg-white">
            <div className="relative w-11/12 max-w-screen-lg p-8 m-4 leading-5 bg-white rounded-sm shadow-lg md:scale-100 scale print:m-0 print:p-0 print:w-auto print:shadow-none">
                <button className='absolute p-2 text-xl text-gray-400 transition-all border rounded-full outline-none border-slate-400 top-6 right-6 hover:text-gray-800 hover:border-gray-800 print:hidden' onClick={() => { window.print() }}><AiFillPrinter /></button>
                <Header />
                {/* <About /> */}
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Achievements />
            </div>
        </div>
    );
}

export default App;
