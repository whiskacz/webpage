import { motion } from 'framer-motion';
import starsBackground from './starsBackground.jpg'; // Zaimportowanie obrazu

const Main = () => {
  return (
    <motion.div
      className="background"
      style={{
        backgroundImage: `url(${starsBackground})`, // Użycie zaimportowanego obrazu
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        overflow: 'hidden',
      }}
      animate={{
        x: [0, 100, 0, -100, 0], // Animacja po osi X
        y: [0, 50, 100, 50, 0], // Animacja po osi Y
      }}
      transition={{
        duration: 5, // Czas trwania animacji w sekundach
        ease: 'linear', // Wybrany rodzaj animacji - tutaj liniowy
        loop: Infinity, // Powtarzanie w nieskończoność
      }}
    />
  );
}

export default Main;
