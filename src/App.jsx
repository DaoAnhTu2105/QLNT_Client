import React from "react";
import "./App.css";
import { AppRouter } from "./routers/AppRouter";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <AppRouter />
      </CookiesProvider>
    </>
  );
}

export default App;
