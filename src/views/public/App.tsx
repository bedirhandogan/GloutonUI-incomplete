import Main from "components/_App/Main";
import Navbar from "components/_App/Navbar";
import Sidebar from "components/_App/Sidebar";
import "./styles.css";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { CopyBlock, dracula } from "react-code-blocks";

export default function App() {
  const screen = window.screen.width;

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
        {/* <div className="copy-block">
          <CopyBlock
            text={code}
            language={"css"}
            theme={dracula}
            codeBlock
          />
        </div> */}
      </Sidebar>
    </div>
  );
}
