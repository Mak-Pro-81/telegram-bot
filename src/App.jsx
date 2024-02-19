import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      Home
      <button onClick={onClose}>Close App</button>
    </>
  );
}

export default App;
