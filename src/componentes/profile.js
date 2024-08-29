import React from "react";
import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile"; // Importar el hook

const Profile = () => {
  const isMobile = useIsMobile(); // Usar el hook dentro del componente

  const styles = {
    about: {
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Fondo semitransparente
      textAlign: "center",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px",
      width: "100%",
      maxWidth: isMobile ? "70vw" : "50vw",
      maxHeight: "80vh",
      marginRight: "2vw",
      color: "#fafafa", // Texto blanco
    },
    title: {
      fontSize: "2.5em",
      marginBottom: "10px",
      color: "#fafafa", // Texto blanco
    },
    description: {
      marginBottom: "20px",
    },
    networks: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    networkIcon: {
      width: "40px",
      height: "40px",
      margin: "0 10px",
      transition: "transform 0.3s ease",
    },
  };

  return (
    <motion.div
      style={styles.about}
      initial={{ opacity: 0, y: 20 }} // Inicialmente oculto
      animate={{ opacity: 1, y: 0 }} // Animación de entrada
      transition={{ duration: 0.8 }} // Duración de la animación
    >
      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hola, soy Kevin Serna
      </motion.h1>
      <motion.p
        style={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Soy un apasionado por la tecnología y el desarrollo de software. Me encanta aprender nuevas tecnologías y enfrentar retos que me permitan crecer profesionalmente. Además de mi interés en la programación, disfruto de actividades al aire libre y me interesa mucho la resolución de problemas. Creo en el aprendizaje continuo y en la importancia de contribuir positivamente en los equipos y proyectos en los que participo.
      </motion.p>
      <motion.div
        style={styles.networks}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/keevdev/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <motion.img
            src="https://cdn-icons-png.freepik.com/512/174/174857.png"
            alt="LinkedIn"
            style={styles.networkIcon}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <motion.a
          href="https://github.com/KeevDev"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            style={styles.networkIcon}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <motion.a
          href="https://wa.me/573122905004"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            style={styles.networkIcon}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
