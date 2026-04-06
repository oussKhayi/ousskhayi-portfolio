import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <>
       {/* <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-20 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
       </div> */}
      </>
    </LanguageProvider>
  </React.StrictMode>
);
