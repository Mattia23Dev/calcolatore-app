import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calcolatore from './pages/Calcolatore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calcolatore />} />
      </Routes>
    </Router>
  );
}

export default App;
