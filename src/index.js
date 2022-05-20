import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./views/Home"
import Pads from "./views/Pads";
import Rockets from "./views/Rockets";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='rockets' element={<Rockets />} />
          <Route exact path='pads' element={<Pads />} />
        </Routes>
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);