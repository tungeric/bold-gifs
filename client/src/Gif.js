import React from 'react';
import './App.css';

export default function Gif({ file }) {
  return (
    <div>
      <img src={file.url} className="grid-img" alt={file.name} />
    </div>
  );
}