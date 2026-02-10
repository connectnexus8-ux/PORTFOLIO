'use client';

import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120,
    };

    const mouseMoveListener = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    const mouseOutListener = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', mouseMoveListener);
    window.addEventListener('mouseout', mouseOutListener);


    let particlesArray: Particle[] = [];
    const numberOfParticles = 80;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(174 78% 41% / 0.8)`;
      }

      update() {
        // Wall collision
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 3;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 3;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 3;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 3;
                }
            }
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if(!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connect() {
      if(!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
            ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

          if (distance < (canvas.width / 8) * (canvas.height / 8)) {
            opacityValue = 1 - (distance / 25000);
            
            const primaryColor = '174 78% 41%';
            const accentColor = '262 85% 56%';
            const gradient = ctx.createLinearGradient(particlesArray[a].x, particlesArray[a].y, particlesArray[b].x, particlesArray[b].y);
            gradient.addColorStop(0, `hsla(${primaryColor} / ${opacityValue})`);
            gradient.addColorStop(1, `hsla(${accentColor} / ${opacityValue})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    let animationFrameId: number;
    function animate() {
      if(!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    setCanvasSize();
    
    window.addEventListener('resize', setCanvasSize);
    
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', mouseMoveListener);
      window.removeEventListener('mouseout', mouseOutListener);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 z-0 w-full h-full" />;
};

export default ParticleBackground;