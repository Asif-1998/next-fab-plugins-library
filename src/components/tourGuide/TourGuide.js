import { driver } from 'driver.js';
import './TourGuide.css';
import configSteps from "../../clientConfig.json";

const TourGuide = (page) => {
    if (configSteps[page]) {
        if (configSteps[page].contextualGuide) {
            let step;
            let theme;
            let enabled = false;
            if (page == "home") {
                if (configSteps.home.contextualGuide.enabled == true) {
                    enabled = true;
                }
                step = configSteps.home.contextualGuide.steps;
                theme = configSteps.home.contextualGuide.theme.default;
            } else if (page == "cart") {
                if (configSteps.cart.contextualGuide.enabled == true) {
                    enabled = true;
                }
                step = configSteps.cart.contextualGuide.steps;
                theme = configSteps.cart.contextualGuide.theme.yellowColor;
            } else {
                console.log("provided page is not available in configuration json");
            }

            let driverSteps = [];

            step.forEach(step => {
                const [side, align] = step.position.split('-');
                driverSteps.push({
                    element: step.targetSelector,
                    popover: {
                        title: step.title,
                        description: step.content,
                        side: side,
                        align: align
                    }
                });
            });

            if (enabled) {
                if (theme === "#fde047") {
                    driverSteps.forEach((step) => {
                        step.popover.popoverClass = 'driverjs-theme';
                    });

                    const yellowDriverObj = driver({
                        showProgress: true,
                        animate: false,
                        nextBtnText: '—›',
                        prevBtnText: '‹—',
                        doneBtnText: '✕',
                        steps: driverSteps
                    });

                    return yellowDriverObj.drive();

                } else {
                    const defaultDriverObj = driver({
                        showProgress: true,
                        animate: false,
                        steps: driverSteps
                    });

                    return defaultDriverObj.drive();

                }
            }
        } else {
            console.log("The page you are providing is not matching the structure of config file.")
        }
    } else {
        console.log("Please provide a valid page name .")
    }
};

export default TourGuide;