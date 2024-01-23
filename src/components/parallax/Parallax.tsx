import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import './parallax.scss';

const Parallax = () => {

  const ref = useRef(null);

  const isInView = useInView(ref, {margin:"-100px"});


  const ovalVariant = {
    hidden: {
      scale:1,
    },
    visible: {
      scale: 5,
      transition: {
        duration: 3,
        delay: 2,
      },
    },
  };

  // const mount1Variant = {
  //   hidden: {
  //     x:0,
  //     y:0,
  //   },
  //   visible: {
  //     x:600,
  //     y:500,
  //     transition: {
  //       duration: 4,
  //       delay: 2.1,
  //     },
  //   },
  // };

  // const mount2Variant = {
  //   hidden: {
  //     x:0,
  //     y:0,
  //   },
  //   visible: {
  //     x:-600,
  //     y:1500,
  //     transition: {
  //       duration: 2.5,
  //       delay: 2.2,
  //     },
  //   },
  // };

  const backgroundMain1Variant = {
    hidden: {
      y:0,
    },
    visible: {
      y:-300,
      transition: {
        ease: "easeOut",
        duration: 4,
        delay: 0.8,
      },
    },
  };

  const backgroundMain2Variant = {
    hidden: {
      y:0,
    },
    visible: {
      y:-800,
      transition: {
        ease: "easeOut",
        duration: 3,
        delay: 0.3,
      },
    },
  };

  const cloud1Variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 3,
      },
    },
    moving: {
      x: ['20vw', '-40vw'],
      transition: {
        ease: 'linear',
        duration: 80,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  }

  const cloud2Variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 3.5,
      },
    },
    moving: {
      x: ['10vw', '-25vw'],
      transition: {
        ease: 'linear',
        duration: 130,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  }

  const textVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
    moving: {
      x: "-200%",   
        transition: {
            repeat: Infinity,
            repeatType:"loop" as const,
            duration: 15,
        },
    },
  }

  return (
    <div className="parallaxContainer" ref={ref}>
      <motion.img
        src="/src/images/oval.png"
        alt="backgroundOval"
        className="backgroundOval"
        variants={ovalVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        />
      {/* <motion.img 
        src="/src/images/mount1.png" 
        alt="mount1" 
        className='mount1'
        variants={mount1Variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        />
        <motion.img 
        src="/src/images/mount2.png" 
        alt="mount1" 
        className='mount2'
        variants={mount2Variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        /> */}
        <motion.img 
        src="/src/images/cloud1.png" 
        alt="cloud1" 
        className='cloud1'
        variants={cloud1Variant}
        initial="hidden"
        animate={isInView ? ["visible", "moving"] : "hidden"}
        />
        <motion.img 
        src="/src/images/cloud2.png" 
        alt="cloud2" 
        className='cloud2'
        variants={cloud2Variant}
        initial="hidden"
        animate={isInView ? ["visible", "moving"] : "hidden"}
        />
        <motion.img 
        src="/src/images/backgroundMain1.png" 
        alt="backgroundMain1" 
        className='backgroundMain1'
        variants={backgroundMain1Variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        />
        <motion.img 
        src="/src/images/backgroundMain2.png" 
        alt="backgroundMain2" 
        className='backgroundMain2'
        variants={backgroundMain2Variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        />
        <motion.div
        className="title"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? ["visible", "moving"] : "hidden"}
        >Parallax is here!</motion.div>

    </div>
  )
}

export default Parallax