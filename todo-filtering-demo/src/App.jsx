import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <nav className="bg-indigo-500 text-white p-4 sticky top-0 z-10">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              All
            </Link>
          </li>
          <li>
            <Link to="/active" className="hover:underline">
              Active
            </Link>
          </li>
          <li>
            <Link to="/completed" className="hover:underline">
              Completed
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active" element={<Home filter="active" />} />
        <Route path="/completed" element={<Home filter="completed" />} />
      </Routes>
    </Router>
  );
};

export default App;
