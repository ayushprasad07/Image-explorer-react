import { useState } from 'react';
import './App.css';
import Images from './components/Images';
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState("light"); // Default mode is light

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark"); // Switch to dark mode
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode("light"); // Switch to light mode
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div className="App">
      <Navbar toggleMode={toggleMode} mode={mode} />  {/* Passing mode and toggleMode as props */}
      <Images mode={mode} />
    </div>
  );
}

export default App;
