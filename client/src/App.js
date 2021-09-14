import React, { useEffect } from 'react';
import socket from './helpers/socket';

function App() {
  useEffect(() => {
    function sock() {
      socket.emit('start');
      socket.on('ticker', a => {
        console.log(a, 'ticker');
      });
    }
    sock();
  }, []);

  return <div className="App"></div>;
}

export default App;
