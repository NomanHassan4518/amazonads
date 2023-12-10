import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "./Components/Report/Report";

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reports" element={<Report />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
