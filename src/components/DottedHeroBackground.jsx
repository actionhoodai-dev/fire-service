import React, { useEffect, useRef, useState } from 'react';

const DottedHeroBackground = ({ themeColor = 'var(--primary)' }) => {
  const canvasRef = useRef(null);
  const colorRef = useRef({ r: 230, g: 47, b: 16 }); // Initial red color
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Parse CSS variable or hex color to RGB
  useEffect(() => {
    let r = 230, g = 47, b = 16;
    if (themeColor.startsWith('#')) {
      const hex = themeColor.substring(1);
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      }
    } else if (themeColor === '#facc15' || themeColor.includes('facc15')) {
      r = 250; g = 204; b = 21;
    } else if (themeColor === '#3b82f6' || themeColor.includes('3b82f6')) {
      r = 59; g = 130; b = 246;
    } else if (themeColor.includes('primary')) {
      r = 230; g = 47; b = 16;
    }
    
    // Smooth transition ref
    colorRef.current = { r, g, b };
  }, [themeColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Handle sizing
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const isMobileDevice = window.innerWidth < 768;

    // Particle grid settings
    const cols = isMobileDevice ? 18 : 45;
    const rows = isMobileDevice ? 16 : 28;
    const spacingX = isMobileDevice ? 24 : 40;
    const spacingY = isMobileDevice ? 20 : 32;
    const dots = [];

    // Initialize grid of particles
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        // Add random jitter to break the horizontal line patterns on mobile
        const jitterMagnitudeX = isMobileDevice ? 16 : 0;
        const jitterMagnitudeY = isMobileDevice ? 12 : 0;
        const jitterX = (Math.random() - 0.5) * jitterMagnitudeX;
        const jitterY = (Math.random() - 0.5) * jitterMagnitudeY;

        dots.push({
          gridX: x,
          gridY: y,
          // Base 3D coordinate (relative to center of grid) with random jitter to create scattered crystals
          bx: (x - cols / 2) * spacingX + jitterX,
          by: (y - rows / 2) * spacingY + 80 + jitterY,
          bz: 0,
          phase: Math.random() * Math.PI * 2, // Random phase for independent crystal sparkling
          sparkleSpeed: 0.8 + Math.random() * 1.5 // Random speed of sparkling
        });
      }
    }

    let time = 0;
    // Current interpolated color for rendering
    let currentR = colorRef.current.r;
    let currentG = colorRef.current.g;
    let currentB = colorRef.current.b;

    const render = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, w, h);

      // Camera view settings (3D perspective floor perspective)
      const pitch = 0.95; // Looking down at 55 degrees
      const yaw = 0.05;   // Very slight angle rotation
      const focalLength = 320;
      const cameraDistance = 380;
      const centerX = w / 2;
      const centerY = h * 0.62; // Sit it slightly in the lower middle screen

      time += 0.008; // Wave animation speed

      // Smoothly transition colors
      const targetColor = colorRef.current;
      currentR += (targetColor.r - currentR) * 0.05;
      currentG += (targetColor.g - currentG) * 0.05;
      currentB += (targetColor.b - currentB) * 0.05;

      const r = Math.round(currentR);
      const g = Math.round(currentG);
      const b = Math.round(currentB);

      // Loop through all points
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Complex beautiful waving floor formula
        // Combine multiple sine waves for rich 3D texture
        const wave1 = Math.sin(dot.gridX * 0.18 + time) * 35;
        const wave2 = Math.cos(dot.gridY * 0.15 + time * 1.2) * 25;
        const wave3 = Math.sin((dot.gridX + dot.gridY) * 0.1 + time * 0.5) * 15;
        
        dot.bz = wave1 + wave2 + wave3;

        // Apply 3D Rotations
        // Rotate around X (pitch)
        let y1 = dot.by * Math.cos(pitch) - dot.bz * Math.sin(pitch);
        let z1 = dot.by * Math.sin(pitch) + dot.bz * Math.cos(pitch);

        // Rotate around Y (yaw)
        let x2 = dot.bx * Math.cos(yaw) - z1 * Math.sin(yaw);
        let z2 = dot.bx * Math.sin(yaw) + z1 * Math.cos(yaw);

        // Perspective Projection
        const zDepth = z2 + cameraDistance;
        
        if (zDepth > 20) { // Clip points behind camera
          const scale = focalLength / zDepth;
          const projX = centerX + x2 * scale;
          const projY = centerY + y1 * scale;

          // Draw if within boundaries (with padding)
          if (projX > -50 && projX < w + 50 && projY > -50 && projY < h + 50) {
            const isMobile = window.innerWidth < 768;
            // Use micro size for beautiful dotted crystal look on mobile
            const size = isMobile ? Math.max(0.22, scale * 0.95) : Math.max(0.6, scale * 3.5);
            
            // Deep gradient mask to fade out particles at the edges and in the distance
            const edgeFadeX = Math.sin((dot.gridX / cols) * Math.PI);
            const edgeFadeY = Math.sin((dot.gridY / rows) * Math.PI);
            const distanceOpacity = Math.max(0, Math.min(1, scale * 1.5));
            
            // Add independent sparkling to the micro dotted crystals on mobile
            let sparkle = 1.0;
            if (isMobile) {
              sparkle = 0.45 + 0.55 * Math.sin(time * dot.sparkleSpeed + dot.phase);
            }
            
            // Keep micro-crystals subtle, distinct, and sparkling
            const baseOpacity = isMobile ? 0.32 : 0.45;
            const opacity = baseOpacity * edgeFadeX * edgeFadeY * distanceOpacity * sparkle;

            if (opacity > 0.01) {
              ctx.beginPath();
              ctx.arc(projX, projY, size, 0, Math.PI * 2);
              
              // Closer particles are brighter, farther are dimmer
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
              ctx.fill();

              // Add a very subtle glow ONLY on desktop view to avoid mobile overlapping
              if (!isMobile && size > 2.8 && opacity > 0.25) {
                ctx.beginPath();
                ctx.arc(projX, projY, size * 2.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`;
                ctx.fill();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
        opacity: 0.15
      }}
    />
  );
};

export default DottedHeroBackground;
