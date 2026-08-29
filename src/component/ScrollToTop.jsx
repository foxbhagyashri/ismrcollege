import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures the browser view resets to (0, 0)
 * on every React Router navigation.
 */
const ScrollToTop = () => {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        // Immediate scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Micro-delay fallback to handle DOM rendering and dynamic layouts
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 10);

        return () => clearTimeout(timer);
    }, [pathname, search, hash]);

    return null;
};

export default ScrollToTop;
