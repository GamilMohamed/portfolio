// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
// import Header from './pages/Header/Header';
// import { DrawingGameProvider } from './pages/DrawingGame/DrawingContext';
// import CasinoFile from './pages/Casino';
import Home from './pages/Home';
import { useEffect } from 'react';
// import { connectSocket } from './socket';

const homeroute = "/portfolio"

function App() {
  // const [count, setCount] = useState(0)
    useEffect(() => {
      // connectSocket();
    }, []);

  return (
    <>
      <BrowserRouter>
      <div className="menu-game">
        {/* <Header lang={"fr"} /> */}
            <Routes>
                {/* <Route
                  path={homeroute + "/casino"}
                    element={
                      <DrawingGameProvider>
                        <CasinoFile />
                      </DrawingGameProvider>
                    }
                  /> */}
              <Route
                path={homeroute}
                element={
                    <Home />
                }
              />
              </Routes>
                  </div>
            </BrowserRouter>
    </>
  )
}

export default App
