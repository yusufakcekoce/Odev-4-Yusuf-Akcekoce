import "./App.css";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Pages/Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Home />} />
          <Route path="/characters/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
