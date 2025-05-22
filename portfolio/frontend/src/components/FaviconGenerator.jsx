// src/components/FaviconGenerator.jsx
import { useEffect } from 'react';

const FaviconGenerator = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Background color
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 64, 64);
    
    // Text styling
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw your name (use initials if full name is too long)
    ctx.fillText('ST', 32, 32); // Replace 'DB' with your initials
    
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = canvas.toDataURL('image/x-icon');
    document.head.appendChild(link);
  }, []);

  return null; // This component doesn't render anything
};

export default FaviconGenerator;