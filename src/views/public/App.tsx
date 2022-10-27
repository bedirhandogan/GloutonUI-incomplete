import Main from "components/_App/Main";
import Navbar from "components/_App/Navbar";
import Sidebar from "components/_App/Sidebar";
import LangSelect from "components/_App/LangSelect";
import ContextMenu from "components/ContextMenu";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import CodeBlock from "components/_App/CodeBlock";

export default function App() {
  const screen: number = window.screen.width;
  
  return (
    <div
      className={`app bg-circle-effect [&>#warning-information]:flex ${
        screen >= 1024
          ? "[&>#warning-information]:hidden"
          : "[&>#warning-information]:block"
      }`}
    >
      <div id="warning-information">
        <ExclamationTriangleIcon className="w-16 sm:w-24 text-[#ffffff42]" />
        <h2 className="text-fourth">
          You do not have enough screen size to view this page, please try again
          from the computer.
        </h2>
      </div>
      <Sidebar title="Components" width="w-64" sidebarType="components">
      </Sidebar>
      <div className="w-2/6 flex flex-col items-center">
        <Navbar />
        <Main />
      </div>
      <Sidebar title="Code" width="w-96" sidebarType="code">
        <LangSelect />
        <CodeBlock text={`<!--- Code HTML --->`} language="html" />
      </Sidebar>
      <ContextMenu />
    </div>
  );
}
