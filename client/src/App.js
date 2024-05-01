import './App.css';
import { useEffect, useState } from 'react';
import { init, subscribe } from './socketApi';
import Palette from './components/Palette';

function App() {
  const [activeColor, setActiveColor] = useState('#282c34');

  useEffect(() => {
    // Soket bağlantısını başlat ve renk değişikliklerini izle
    init();

    subscribe((color) => {
      console.log('Yeni renk alındı:', color);
      setActiveColor(color);
    });
  }, []); // Boş bağımlılık dizisi, yalnızca bir kere çalışmasını sağlar.

  return (
    <div className="App" style={{ backgroundColor: activeColor}}>
      <h1>{activeColor}</h1>
      <Palette activeColor={activeColor}/>
    </div>
  );
}

export default App;
