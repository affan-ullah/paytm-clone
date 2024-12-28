import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Wallet from './components/Wallet';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
