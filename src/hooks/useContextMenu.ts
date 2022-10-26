import { useEffect, useState } from "react";

const useContextMenu = () => {
    const [x, setX] = useState<String>('0');
    const [y, setY] = useState<String>('0');
    const [showContextMenu, setShowContextMenu] = useState<Boolean>(false);

    useEffect(() => {
        const clickHandler = () => {
            setShowContextMenu(false);
        }

        const contextMenuHandler = (event: MouseEvent) => {
            if (event) {
                event.preventDefault();
                setX(`${event.pageX}px`);
                setY(`${event.pageY}px`);
                setShowContextMenu(true);
            }
        }

        //mount
        document.addEventListener('click', clickHandler);
        document.addEventListener('contextmenu', contextMenuHandler);
        //unmount
        return () => {
            // document.removeEventListener('click', clickHandler);
            document.removeEventListener('contextmenu', contextMenuHandler);
        }
    }, []);

    return { x, y, showContextMenu };
}

export default useContextMenu;