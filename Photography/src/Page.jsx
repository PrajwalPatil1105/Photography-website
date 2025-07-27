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
  BookCheck,
  X,
  Code,
  User
} from "lucide-react";
import { SiWhatsapp,SiInstagram } from "react-icons/si";
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
    "./Images/NH1.jpg",
    "./Images/NH2.jpg",
    "./Images/NH3.jpg",
    "./Images/NH4.jpg",
    "./Images/NH5.jpg",
    "./Images/NH6.jpg",
    "./Images/NH8.jpg",
    "./Images/NH9.jpg",
    "./Images/NH11.jpg",
    "./Images/Newm3.png",
    "./Images/MI1.jpg",
    "./Images/MI2.jpg",
    "./Images/MI3.jpg",
    "./Images/MI4.jpg",
    "./Images/MI5.jpg",
    "./Images/MI6.jpg",
    "./Images/MI7.jpg",
    "./Images/MI8.jpg",
    "./Images/MI9.jpg",
    "./Images/SER1.jpg",
    "./Images/SER2.jpg",
    "./Images/SER3.jpg",
    "./Images/SER4.jpg",
    "./Images/SER6.jpg",
    "./Images/Port3.jpg",
    "./Images/Port2.jpg",
    "./Images/Port4.jpg",
    "./Images/Port7.jpg",
    "./Images/Port8.jpg",
    "./Images/Port10.jpg",
    "./Images/Port9.jpg"
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
      <div className={styles.preloaderContent}>
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
          <Loader2 className={styles.spinner} size={40} />
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
      className={styles.preloader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.imageGrid}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={styles.preloaderImageWrapper}
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
        className={styles.logoContainer}
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
          delay: 1.5,
          duration: 2,
        }}
      >
        <div className={styles.logoWrapper}>
        <img src="./Images/Logo.png" alt="Logo" className={styles.logo} />
        <p className={styles.ownername}>Vaibhav Photography</p>
        </div>
        <div className={styles.midlind}></div>
        <div className={styles.tags}>
          <h3>Capturing Life's Beautiful Moments</h3>
          <p>Professional Photography Services</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
const DeveloperCard = ({ isDarkMode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    checkScreenSize(); // run on mount
    window.addEventListener('resize', checkScreenSize); 

    return () => {
      window.removeEventListener('resize', checkScreenSize); 
    };
  }, []);

  useEffect(() => {
   const portfolioSection = document.getElementById("about") || document.getElementById("contact");
  if (!portfolioSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setShowCard(entry.isIntersecting);
      });
    },
    {
      threshold: isMobile ? 0.3 : 0.5, 
      rootMargin: isMobile ? '0px 0px -20% 0px' : '0px'
    }
  );

  observer.observe(portfolioSection);

  return () => {
    observer.disconnect();
  };
}, [isMobile]); 

  return (
    <>
      <AnimatePresence>
        {showCard && (
          <motion.div
            className={styles.developerCardFloat}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.button
              onClick={() => setIsPopupOpen(true)}
              className={styles.developerButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.developerButtonContent}>
                <Code size={24} />
                <span className={styles.developerButtonText}></span>
              </div>
              
              {!isMobile && (
        <div className={styles.developerTooltip}>
          Developer Info
          <div className={styles.tooltipArrow} />
        </div>
      )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className={styles.developerPopupOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              className={styles.developerPopup}
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsPopupOpen(false)}
                className={styles.closeButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={18} />
              </motion.button>

              {/* Main Card Content */}
              <div className={styles.developerCard}>
                {/* Header Section */}
                <div className={styles.cardHeader}>
                  
                  <motion.div
                    className={styles.profileImage}
                    // initial={{ scale: 0, rotate: -180 }}
                    // animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    {/* Replace this with your actual image */}
                    {/* <User size={32} color="#ffffff" /> */}
                    
                    <img src="./Images/MyPic2.png" alt="Prajwal Patil" />
                   
                    {/* <div className={styles.statusIndicator}></div> */}
                  </motion.div>
                  
                  <motion.div
                    className={styles.profileInfo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                     <h5 className={styles.developerTitle2}>Designed and Developed By</h5>
                    <h3 className={styles.developerName}>Prajwal Patil</h3>
                    <p className={styles.developerTitle}>Software Engineer</p>
                  </motion.div>
                </div>

                {/* Content Section */}
                <motion.div
                  className={styles.cardContent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  
                  {/* Social Media Links */}
                  <div className={styles.socialLinks}>
                    <motion.a
                      href="https://wa.me/your-number"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialButton} ${styles.whatsapp}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <SiWhatsapp size={20} />
                    </motion.a>

                    <motion.a
                      href="https://instagram.com/your-handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialButton} ${styles.instagram}`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.4 }}
                    >
                      <SiInstagram size={20} />
                    </motion.a>

                    <motion.a
                      href="mailto:your-email@example.com"
                      className={`${styles.socialButton} ${styles.email}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.4 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Credits Footer */}
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const DesktopImages = [
    "./Images/NH1.jpg",
    "./Images/NH2.jpg",
    "./Images/NH3.jpg",
    "./Images/NH4.jpg",
    "./Images/NH5.jpg",
    "./Images/NH6.jpg",
    "./Images/HP7.png",
    "./Images/m1.png",
    "./Images/NH8.jpg",
    "./Images/NH9.jpg",
    "./Images/HP6.png",
    "./Images/NH11.jpg",
    "./Images/Newm3.png",
  ];

  const MobileImages = [
    "./Images/MI1.jpg",
    "./Images/MI2.jpg",
    "./Images/MI3.jpg",
    "./Images/MI4.jpg",
    "./Images/MI5.jpg",
    "./Images/MI6.jpg",
    "./Images/HP6.png",
    "./Images/MI7.jpg",
    "./Images/MI8.jpg",
    "./Images/MI9.jpg",
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
      title: "Beautiful memory of colorful streets",
      subtitle: "Street Photography",
      description: "The times that shape the essence of who we are— Nikhil and Shreya, with each step through the colorful streets of town, are building moments that will forever define them. From playful banter to moments of shared quiet, every second spent together is weaving the very fabric of their love, one unforgettable memory at a time.",
      image: "./Images/Port7.jpg"
    },
    {
      title: "Awaiting a new member",
      subtitle: "Baby Shower",
      description: "Nisha and Rohan eagerly await the arrival of their first bundle of joy. Surrounded by blessings, laughter, and the gentle flutter of anticipation, their baby shower celebrates new beginnings, nurturing dreams, and the love that's already blooming for their little one.",
      image: "./Images/Port8.jpg"
    },
    {
      title: "Divine Innocence",
      subtitle: "Baby Photoshoot",
      description: "Meet baby Dhru — a radiant little soul with eyes full of wonder and a heart that reflects purity. With a natural pull toward the divine, his calm gaze seems to hold centuries of peace. This session captures not just his cuteness but a presence that feels almost spiritual, as if the divine rests gently within him.",
      image: "./Images/Port10.jpg"
    },
    {
      title: "Complete with Love",
      subtitle: "Family Photography",
      description: "The joy of a complete family, wrapped in laughter, tiny hands, and shared memories. These portraits freeze time for a moment, capturing the everyday magic between parents and child. Because when hearts are full and smiles are genuine, happiness isn't posed — it's lived.",
      image: "./Images/Port9.jpg"
    }
  ];

  const homeImages = isMobile ? MobileImages : DesktopImages;

  const sections = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll-based active section detection - FIXED VERSION
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for nav height
      
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const carouselVariants = {
    enter: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      rotateY: direction === "right" ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.4 },
        scale: { duration: 0.6 },
        rotateY: { duration: 0.6 }
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      rotateY: direction === "right" ? -15 : 15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 },
        rotateY: { duration: 0.4 }
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
    <div className={isDarkMode ? styles.darkTheme : styles.lightTheme}>
      <AnimatePresence>{loading && <PreLoader />}</AnimatePresence>
      
      {/* Navigation */}
      <nav className={styles.nav}>
        <motion.div
          className={styles.navContent}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.5 }}
        >
          <motion.div
            className={styles.logoContainer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={isDarkMode ? "./Images/Logo.png" : "./Images/Logo2.png"}
              alt="Logo"
              className={styles.logo}
            />
          </motion.div>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {sections.map(({ id, label }) => (
              <motion.button
                key={id}
                className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ''}`}
                onClick={() => scrollToSection(id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
            
            <div className={styles.socialLinks}>
              <motion.a
                href="https://instagram.com/vaibhav_photography"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              
              <motion.a
                href="https://wa.me/919482527676"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiWhatsapp size={20} />
              </motion.a>
            </div>
            
            <motion.button
              className={styles.themeToggle}
              onClick={toggleTheme}
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

      <main className={styles.main} style={{backgroundImage: `url(${isDarkMode ? "./Images/BC7.jpg" : "./Images/Background2.jpg"})`}}>
        {/* Home Section */}
        <section id="home" className={styles.section}>
          <div className={styles.carousel}>
            <div className={styles.imageContainer}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  className={styles.carouselImageWrapper}
                  custom={direction}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img 
                    src={homeImages[currentIndex]} 
                    alt={`Portfolio ${currentIndex + 1}`}
                    className={styles.carouselImage}
                  />
                  <div className={styles.imageOverlay} />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              className={`${styles.arrow} ${styles.left}`}
              onClick={handlePrevious}
             
              whileTap={{ scale: 0.9 }}
            >
              &#x276E;
            </motion.button>

            <motion.button
              className={`${styles.arrow} ${styles.right}`}
              onClick={handleNext}
            
              whileTap={{ scale: 0.9 }}
            >
              &#x276F;
            </motion.button>

            <div className={styles.heroContent}>
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.5, duration: 0.8 }}
              >
                Your Vision. Our Lens.
              </motion.h1>
              <motion.p
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.8, duration: 0.8 }}
              >
                Professional Photography Services
              </motion.p>
            </div>

            <div className={styles.imageIndicators}>
              {homeImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
                  onClick={() => {
                    const newDirection = index > currentIndex ? "left" : "right";
                    setDirection(newDirection);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className={styles.portfolio}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={styles.sectionHeading}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Portfolio
            </motion.h2>
            
            <div className={styles.portfolioStories}>
              {portfolioStories.map((story, index) => (
                <motion.div
                  key={index}
                  className={styles.storyCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className={styles.storyImage}>
                    <motion.img 
                      src={story.image} 
                      alt={story.title}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className={styles.storyContent}>
                    <motion.h3 
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {story.title}
                    </motion.h3>
                    <motion.h4 
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {story.subtitle}
                    </motion.h4>
                    <motion.p 
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {story.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.services}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={styles.sectionHeading}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h2>
            
            <div className={styles.serviceGrid}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={styles.serviceImageContainer}>
                    <img 
                      src={service.image} 
                      alt={service.name}
                    />
                    <div className={styles.serviceOverlay} />
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>{service.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.about}>
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={styles.sectionHeading}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>

            <motion.div
              className={styles.aboutLogo}
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
            >
              <img 
                src={isDarkMode ? "./Images/Logo.png" : "./Images/Logo2.png"} 
                alt="Logo" 
                className={styles.logo} 
              />
              <p className={styles.ownername2}>Vaibhav Photography</p>
            </motion.div>

            <motion.div
              className={styles.aboutText}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p>
                With a passion for capturing life's most precious moments, I specialize in 
                creating timeless memories through the art of photography. From intimate family 
                portraits to grand wedding celebrations, every shot tells a unique story.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.contact}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={styles.sectionHeading}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Contact Me
            </motion.h2>
            <p>Below are the details to reach out to me!</p>
            
            <div className={styles.contactGrid}>
              {[
                { icon: MapPin, title: "ADDRESS", content: "Chikodi, Karnataka, India" },
                { icon: Phone, title: "CONTACT NUMBER", content: "+91 94825276" },
                { icon: Mail, title: "EMAIL ADDRESS", content: "prajwalapat5@gmail.com" },
                { icon: BookCheck, title: "Google Form", content: "Help Us To Reach You Out" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={styles.contactItem}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={styles.iconWrapper}>
                    <item.icon className={styles.icon} size={24} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Thank You Section */}
        <section id="thankyou" className={styles.thankyouContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.thankyouHeading}>Thank You</h2>
            <p className={styles.thankyouMessage}>
              We truly appreciate your interest in our services. Feel free to reach out—we're excited to connect with you!
            </p>
          </motion.div>
        </section>
      </main>

      {/* Developer Card */}
      <DeveloperCard isDarkMode={isDarkMode} />
    </div>
  );
};

export default Page;