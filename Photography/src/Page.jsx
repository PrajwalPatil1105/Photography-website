import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Page.module.css";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Menu,
  Sun,
  Moon,
} from "lucide-react";

const PreLoader = () => {
  const images = [
    "./Images/m1.png",
    "./Images/m2.png",
    "./Images/m3.png",
    "./Images/m4.png",
    "./Images/m5.png",
    "./Images/m6.png",
  ];

  return (
    <motion.div
      className={styles.preloader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageGrid}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
              rotate: [-2, 0, 0, 2],
            }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              times: [0, 0.3, 0.7, 1],
            }}
          >
            <img src={img} alt="sample" />
          </motion.div>
        ))}
      </div>
      <motion.div
        className={styles.logo}
        initial={{
          scale: 0,
          rotate: -1,
          opacity: 0,
          filter: "blur(50px)",
        }}
        animate={{
          scale: 1,
          rotate: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          delay: 2,
          duration: 1,
          stiffness: 200,
        }}
      >
        <img src="./Images/Logo.png" alt="Logo" />
        <p className={styles.ownername}>Vaibhav Photography</p>
      </motion.div>
      <motion.div
        className={styles.tags}
        initial={{
          scale: 0,
          rotate: -1,
          opacity: 0,
          filter: "blur(50px)",
        }}
        animate={{
          scale: 1,
          rotate: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          delay: 2,
          duration: 1,
          stiffness: 200,
        }}
      >
        <h3>Capturing Life's Beautiful Moments</h3>
        <p>Professional Photography Services</p>
      </motion.div>
    </motion.div>
  );
};

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const homeImages = [
    "./Images/HP8.png",
    "./Images/HP3.png",
    "./Images/HP1.png",
    "./Images/HP4.png",
    "./Images/HP5.png",
    "./Images/HP6.png",
    "./Images/HP2.png",
    "./Images/HP7.png",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? styles.darkTheme : styles.lightTheme;
  }, [isDarkMode]);

  const sections = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNext = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
  };

  const handlePrevious = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? homeImages.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? "100%" : "-130%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0,
        ease: "easeInOut",
      },
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0.1,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <AnimatePresence>{loading && <PreLoader />}</AnimatePresence>
      <nav
        className={`${styles.nav} ${
          isDarkMode ? styles.darkTheme : styles.lightTheme
        }`}
      >
        <motion.div
          className={styles.navContent}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.5 }}
        >
          <motion.div
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={isDarkMode ? "./Images/Logo.png" : "./Images/Logo2.png"}
              alt="Logo"
            />
          </motion.div>

          <div
            className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
          >
            {sections.map(({ id, label }) => (
              <motion.button
                key={id}
                className={`${styles.navLink} ${
                  activeSection === id ? styles.active : ""
                }`}
                onClick={() => scrollToSection(id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
            <motion.button
              className={styles.themeToggle}
              onClick={toggleTheme}
              title={isDarkMode ? "Light Moode" : "Dark Mood"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </motion.div>
      </nav>

      <main className={styles.main}>
        <section id="home" className={styles.section}>
          <div className={styles.carousel}>
            <motion.div
              key={currentIndex}
              className={styles.imageContainer}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                backgroundImage: `url(${homeImages[currentIndex]})`,
              }}
            ></motion.div>
            <button
              className={`${styles.arrow} ${styles.left}`}
              onClick={handlePrevious}
            >
              &#x276E;
            </button>
            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={handleNext}
            >
              &#x276F;
            </button>
          </div>
          <div className={styles.mobilescreen}>
            <h1>Your Vision. Our Lens.</h1>
            <p>Professional Photography Services</p>
          </div>
        </section>

        <section id="portfolio" className={styles.section}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.portfolio}
          >
            <h2>Portfolio</h2>
            <div className={styles.gridGallery}>
              {/* Add your gallery images here */}
            </div>
          </motion.div>
        </section>

        <section id="services" className={styles.section}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.services}
          >
            <h2>Our Services</h2>
            <div className={styles.serviceGrid}>{/* Service cards */}</div>
          </motion.div>
        </section>

        <section id="contact" className={styles.section}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.contact}
          >
            <h2>Get in Touch</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Phone className={styles.icon} />
                  <p>+1 234 567 890</p>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.icon} />
                  <p>contact@photography.com</p>
                </div>
                <div className={styles.contactItem}>
                  <MapPin className={styles.icon} />
                  <p>123 Photography St, City</p>
                </div>
                <div className={styles.contactItem}>
                  <Instagram className={styles.icon} />
                  <p>@photographystudio</p>
                </div>
              </div>
              <form className={styles.contactForm}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" rows="5" />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Page;
