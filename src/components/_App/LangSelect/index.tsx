import { IconBrandHtml5, IconBrandReact, IconBrandCss3 } from '@tabler/icons';
import "./styles.css";

export default function LangSelect() {
    return (
        <div className="lang-select">
            <div className="tooltip flex items-center">
                <IconBrandHtml5 color="#545454" stroke={1.2} className="hover:stroke-third duration-100" />
                <div className="tip">HTML</div>
            </div>
            <div className="tooltip flex items-center">
                <IconBrandReact color="#545454" stroke={1.2} className="hover:stroke-third duration-100" />
                <div className="tip">REACT</div>
            </div>
            <div className="tooltip flex items-center">
                <IconBrandCss3 color="#545454" stroke={1.2} className="hover:stroke-third duration-100" />
                <div className="tip">CSS</div>
            </div>
        </div>
    )
}