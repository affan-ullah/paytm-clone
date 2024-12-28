import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Wallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`/wallet/${user.username}`)
        .then(response => setBalance(response.data.balance))
        .catch(error => console.log(error));
    }
  }, []);

  return (
    <div>
      <h2>Wallet</h2>
      <p>Balance: ₹{balance}</p>
    </div>
  );
}

export default Wallet;
