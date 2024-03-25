import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
// import 'terminal.css';

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   // <React.StrictMode>
//   <>

//       <App />
//       </div>
//       </div>
//   </div> 
//       {/* <h2 className="title">📺</h2> */}
//   </>  
// );

// // </React.StrictMode>,

import { TerminalContextProvider } from "react-terminal";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
  <div className=".main-wrapper">
  <div className=".noise-wrapper">
  <div className=".noise">
  <span className="incr"></span> 
  <TerminalContextProvider>
    <App/>
  </TerminalContextProvider>
  </div>
  </div>
  </div>

  </>
);