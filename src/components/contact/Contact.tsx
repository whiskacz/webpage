import './contact.scss';
import { GoArrowRight } from "react-icons/go";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {margin:"-100px"});
  const handleEmailClick = () => {
    window.location.href = 'mailto:pawel@blasiak.info';
  };

  const textVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition:{
          delayChildren: 0.5,
          staggerChildren: 1
        },
    },
  };  

  return (
    <div className='contactContainer' ref={ref}>
        <motion.div 
        className="textContainer"
        variants={textVariants}
        initial="initial"
        animate={isInView ? "animate" : "hidden"}>
            <motion.span 
            className='title'
            variants={textVariants}>
            Let's talk.
            </motion.span>
            <motion.div 
            className='detailsContainer'
            variants={textVariants}>
                <span>Share your excitement.</span>
                <motion.span
                onClick={handleEmailClick}
                whileHover={{
                  color:"var(--indigo)",
                  cursor:"pointer"}}
                >
                pawel@blasiak.info <GoArrowRight /></motion.span>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Contact