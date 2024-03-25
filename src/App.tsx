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
import { DrawingGameProvider } from './pages/DrawingGame/DrawingContext';
import CasinoFile from './pages/Casino';
import Test from './pages/Test';
// import { connectSocket } from './socket';

const homeroute = "/portfolio"
import io from 'socket.io-client';

function App() {

  return (
    <>
      <BrowserRouter>
      <div className="menu-game">
        {/* <Header lang={"fr"} /> */}
            <Routes>
                <Route
                  path="*"
                    element={
                      <DrawingGameProvider>
                        <CasinoFile />
                      </DrawingGameProvider>
                    }
                  />
              {/* <Route
                path={homeroute}
                element={
                    <Home />
                }
              /> */}
              {/* <Route 
                path={homeroute + "/test"}
                element={
                  <Test />
                }
              /> */}
              </Routes>
                  </div>
            </BrowserRouter>
    </>
  )
}

export default App
