import './appPreview.scss';
import { Variants, motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const AppPreview = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {margin:"-100px"});

  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/mm1.jpg', '/images/mm2.jpg', '/images/mm3.jpg', '/images/mm4.jpg'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000);

    setTimeout(() => {
      setCurrentImage(1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const text1Variants: Variants = {
      initial: {
          x: -500,
          opacity: 0
      },
      animate: {
          x: 0,
          opacity: 1,
          transition:{
              delay:0.8,
              duration:1,
          },
      },
  };

  const text2Variants: Variants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            delay:2.8,
            duration:1,
        },
    },
  };

  return (
    <div className='appPreviewContainer' ref={ref}>
      <div className='titleContainer'>
        Checkout cool{" "} 
        <span>MovieManager</span>
        {" "}App
        <span>{" "}!{" "}</span>
      </div>
      <div className='infoContainer'>
        <div className="textContainer">
          <motion.div
            variants={text1Variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"} 
            className='text'
            >The proprietary Movie Manager application has been developed using cutting-edge <span className='specialText'>React</span> technologies, incorporating functional components, <span className='specialText'>React Router</span> handling, <span className='specialText'>Redux</span>, and implemented with <span className='specialText'>Typescript</span> and <span className='specialText'>Tailwind</span>.
          </motion.div>
          <motion.div
            variants={text2Variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}  
            className='text'
            >The application leverages data obtained from the <span className='specialText'>TMDB API</span>. Additionally, it allows users to create new accounts and private film collections, ensuring data input validation and encrypted data transmission. Furthermore, the application includes a private server built with <span className='specialText'>Express.js</span>, serving to handle data stored in an external <span className='specialText'>MongoDB</span> database.
          </motion.div>
        </div>
        <motion.img
            key={currentImage}
            src={images[currentImage]}
            className='imgContainer'
            alt='MovieManager photo'
            variants={textVariants}
            initial='hidden'
            animate='visible'
            whileHover={{
              scale:1.3,
              cursor:"pointer"}}
        />    
      </div>
    </div>

  )
}

export default AppPreview