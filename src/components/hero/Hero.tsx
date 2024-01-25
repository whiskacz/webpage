import './hero.scss';
import { Variants, motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {

    const leftVariants: Variants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition:{
                duration:0.5,
            },
        },
        scrollButton: {
            opacity: 1,
            y: 20,
            transition:{
                duration:1,
                repeat:Infinity
            }
        }
    };

    const rightVariants: Variants = {
        initial: {
            x: 500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition:{
                delay:0.3,
                duration:0.5,
            },
        },
    };


    const sliderVariants: Variants = {
        initial: {
            x: 2000,
        },
        animate: {
            x: "-210%",   
            transition: {
                repeat: Infinity,
                repeatType:"loop",
                duration: 20,
            },
        },
    }

    const icoVariants = {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 0.3,
            staggerChildren: 0.3,
          },
        },
    }

  return (
    <div className='heroContainer'>
        <motion.div className='title' 
        variants={leftVariants}
        initial="initial"
        animate="animate">
        The future is 
        </motion.div>

        <motion.div className='now'
        variants={rightVariants}
        initial="initial"
        animate="animate">
        now
        </motion.div>

        <motion.img 
        variants={leftVariants}
        animate="scrollButton"
        src="src/images/scroll-bottom-icon.svg" alt="scroll ico" />

        <motion.div 
        className="sliderContainer" 
        variants={sliderVariants} initial="initial" 
        animate="animate">
        Paweł Błasiak
        </motion.div>
        
        <motion.div 
        className='icoContainer'
        variants={icoVariants}
        initial="initial"
        animate="animate">
            <motion.a 
            href=""
            variants={icoVariants}
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}}>
                <FaInstagram />
            </motion.a>
            <motion.a 
            href=""
            variants={icoVariants}
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}}>
                <FaLinkedinIn />
            </motion.a>
            <motion.a 
            href=""
            variants={icoVariants}
            whileHover={{scale:1.3}} 
            whileTap={{scale: 0.9}}>
                <FaGithub />
            </motion.a>        
        </motion.div>
    </div>
  );
}

export default Hero;
