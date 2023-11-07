import './App.css';
import { useState, useEffect  } from 'react';
import Ofline from './Ofline';


function App() {
  const isOnl̥ine = navigator.onLine
  console.log("🚀 ~ file: Ofline.js:5 ~ Ofline ~ isOnl̥ine:", isOnl̥ine)

  return (
    <div className="App">  
      <Ofline />
    </div>
  );
}

export default App;
