"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  color: string;
}

interface DataBeam {
  x: number;
  y: number;
  length: number;
  speed: number;
  alpha: number;
  width: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let dataBeams: DataBeam[] = [];
    let time = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 115,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const colors = [
      "rgba(0, 240, 255,",   // Cyan
      "rgba(0, 112, 243,",   // Electric Blue
      "rgba(59, 130, 246,",  // Blue 500
      "rgba(255, 255, 255,", // Star White
    ];

    const initElements = () => {
      // 1. Stars (Preserved!)
      stars = [];
      const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 7500), 160);
      for (let i = 0; i < starCount; i++) {
        const baseAlpha = Math.random() * 0.5 + 0.3;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.8 + 0.8,
          baseAlpha: baseAlpha,
          alpha: baseAlpha,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // 2. Rising Quantum Data Beams
      dataBeams = [];
      const beamCount = 20;
      for (let i = 0; i < beamCount; i++) {
        dataBeams.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 140 + 70,
          speed: Math.random() * 0.6 + 0.25,
          alpha: Math.random() * 0.15 + 0.04,
          width: Math.random() * 1.5 + 0.6,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();

    const animate = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Deep Pitch Black Space Base
      const baseGrad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        80,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      baseGrad.addColorStop(0, "rgba(3, 6, 16, 1)");
      baseGrad.addColorStop(0.6, "rgba(2, 3, 10, 1)");
      baseGrad.addColorStop(1, "rgba(1, 1, 4, 1)");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. 3D Perspective Sub-Space Cyber Grid Lines (Perspective Matrix)
      ctx.save();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.035)";
      ctx.lineWidth = 1;
      const horizonY = canvas.height * 0.35;
      const gridSpacing = 60;

      // Vertical perspective lines
      const centerX = canvas.width / 2;
      for (let x = -canvas.width; x <= canvas.width * 2; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(centerX + (x - centerX) * 0.1, horizonY);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal perspective grid lines
      for (let y = horizonY; y <= canvas.height; y += (canvas.height - horizonY) / 14) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Rising Quantum Light Beams
      dataBeams.forEach((b) => {
        b.y -= b.speed;
        if (b.y + b.length < 0) {
          b.y = canvas.height + b.length;
          b.x = Math.random() * canvas.width;
        }

        const beamGrad = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
        beamGrad.addColorStop(0, `rgba(0, 240, 255, ${b.alpha * 1.5})`);
        beamGrad.addColorStop(0.5, `rgba(0, 112, 243, ${b.alpha})`);
        beamGrad.addColorStop(1, "rgba(0, 240, 255, 0)");

        ctx.fillStyle = beamGrad;
        ctx.fillRect(b.x, b.y, b.width, b.length);
      });

      // 4. Twinkling Starfield (PRESERVED!)
      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

        s.alpha = s.baseAlpha + Math.sin(time * 40 * s.pulseSpeed) * 0.25;
        const currentAlpha = Math.max(0.15, Math.min(1, s.alpha));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${currentAlpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#00f0ff";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 5. Connecting Constellation Thread Lines (Balanced & Visible)
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.12;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 6. Interactive Mouse Constellation Connections
      if (mouse.x > -1000) {
        stars.forEach((s) => {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.22;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 block h-full w-full pointer-events-none"
    />
  );
}
