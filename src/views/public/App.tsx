import Main from "components/Layout/Main";
import Navbar from "components/Layout/Navbar";
import Sidebar from "components/Layout/Sidebar";

export default function App() {
    return (
        <div className={'bg-hideout-effect bg-primary flex flex-row justify-between w-full h-screen p-3'}>
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