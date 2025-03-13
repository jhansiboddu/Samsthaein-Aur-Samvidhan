import "./App.css";
import React from 'react';
import { Route, Routes} from 'react-router-dom';


import './styles/style.css';  // Make sure the styles are linked
// import Login from './components/Login';
import Home from "./components/Home";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks user authentication state

  return (
      <Routes>
        {/* <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={() => setIsAuthenticated(true)} />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;