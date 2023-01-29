
import Register from "./components/Register";
import Login from "./components/Login";
import './App.css';
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";



function App() {
  return (
    <main className="App">

      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact element={<Login />} path="/" />
              <Route exact element={<Register />} path="/register" />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
