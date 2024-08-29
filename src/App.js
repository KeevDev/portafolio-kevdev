import React from "react";
import { motion } from "framer-motion";
import Profile from "./componentes/profile";
import Info from "./componentes/info";
import Particles from "./componentes/particles";
import useIsMobile  from "./useIsMobile"; // Importar el hook

const App = () => {
  const isMobile = useIsMobile(); // Usar el hook dentro del componente

  const styles = {
    htmlBody: {
      height: "100%",
      width: "100%",
      margin: 0,
      padding: 0,
      fontFamily: "'Arial', sans-serif",
      overflowX: "hidden",
      overflowY: "hidden",
      backgroundColor: "#20140b",
      color: "#5a4e3b",
      position: "relative",
    },
    container: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row", // Cambiar la dirección del flex según el tamaño de pantalla
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "20px",
      boxSizing: "border-box",
      position: "relative",
      zIndex: 1,
    },
    backgroundGradient1: {
      position: "fixed",
      width: "100%",
      height: "100%",
      bottom: 0,
      left: "-50%",
      right: "-50%",
      top: 0,
      background: `linear-gradient(135deg, rgba(51, 35, 14, 0.8), rgba(47, 28, 16, 0.8))`,
      backgroundSize: "200% 200%",
      zIndex: -1,
    },
    backgroundGradient2: {
      position: "fixed",
      width: "100%",
      height: "100%",
      bottom: 0,
      left: "-50%",
      right: "-50%",
      top: 0,
      background: `linear-gradient(225deg, rgba(51, 35, 14, 0.6), rgba(47, 28, 16, 0.6))`,
      backgroundSize: "200% 200%",
      zIndex: -2,
    },
  };

  return (
    <div style={styles.htmlBody}>
      <motion.div
        style={styles.backgroundGradient1}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      />
      <motion.div
        style={styles.backgroundGradient2}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 45, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      />
      <Particles />
      <div style={styles.container}>
        <Profile />
        <Info />
      </div>
    </div>
  );
};

export default App;
