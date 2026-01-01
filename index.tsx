
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ArtGallery from './ArtGallery';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter basename="/Testrun">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<ArtGallery />} />
      </Routes>
    </BrowserRouter>
  );
}
