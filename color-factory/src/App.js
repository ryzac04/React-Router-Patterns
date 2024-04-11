import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ColorList from "./ColorList";
import Color from "./Color";
import ColorForm from "./ColorForm";

import "./App.css";

function App() {
  const [colors, setColors] = useState([
    { name: 'red', value: '#ff0000' },
    { name: 'blue', value: '#0000ff' },
    { name: 'green', value: '#00ff00' }
  ]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/colors"
            element={<ColorList colors={colors} />}
          />
          <Route
            path="/colors/:color"
            element={<Color colors={colors} />}
          />
          <Route
            path="/colors/new"
            element={<ColorForm colors={colors} setColors={setColors} />}
          />
          <Route
            path="*"
            element={<Navigate to='/colors' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;