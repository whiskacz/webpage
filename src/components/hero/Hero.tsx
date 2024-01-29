import './hero.scss';
import { Variants, motion, useInView } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import scrollIco from "/images/scroll-bottom-icon.svg"

const Hero = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin:"-100px"});

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
    <div className='heroContainer' ref={ref}>
        <motion.div className='title' 
        variants={leftVariants}
        initial="initial"
        animate={isInView ? "animate" : "hidden"}>
        The future is 
        </motion.div>

        <motion.div className='now'
        variants={rightVariants}
        initial="initial"
        animate={isInView ? "animate" : "hidden"}>
        now
        </motion.div>

        <motion.img 
        variants={leftVariants}
        animate={isInView ? "scrollButton" : "hidden"}
        src={scrollIco} alt="scroll ico" />

        <motion.div 
        className="sliderContainer" 
        variants={sliderVariants} 
        initial="initial" 
        animate={isInView ? "animate" : "hidden"}>
        Paweł Błasiak
        </motion.div>
        
        <motion.div 
        className='icoContainer'
        variants={icoVariants}
        initial="initial"
        animate={isInView ? "animate" : "hidden"}>
            <motion.a 
            href="https://www.instagram.com/_pawelblasiak_/"
            target="_blank"
            variants={icoVariants}
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}}>
                <FaInstagram />
            </motion.a>
            <motion.a 
            href="https://www.linkedin.com/in/paweł-błasiak-5795612b1"
            target="_blank"
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}}>
                <FaLinkedinIn />
            </motion.a>
            <motion.a 
            href="https://github.com/whiskacz"
            target="_blank"
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
