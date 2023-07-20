import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import MainPage from "./pages/MainPage";
import HeadAndNav from "./components/headerAndNavbar/HeadAndNav";
import Footer from "./components/Footer/Footer";
import { WidthContext } from "./context/index";
function App() {
  const [width, setWidth] = useState<number>(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WidthContext.Provider value={width}>
      <div className="App">
        <HeadAndNav />
        {width}
        {/* <MainPage /> */}
        {/* <Footer /> */}
      </div>
    </WidthContext.Provider>
  );
}

export default App;
