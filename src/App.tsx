import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./components/Page/Home";
import Results from "./components/Page/Results";


function App() {
  return (
    <>
      <Router>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
