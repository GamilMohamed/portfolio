import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DrawingGameProvider } from "./pages/DrawingGame/DrawingContext";
import CasinoFile from "./pages/Casino";
import NewHome from "./pages/NewHome/NewHome";
import 'animate.css';
const homeroute = "/portfolio";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="menu-game">
          <Routes>
            <Route
              path="*"
              element={
                <DrawingGameProvider>
                  <CasinoFile />
                </DrawingGameProvider>
              }
            />
            <Route path={homeroute} element={<NewHome />} />
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
  );
}

export default App;
