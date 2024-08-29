// Particles.js
import React from "react";
import { motion } from "framer-motion";

const particleVariants = {
  animate: {
    x: ["-100vw", "100vw"], // Movimiento horizontal libre
    y: ["-100vh", "100vh"], // Movimiento vertical libre
    opacity: [0.1, 0.8, 0.1], // Opacidad ajustada para desvanecimiento
    scale: [0.5, 1.2, 0.5], // Escala para tamaño de partículas
    transition: {
      duration: 20, // Duración extendida para una animación más prolongada
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

const Particles = () => {
  const particles = Array.from({ length: 50 }).map((_, index) => (
    <motion.div
      key={index}
      style={{
        position: "absolute",
        width: `${Math.random() * 10 + 10}px`, // Tamaño de partículas
        height: `${Math.random() * 10 + 10}px`,
        backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`, // Color blanco transparente
        borderRadius: "10%", // Bordes redondeados para estilo suave
        boxShadow: `0 0 ${Math.random() * 3 + 1}px rgba(255, 255, 255, 0.8)`, // Sombra ajustada
        top: `${Math.random() * 100}vh`, // Posición inicial aleatoria
        left: `${Math.random() * 100}vw`, // Posición inicial aleatoria
      }}
      variants={particleVariants}
      animate="animate"
    />
  ));

  return <div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>{particles}</div>;
};

export default Particles;
