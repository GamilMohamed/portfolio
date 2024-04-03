import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DrawingGameProvider } from "./pages/DrawingGame/DrawingContext";
import CasinoFile from "./pages/Casino";
import 'animate.css';
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <DrawingGameProvider>
                  { <CasinoFile /> || <div>Waiting for other players</div>}
                </DrawingGameProvider>
              }
            />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
