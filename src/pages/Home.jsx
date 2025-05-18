import React, { useState, useEffect } from "react";
import SpaceStationCanvas from "../components/canvas/SpaceStationCanvas";
import Experience from "../components/Experience";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("space-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="space-section" style={{ position: "relative", height: "100vh" }}>
        <SpaceStationCanvas scrollY={scrollY} />
      </div>
      {scrollY >= 1 && <Experience />}
    </>
  );
};

export default Home; 