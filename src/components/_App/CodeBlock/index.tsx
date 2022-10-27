import { CodeBlock as ReactCodeBlock, dracula } from "react-code-blocks";
import { IconClipboard } from "@tabler/icons";
import "./styles.css";

interface CodeBlockProps {
  text: string;
  language: string;
}

export default function CodeBlock({ text, language }: CodeBlockProps) {
  return (
    <div className="code-block relative">
      <div className="tooltip absolute top-3 right-3">
        <IconClipboard
          color="#545454"
          stroke={1.2}
          className="hover:stroke-third duration-100"
        />
        <div className="tip">Copy</div>
      </div>
      <ReactCodeBlock text={text} language={language} theme={dracula} />
    </div>
  );
}
