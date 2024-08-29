import React, { useState } from "react";
import { FaArrowCircleRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import studies from "../studies.json";
import skills from "../skills.json";
import experience from "../experience.json";
import projects from "../projects.json";
import useIsMobile from "../useIsMobile"; // Importar el hook
import { motion } from "framer-motion";

const Info = () => {
    const [openProject, setOpenProject] = useState(null);
    const isMobile = useIsMobile(); // Usar el hook dentro del componente

    const handleProjectClick = (index) => {
        setOpenProject(openProject === index ? null : index);
    };

    const styles = {
        contentCv: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: "#ffffff",
            maxWidth: isMobile ? "70vw" : "50vw",
            width: "100%",
            maxHeight: isMobile ? "100%" : "80vh",
            overflowY: "auto",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
        },
        section: {
            marginBottom: "20px",
        },
        subtitle: {
            fontSize: "1.5em",
            color: "#fafafa",
            marginBottom: "10px",
            textAlign: "center",
        },
        timelineItem: {
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "1px solid #fafafa",
            borderRadius: "8px",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
        listItem: {
            marginLeft: "10px",
        },
        icon: {
            fontSize: "1.2em",
            marginRight: "10px",
        },
        projectCard: {
            backgroundColor: "#a5856e",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, height 0.3s ease, box-shadow 0.3s ease",
            color: "#fafafa",
            cursor: "pointer",
            border: "1px solid #fafafa",
            marginBottom: "20px",
            position: "relative",
            overflow: "hidden",
            width: "350px",
            height: "350px", // Altura por defecto
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centrar contenido
            justifyContent: "center", // Centrar contenido
        },
        projectImage: {
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "5px",
            transition: "transform 0.3s ease",
        },
        projectContent: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "hidden",
            alignItems: "center", // Centrar contenido
            justifyContent: "center", // Centrar contenido
        },
        projectInfo: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "10px",
            borderRadius: "5px",
            color: "#fafafa",
            transition: "opacity 0.3s ease, max-height 0.3s ease",
            maxHeight: "0", // Ocultar por defecto
            overflow: "hidden",
            opacity: 0,
        },
        projectInfoVisible: {
            maxHeight: "250px", // Ajusta según sea necesario
            opacity: 1,
            overflow: "auto", // Añade el scroll
            padding: '1vh',
        },
        resumeLink: {
            display: "inline-block",
            padding: "10px 20px",
            marginTop: "10px",
            backgroundColor: "#a5856e",
            color: "#fafafa",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            transition: "background-color 0.5s ease, transform 0.3s ease",
            textAlign: "center",
        },
        resumeLinkHover: {
            backgroundColor: "#8b6e5d",
            transform: "scale(1.05)",
        },
        projectContainer: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center", // Centrar tarjetas de proyecto
            gap: "20px",
        },
        expandButton: {
            marginTop: "10px",
            cursor: "pointer",
            color: "#fafafa",
            textAlign: "center",
        },
        placeholderImage: {
            width: "100%",
            height: "150px",
            backgroundColor: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fafafa",
            borderRadius: "5px",
        }
    };

    return (
        <div style={styles.contentCv}>
            {/* Study Section */}
            <section style={styles.section}>
                <h4 style={styles.subtitle}>ESTUDIOS Y VOLUNTARIADOS</h4>
                <ul style={{ paddingLeft: 0, listStyleType: "none" }}>
                    {studies.map((study, index) => (
                        <li key={index} style={styles.timelineItem}>
                            <FaArrowCircleRight style={styles.icon} />
                            <p style={styles.listItem}>{study.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Skills Section */}
            <section style={styles.section}>
                <h4 style={styles.subtitle}>SKILLS</h4>
                <ul style={{ paddingLeft: 0, listStyleType: "none" }}>
                    {skills.map((skill, index) => (
                        <li key={index} style={styles.timelineItem}>
                            <FaArrowCircleRight style={styles.icon} />
                            <p style={styles.listItem}>{skill.name}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Experience Section */}
            <section style={styles.section}>
                <h4 style={styles.subtitle}>EXPERIENCIA</h4>
                <div>
                    {experience.map((exp, index) => (
                        <div key={index} style={styles.timelineItem}>
                            <FaArrowCircleRight style={styles.icon} />
                            <div>
                                <p style={styles.listItem}><strong>{exp.role} - {exp.company} ({exp.location}) ({exp.date})</strong></p>
                                <p style={styles.listItem}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section style={styles.section}>
                <h4 style={styles.subtitle}>PROYECTOS</h4>
                <div style={styles.projectContainer}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            style={{
                                ...styles.projectCard,
                                ...(openProject === index ? { height: "500px", zIndex: 2, transform: "scale(1.1)" } : {}),
                            }}
                            onClick={() => handleProjectClick(index)}
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div style={styles.projectContent}>
                                <motion.img
                                    src={project.img}
                                    alt={project.alt}
                                    style={styles.projectImage}
                                    whileHover={{ scale: 1.1 }}
                                />
                                <h3>{project.title}</h3>
                                <motion.div
                                    style={{
                                        ...styles.projectInfo,
                                        ...(openProject === index ? styles.projectInfoVisible : {}),
                                    }}
                                    animate={{ opacity: openProject === index ? 1 : 0 }}
                                >
                                    <p><strong>Resumen:</strong> {project.summary}</p>
                                    <p><strong>Lenguajes y Frameworks:</strong> {project.languages.join(', ')}</p>
                                    <p><strong>Tiempo Estimado:</strong> {project.estimatedTime}</p>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" style={styles.resumeLink}>Ver proyecto</a>
                                </motion.div>
                                <div style={styles.expandButton}>
                                    <p>Ver más</p>
                                    {openProject === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Resume Section */}
            <section style={styles.section}>
                <h4 style={styles.subtitle}>RESUME</h4>
                <div style={{ textAlign: "center" }}>
                    <a href="/DesarrolladorSoftwareJR.pdf" target="_blank" style={styles.resumeLink}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#8b6e5d"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#a5856e"}>
                        Ver CV
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Info;
