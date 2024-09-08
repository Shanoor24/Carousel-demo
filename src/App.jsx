import { useState } from 'react';
import Carousel from './components/Carousel';
import './App.css';

function App() {
  const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
  ];
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
