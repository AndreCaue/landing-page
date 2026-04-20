"use client";

import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function useRandomDirection() {
  const dir = useRef<{ dx: number; dy: number }>({
    dx: 1,
    dy: 1,
  });

  useEffect(() => {
    dir.current.dx = Math.random() > 0.5 ? 1 : -1;
    dir.current.dy = Math.random() > 0.5 ? 1 : -1;
  }, []);

  return dir;
}

const listeners = new Set<(delta: number) => void>();
let last = 0;
let animationId: number | null = null;

function startAnimationLoop() {
  if (typeof window === "undefined") return;
  if (animationId !== null) return; // já iniciado

  last = performance.now();

  function loop(t: number) {
    const delta = t - last;
    last = t;
    listeners.forEach((fn) => fn(delta));
    animationId = requestAnimationFrame(loop);
  }

  animationId = requestAnimationFrame(loop);
}

function stopAnimationLoop() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

export default function CardFloating({
  svg,
  speed = 0.15,
  drift = 0.15,
  rotateSpeed = 0.15,
  className = "",
}: {
  svg: React.ReactNode;
  speed?: number;
  drift?: number;
  rotateSpeed?: number;
  className?: string;
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [initial] = useState(() => ({
    x: 0,
    y: 0,
    r: Math.random() * 360,
  }));

  const x = useMotionValue(initial.x);
  const y = useMotionValue(initial.y);
  const rotate = useMotionValue(initial.r);
  const dir = useRandomDirection();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;

    x.set(Math.random() * (dimensions.width - 70));
    y.set(Math.random() * (dimensions.height - 90));
  }, [dimensions, x, y]);

  useEffect(() => {
    if (dimensions.width === 0) return;

    const update = (delta: number) => {
      const W = dimensions.width;
      const H = dimensions.height;

      let newX = x.get() + dir.current.dx * speed * delta;
      let newY = y.get() + dir.current.dy * speed * delta;

      if (newX < 0 || newX > W - 70) {
        dir.current.dx *= -1;
        newX = Math.max(0, Math.min(W - 70, newX));
      }
      if (newY < 0 || newY > H - 90) {
        dir.current.dy *= -1;
        newY = Math.max(0, Math.min(H - 90, newY));
      }

      dir.current.dx += (Math.sin(performance.now() / 900) * drift) / 120;
      dir.current.dy += (Math.cos(performance.now() / 1100) * drift) / 120;

      x.set(newX);
      y.set(newY);
      rotate.set((rotate.get() + rotateSpeed * delta) % 360);
    };

    listeners.add(update);
    startAnimationLoop();

    return () => {
      listeners.delete(update);
      if (listeners.size === 0) {
        stopAnimationLoop();
      }
    };
  }, [speed, drift, rotateSpeed, dimensions, x, y, rotate]);

  if (dimensions.width === 0) {
    return null;
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none ${className}`}
      style={{ x, y, rotate, willChange: "transform" }}
    >
      {svg}
    </motion.div>
  );
}
