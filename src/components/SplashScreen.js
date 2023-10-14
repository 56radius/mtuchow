import React, { useEffect, useState } from "react";
import ".././css/SplashScreen.css";
import logo from ".././assets/img/logo.png";

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showSplash ? "show" : "hide"}`}>
      <img
        src={logo}
        alt="Chowgoo Logo"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

export default SplashScreen;
