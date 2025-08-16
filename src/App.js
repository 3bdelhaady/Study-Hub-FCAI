import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js'
import RegisterPage from './Components/Register/RegisterPage.js';
import Policy from './Components/Data_Policy/Policy.js'
// import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/datapolicy" element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;
