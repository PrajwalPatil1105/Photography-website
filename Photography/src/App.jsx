import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
