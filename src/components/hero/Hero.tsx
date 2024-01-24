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

  return (
    <div className='main'>
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
        

        <div className='icoContainer'>
            <a href="">
                <FaInstagram />
            </a>
            <a href="">
                <FaLinkedinIn />
            </a>
            <a href="">
                <FaGithub />
            </a>        
        </div>
    </div>
  );
}

export default Hero;
