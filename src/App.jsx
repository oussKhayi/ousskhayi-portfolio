import { useEffect, useRef } from "react";
import { LeftSide } from "./components/LeftSide";
import RightSide from "./components/RightSide";
import {
  GrAppsRounded,
  GrBriefcase,
  GrContact,
  GrDeploy,
  GrUser,
} from "react-icons/gr";

import "./App.css";

const App = () => {
  const leftRef = useRef(null); // Reference for the left div
  const rightRef = useRef(null); // Reference for the right div
  useEffect(() => {
    const leftDiv = leftRef.current;
    const rightDiv = rightRef.current;

    const handleScroll = (e) => {
      if (rightDiv) {
        // Synchronize scroll from left to right
        rightDiv.scrollBy(0, e.deltaY);
      }
    };

    // Attach the scroll event listener to the left div
    if (leftDiv) {
      leftDiv.addEventListener("wheel", handleScroll);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (leftDiv) {
        leftDiv.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);
  return (
    <>
      {/* <div className="mouse" id="scrollIcon"></div> */}
      <div className="bg-primary h-auto lg:h-screen p-3 md:p-8 xl:px-20 grid grid-rows-1 md:grid-cols-1 lg:grid-cols-2 lg:overflow-hidden pb-12">
        <LeftSide ref={leftRef} />
        <RightSide ref={rightRef} />
      </div>
      <div className="fixed w-full bottom-0 lg:hidden bg-primary border-t-[0.01px] border-t-secondary bg-opacity-70 text-gray-400 pt-1">
        <ul className="p-2 flex justify-around">
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#about"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrUser className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#experience"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrBriefcase className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#skills"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrDeploy className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#projects"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrAppsRounded className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a href="#contact" className="cursor-pointer">
              <GrContact className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
