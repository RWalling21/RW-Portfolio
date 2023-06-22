// Custom hook
import React from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

/**
 * useNavbarAnimate is a custom hook that returns the props for the motion component and a boolean value indicating whether the navbar is visible.
 * 
 * @returns {Object} An object containing the props for the motion component and a boolean value indicating whether the navbar is visible.
 */
const useNavbarAnimate = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const [lastScrollTop, setLastScrollTop] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(true);

    useScrollPosition(({ currPos }) => {
        const isScrollingUp = currPos.y > lastScrollTop;

        setIsVisible(isScrollingUp || currPos.y > -80); 
        setScrollY(currPos.y);
        setLastScrollTop(currPos.y);
    }, [lastScrollTop]);

    const isScrolled = scrollY <= 0; 

    /**
     * motionProps is a custom object that contains the props for the motion component.
     */
    const motionProps = {
        initial: { y: -125 },
        animate: { y: 0 },
        exit: { y: -125 },
        transition: { type: 'tween', duration: 0.2 },
        color: "navy.headline",
        position: "fixed",
        align: "center",
        justify: "space-between",
        wrap: "wrap",
        pl: "4rem", pr: "4rem", pt: "1rem", pb: "1rem",
        backdropFilter: 'auto', backdropBlur: 'lg',
        bg: isScrolled ? "navy.background" : "transparent",
        top: "0", zIndex: "1", width: "full",
        boxShadow: scrollY < 0 ? "0px 4px 20px rgba(0,0,0,0.1)" : "none",
        opacity: isScrolled ? 0.98 : 1
    };

    return { isVisible, motionProps };
}

export default useNavbarAnimate;
