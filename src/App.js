import "./styles.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Event from "./Pages/Event";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/events">Events</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/event/:id"  element={<Event />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
