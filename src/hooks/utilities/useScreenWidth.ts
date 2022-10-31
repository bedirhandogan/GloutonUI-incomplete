import { useEffect, useState } from "react";

export default function useScreenWidth() {
    const [deviceWidth, setDeviceWidth] = useState<number>(0);
    
    const resizeHandler = () => setDeviceWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);

    return { deviceWidth };
}