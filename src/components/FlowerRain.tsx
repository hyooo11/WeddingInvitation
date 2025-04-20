// components/FlowerRain.tsx
"use client";

import React, { useEffect, useState } from "react";

const FlowerRain = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    const total = 20; // 꽃잎 개수 조정
    setPetals(Array.from({ length: total }, (_, i) => i));
  }, []);

  return (
    <div className="flower-rain">
      {petals.map((i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`,
          }}
        >
          <p className="deco"></p>
        </span>
      ))}

      <style jsx>{`
        .flower-rain {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          width: 100%;
          height: 100%;
          z-index: 10;
          overflow: hidden;
        }

        .petal {
          position: absolute;
          top: -50px;
          font-size: 24px;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fall {
          0% {
            top: -50px;
            opacity: 1;
          }
          100% {
            top: 100vh;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FlowerRain;
