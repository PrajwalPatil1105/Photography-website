import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Menu,
  Sun,
  Moon,
  MessageCircle,
  Loader2,
  BookCheck
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import styles from "./Page.module.css";
const ImagePreloader = ({ onLoadComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const allImages = [
    "./Images/m1.png",
    "./Images/m2.png",
    "./Images/m3.png",
    "./Images/m4.png",
    "./Images/m5.png",
    "./Images/m6.png",
    "./Images/HP8.png",
    "./Images/HP3.png",
    "./Images/HP1.png",
    "./Images/HP4.png",
    "./Images/HP5.png",
    "./Images/HP6.png",
    "./Images/HP22.png",
    "./Images/HP7.png",
    "./Images/Logo.png",
    "./Images/Logo2.png",
    // Service placeholder images
    "./Images/family.jpg",
    "./Images/maternity.jpg",
    "./Images/engagement.jpg",
    "./Images/marriage.jpg",
    "./Images/prewedding.jpg",
    "./Images/modeling.jpg",
    // Portfolio images
    "./Images/Port1.jpg",
    "./Images/Port2.jpg",
    "./Images/Port3.jpg",
  ];
 useEffect(() => {
    let loadedCount = 0;
    const totalImages = allImages.length;

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve();
        };
        img.src = src;
      });
    };

    Promise.all(allImages.map(loadImage)).then(() => {
      setTimeout(onLoadComplete, 1000);
    });
  }, [onLoadComplete]);

  return (
     <motion.div
        className={styles.imagePreloader}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.preloaderConten}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            You Almost Reached the Best Photography Website
          </motion.h2>
          <motion.div
            className={styles.loaderContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Loader2 className={styles.spinner} size={40} color="white" />
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p>{Math.round(loadingProgress)}% loaded</p>
          </motion.div>
        </div>
      </motion.div>
  );
};

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
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="imageGrid">
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
        className="logo"
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
        <p className="ownername">Vaibhav Photography</p>
      </motion.div>
      <motion.div
        className="tags"
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
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
    "./Images/HP22.png",
    "./Images/HP7.png",
  ];

  const services = [
    { name: "Family Photoshoot", image: "./Images/SER1.jpg" },
    { name: "Maternity Photoshoot", image: "./Images/SER2.jpg" },
    { name: "Engagement Photoshoot", image: "./Images/SER3.jpg" },
    { name: "Marriage Photoshoot", image: "./Images/SER4.jpg" },
    { name: "Pre Wedding Shoot", image: "./Images/m3.png" },
    { name: "Modeling Photoshoot", image: "./Images/SER6.jpg" },
  ];

  const portfolioStories = [
    {
      title: "A Moment of Joy and Love",
      subtitle: "Wedding Celebration",
      description: "Akshaya's radiant smile and bright red attire exude happiness and excitement. Her traditional jewelry and flower garlands add a touch of elegance. The couple's hands clasped together suggest a deep connection and a shared journey.",
      image: "./Images/Port3.jpg"
    },
    {
      title: "Glowing with Love",
      subtitle: "Haldi Ceremony",
      description: "Glowing with love and haldi, marking the beginning of a beautiful journey. The golden hues of turmeric blend with the warmth of family love, creating memories that sparkle with joy and tradition.",
      image: "./Images/Port2.jpg"
    },
    {
      title: "A Moment of happiness",
      subtitle: "Pre Wedding Shoot",
      description: "Sneha & Justin are a couple whose love story is as vibrant as the colors of their wedding to be. Their pre wedding shoot was a beautiful blend of tradition and modernity, filled with laughter, joy, and unforgettable moments.",
      image: "./Images/Port4.jpg"
    },
    {
      title: "Beautifull memory of colorful streets",
      subtitle: "Street Photography",
      description: "The times that shape the essence of who we are— Nikhil and Shreya, with each step through the colorful streets of town, are building moments that will forever define them. From playful banter to moments of shared quiet, every second spent together is weaving the very fabric of their love, one unforgettable memory at a time.",
      image: "./Images/Port7.jpg"
    },
    {
      title: "Awaiting a new member",
      subtitle: "Baby Shower",
      description: "Nisha and Rohan eagerly await the arrival of their first bundle of joy. Surrounded by blessings, laughter, and the gentle flutter of anticipation, their baby shower celebrates new beginnings, nurturing dreams, and the love that’s already blooming for their little one.",
      image: "./Images/Port8.jpg"
    },
    {
      title: "Divine Innocence",
      subtitle: "Baby Photoshoot",
      description: "Meet baby Dhru — a radiant little soul with eyes full of wonder and a heart that reflects purity. With a natural pull toward the divine, his calm gaze seems to hold centuries of peace. This session captures not just his cuteness but a presence that feels almost spiritual, as if the divine rests gently within him.",
      image: "./Images/Port10.jpg"
    },
    {
      title: " Complete with Love",
      subtitle: "Family Photography",
      description: "The joy of a complete family, wrapped in laughter, tiny hands, and shared memories. These portraits freeze time for a moment, capturing the everyday magic between parents and child. Because when hearts are full and smiles are genuine, happiness isn’t posed — it’s lived.",
      image: "./Images/Port9.jpg"
    }
  ];

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  useEffect(() => {
    document.body.className = isDarkMode ? "darkTheme" : "lightTheme";
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
        duration: 0.8,
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
    if (!loading) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, loading]);

  if (!imagesLoaded) {
    return <ImagePreloader onLoadComplete={() => setImagesLoaded(true)} />;
  }

  return (
    <div className={isDarkMode ? "darkTheme" : "lightTheme"}>
      <AnimatePresence>{loading && <PreLoader />}</AnimatePresence>
      
      <nav className={`nav ${isDarkMode ? "darkTheme" : "lightTheme"}`}>
        <motion.div
          className="navContent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.5 }}
        >
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={isDarkMode ? "./Images/Logo.png" : "./Images/Logo2.png"}
              alt="Logo"
            />
          </motion.div>

          <div className={`navLinks ${isMenuOpen ? "active" : ""}`}>
            {sections.map(({ id, label }) => (
              <motion.button
                key={id}
                className={`navLink ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollToSection(id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
            
            <div className="socialLinks">
              <motion.a
                href="https://instagram.com/vaibhav_photography"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              
              <motion.a
                href="https://wa.me/919482527676"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiWhatsapp size={20} />
              </motion.a>
            </div>
            
            <motion.button
              className="themeToggle"
              onClick={toggleTheme}
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <button
            className="menuButton"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </motion.div>
      </nav>

      <main className="main">
        <section id="home" className="section">
          <div className="carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="imageContainer"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <img 
                  src={homeImages[currentIndex]} 
                  alt={`Portfolio ${currentIndex + 1}`}
                  className="carouselImage"
                />
              </motion.div>
            </AnimatePresence>
            <button
              className="arrow left"
              onClick={handlePrevious}
            >
              &#x276E;
            </button>
            <button
              className="arrow right"
              onClick={handleNext}
            >
              &#x276F;
            </button>
          </div>
          <div className="mobilescreen"   style={isDarkMode ? { color: "#fff" } : { color: "#111" }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 0.8 }}
            
            >
              Your Vision. Our Lens.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.8, duration: 0.8 }}
            >
              Professional Photography Services
            </motion.p>
          </div>
        </section>

        <section id="portfolio" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="portfolio"
          >
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Portfolio
            </motion.h2>
            
            <div className="portfolioStories">
              {portfolioStories.map((story, index) => (
                <motion.div
                  key={index}
                  className="storyCard"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="storyImage">
                    <img src={story.image} alt={story.title} />
                  </div>
                  <div className="storyContent">
                    <h3>{story.title}</h3>
                    <h4>{story.subtitle}</h4>
                    <p>{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="services" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="services"
          >
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h2>
            
            <div className="serviceGrid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="serviceCard"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="serviceImageContainer">
                    <img src={service.image} alt={service.name} />
                  </div>
                  <h3>{service.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="section">
         <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="about"
>
  <motion.h2
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    About Us
  </motion.h2>

  <motion.div
    className="logo"
    initial={{
      scale: 0,
      rotate: -5,
      opacity: 0,
      filter: "blur(50px)",
    }}
    whileInView={{
      scale: 1,
      rotate: 0,
      opacity: 1,
      filter: "blur(0px)",
    }}
    viewport={{ once: true }}
    transition={{
      delay: 0.5, 
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    }}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginTop: "-1rem",
      marginLeft: "29rem",
    }}
  >
    <img src={isDarkMode ?`./Images/Logo.png`:`./Images/Logo2.png`} alt="Logo" style={{ width: "200px", height: "auto" }} />
    <p className="ownername" style={{ marginTop: "0.1rem", marginLeft:"3em",fontSize:"1em", fontWeight: "400", marginBottom: "1rem",color: "#a79090" }}>
      Vaibhav Photography
    </p>
  </motion.div>

  <div className="aboutContent">
    <p>
      With a passion for capturing life's most precious moments, I specialize in 
      creating timeless memories through the art of photography. From intimate family 
      portraits to grand wedding celebrations, every shot tells a unique story.
    </p>
  </div>
</motion.div>

          
        </section>

        <section id="contact" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact"
          >
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Contact Me
            </motion.h2>
            <p>Below are the details to reach out to me!</p>
            <div className="contactGrid">
              <motion.div 
                className="contactItem"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="iconWrapper">
                  <MapPin className="icon" />
                </div>
                <h4>ADDRESS</h4>
                <p>Chikodi, Karnataka, India</p>
              </motion.div>
              <motion.div 
                className="contactItem"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="iconWrapper">
                  <Phone className="icon" />
                </div>
                <h4>CONTACT NUMBER</h4>
                <p>+91 94825276</p>
              </motion.div>
              <motion.div 
                className="contactItem"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="iconWrapper">
                  <Mail className="icon" />
                </div>
                <h4>EMAIL ADDRESS</h4>
                <p>prajwalapat5@gmail.com</p>
              </motion.div>
              <motion.div 
                className="contactItem"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="iconWrapper">
                  <BookCheck className="icon" />
                </div>
                <h4>Google Form</h4>
                <p>Help Us To Reach You Out</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap");

        :root {
          --primary-font: "Poppins", sans-serif;
          --heading-font: "Playfair Display", serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: var(--primary-font);
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

         .imagePreloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #111 0%, #222 100%);
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .preloaderContent {
          text-align: center;
          color: #fff;
        }

        .preloaderContent h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          background: linear-gradient(45deg, #ffd700, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }

        .loaderContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .spinner {
          animation: spin 1s linear infinite;
          color: #ffd700;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        
        .progressBar {
          width: 300px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .progressFill {
          height: 100%;
          background: linear-gradient(45deg, #ffd700, #ff6b6b);
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .preloaderContent p {
          color: #fff;
          font-size: 1rem;
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }

        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #111;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          position: absolute;
          width: 90%;
          max-width: 1200px;
        }

        .imageGrid img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(7, 7, 7, 0.3);
        }

        .darkTheme {
          --bg-primary: #111;
          --bg-secondary: #222;
          --text-primary: #fff;
          --text-secondary: #ccc;
          --nav-bg: rgba(17, 17, 17, 0.95);
          --input-bg: rgba(34, 34, 34, 0.8);
          --card-bg: rgba(255, 255, 255, 0.05);
        }

        .lightTheme {
          --bg-primary: #fff;
          --bg-secondary: #f5f5f5;
          --text-primary: #111;
          --text-secondary: #444;
          --nav-bg: rgba(255, 255, 255, 0.95);
          --input-bg: rgba(245, 245, 245, 0.8);
          --card-bg: rgba(0, 0, 0, 0.05);
        }

        .logo {
          width: 220px;
          height: auto;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
        }

        .ownername {
          width: 15em;
          text-align: left;
          font-size: 1.2em;
        }

        .logo img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .tags {
          margin-top: 2em;
          color: #a79090;
          text-align: center;
        }

        .mobilescreen {
          display: flex;
          flex-direction: column;
          text-align: center;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, -50%);
          // z-index: 10;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }

        .mobilescreen h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
          // background: linear-gradient(45deg, #ffd700, #ff6b6b);
          -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: var(--nav-bg);
          transition: background-color 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 200;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }

        .menuButton {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .navContent {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navContent .logo {
          width: 80px;
          height: auto;
        }

        .navLinks {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .navLink {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border: none;
          background: none;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .navLink::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #ffd700, #ff6b6b);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .navLink:hover {
          color: #ffd700;
        }

        .navLink:hover::after,
        .navLink.active::after {
          width: 100%;
        }

        .socialLinks {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .socialLink {
          color: var(--text-primary);
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .socialLink:hover {
          color: #ffd700;
          background: var(--card-bg);
        }

        .main {
          padding-top: 80px;
        }

        .section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        }

        .carousel {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .imageContainer {
          position: absolute;
          width: 100%;
          height: 91%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carouselImage {
          width: 95%;
          height: 95%;
          // padding: 1rem;
          object-fit: cover;
          border-radius: 8px;
          // z-index: 100;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(26, 26, 26, 0.2);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          cursor: pointer;
          z-index: 101;
          transition: background 0.3s ease;
        }

        .arrow:hover {
          background: rgba(0, 0, 0, 0.5);
          transform: translateY(-50%) scale(1.1);
        }

        .left {
          left: 20px;
        }

        .right {
          right: 20px;
        }

        .portfolio,
        .services,
        .contact,
        .about {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          margin-top: 6rem;
        }

        h2 {
          font-family: arial, sans-serif;
          font-size: 3rem;
          margin-bottom: 3rem;
          text-align: center;
          background: linear-gradient(45deg, #ffd700, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .portfolioStories {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .storyCard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          padding: 2rem;
          background: var(--card-bg);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .storyCard:nth-child(even) {
          direction: rtl;
        }

        .storyCard:nth-child(even) .storyContent {
          direction: ltr;
        }

        .storyImage {
          width: 100%;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .storyImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .storyCard:hover .storyImage img {
          transform: scale(1.05);
        }

        .storyContent h3 {
          font-size: 2rem;
          font-family: var(--text-secondary);
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .storyContent h4 {
          font-size: 1.2rem;
          color: #2ddef3;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .storyContent p {
          font-size: 0.9rem;
          font-wight: 100;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .serviceCard {
          background: var(--card-bg);
          border-radius: 15px;
          padding: 1.5rem;
          padding-bottom: 0.2rem;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .serviceCard:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .serviceImageContainer {
          width: 100%;
          height: 350px;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .serviceImageContainer img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .serviceCard:hover .serviceImageContainer img {
          transform: scale(1.1);
        }

        .serviceCard h3 {
          font-size: 1rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .about {
          text-align: center;
        }

        .aboutContent {
          max-width: 800px;
          margin: 0 auto;
        }

        .aboutContent p {
          font-size: 1rem;
          line-height: 1.6;
          margin-top: 1rem;
          color: var(--text-secondary);
        }

        .contact p {
          font-size: 1.2rem;
          margin-bottom: 40px;
          text-align: center;
        }

        .contact h2 {
          font-size: 2.5rem;
          font-weight: bold;
        }

        .contactGrid {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .contactItem {
          padding: 20px 20px;
          text-align: center;
          width: 300px;
          background: var(--card-bg);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .contactItem:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .iconWrapper {
          background: linear-gradient(45deg, rgb(167, 144, 144));
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          box-shadow: 0 5px 15px rgba(103, 102, 101, 0.3);
        }

        .icon {
          color: #fff;
          font-size: 2rem;
        }

        .contactItem h4 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .contactItem p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .themeToggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .themeToggle:hover {
          background: var(--card-bg);
          color: #ffd700;
        }

        @media (max-width: 768px) {
          .imageGrid {
            grid-template-columns: repeat(2, 1fr);
            width: 95%;
          }

          .menuButton {
            display: block;
          }

          .imageGrid img {
            height: 150px;
          }

          .navLinks {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--nav-bg);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .navLinks.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .socialLinks {
            order: -1;
          }

          .contactGrid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .mobilescreen h1 {
            font-size: 2.5rem;
          }

          .mobilescreen p {
            font-size: 1rem;
          }

          .storyCard {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .storyCard:nth-child(even) {
            direction: ltr;
          }

          .serviceGrid {
            grid-template-columns: 1fr;
          }

          h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .mobilescreen h1 {
            font-size: 2rem;
          }

          .tags {
            margin-top: 1.2em;
            font-size: 0.9em;
          }

          .arrow {
            width: 50px;
            height: 50px;
            font-size: 14px;
          }

          .left {
            left: 10px;
          }

          .right {
            right: 10px;
          }

          .storyImage {
            height: 250px;
          }

          .serviceImageContainer {
            height: 150px;
          }

          .preloaderContent h2 {
            font-size: 1.5rem;
          }

          .progressBar {
            width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;