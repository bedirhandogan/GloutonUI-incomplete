import Main from "components/Layout/Main";
import Navbar from "components/Layout/Navbar";
import Sidebar from "components/Layout/Sidebar";
import './styles.css'
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function App() {
    const screen = window.screen.width;
    return (
        <div className={`app bg-hideout-effect [&>#warning-information]:flex ${screen >= 1024 ? '[&>#warning-information]:hidden' : '[&>#warning-information]:block'}`}>
            <div id="warning-information">
                <ExclamationTriangleIcon className="w-16 sm:w-24 text-[#ffffff42]" />
                <h2 className="text-fourth">
                    You do not have enough screen size to view this page, please try again from the computer.
                </h2>
            </div>
            <Sidebar title="Components" homeButton={true}>
            </Sidebar>
            <div className="w-2/6 flex flex-col items-center">
                <Navbar />
                <Main />
            </div>
            <Sidebar title="" homeButton={false}>
            </Sidebar>
        </div>
    )
}