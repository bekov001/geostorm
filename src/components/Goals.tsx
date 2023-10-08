import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import flag from "../assets/flag-64.png";
import rocket from "../assets/rocket-64.png";
import "./index.css";


export default function Goals() {

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const scrollListener = () => {
      const scrollY = window.scrollY;
      const triggerThreshold = 100;

      if (scrollY > triggerThreshold && !hasAnimated) {
        setIsVisible(true);
        controls.start({ x: 0, opacity: 1,});
        setHasAnimated(true); // Set the flag to true after the animation occurs
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [controls, hasAnimated]);

  return (
    <motion.div
      initial={{
        x: -150,
        opacity: 0,
      }}
      animate={controls}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
        <h2 className="about_header"  id="goals">About us</h2>
        <div className="vl">
          <img src={rocket} alt="rocket" className="over-line-image" />
          <p className="about_text">
            Our mission involves utilizing the K-index as a crucial parameter for understanding geomagnetic storms. To achieve this, I employ MLvwrbvk to extract the K-index from the raw data recorded by DSCOVR. Furthermore, I use xkbnk to predict the K-index for the next three hours. To ensure data accuracy, any deviations or anomalies are replaced with the mean value derived from the maximum and minimum data points.
          </p>
        </div>
        <div className="extra_line"></div>
        <h2 className="about_header" id="mission">Our mission</h2>
        <div className="vl">
          <img src={flag} alt="flag" className="over-line-image" />
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.um.
          </p>
        </div>
        <div className="extra_line"></div>
    </motion.div>
  )
}