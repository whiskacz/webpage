import './skills.scss'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {margin:"-100px"});

  const frontendIcons = [ '/images/frontend/react.svg', '/images/frontend/js.svg', '/images/frontend/typescript.svg', '/images/frontend/html.svg',  '/images/frontend/css.svg',  '/images/frontend/sass.svg', '/images/frontend/tailwind.svg', '/images/frontend/bootstrap.svg','/images/frontend/wordpress.svg',]

  const backendIcons = [ '/images/backend/nodejs.svg', '/images/backend/express.svg', '/images/backend/mongodb.svg', '/images/backend/docker.svg',  '/images/backend/restApi.svg',  '/images/backend/jest.svg']

  const otherIcons = [ '/images/other/git.svg', '/images/other/autocad.svg', '/images/other/canva.svg', '/images/other/scrum.svg',  '/images/other/photoshop.svg',  '/images/other/gimp.svg' ]

  const panelVariants = {
    initial: {
        y: -1000,
    },
    animate: {
        y: 0,
        transition:{
            type: "spring",
            damping: 10,
            stiffness: 50,
            staggerChildren: 0.5
        },
    },
  };

  
  const iconsVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition:{
          delayChildren: 2,
          staggerChildren: 0.2
        },
    },
  };

  return (
    <div 
    className="skillsContainer"
    ref={ref}
    >
      <motion.div 
      className='skillsWrapper' 
      variants={panelVariants}
      initial="initial"
      animate={isInView ? "animate" : "hidden"}>
          <motion.div 
          className='frontendContainer flexStyle'
          variants={panelVariants}>
            <div className='panelTitle'>
              Frontend
            </div>
            <motion.div 
            className='icoContainer'
            variants={iconsVariants}>
              {frontendIcons.map((element, index) =>{
                return(
                  <motion.img 
                  key={index}
                  src={element} 
                  alt="frontendIco"
                  variants={iconsVariants} 
                  whileHover={{
                    scale: 1.3, 
                    cursor: "pointer"}}/>
                )
              })}
            </motion.div>
          </motion.div>
          <motion.div 
          className='backendContainer flexStyle'
          variants={panelVariants}>
            <div className='panelTitle'>
              Backend
            </div>
            <motion.div 
            className='icoContainer'
            variants={iconsVariants}>
              {backendIcons.map((element, index) =>{
                return(
                  <motion.img 
                  key={index}
                  src={element} 
                  alt="backendIco"
                  variants={iconsVariants} 
                  whileHover={{
                    scale: 1.3, 
                    cursor: "pointer"}}/>
                )
              })}
            </motion.div>
          </motion.div>
          <motion.div 
          className="otherContainer flexStyle"
          variants={panelVariants}>
            <div className='panelTitle'>
              Other
            </div>
            <motion.div 
            className='icoContainer'
            variants={iconsVariants}>
              {otherIcons.map((element, index) =>{
                return(
                  <motion.img 
                  key={index}
                  src={element} 
                  alt="otherIco"
                  variants={iconsVariants} 
                  whileHover={{
                    scale: 1.3, 
                    cursor: "pointer"}}/>
                )
              })}
            </motion.div>
          </motion.div>
          <motion.div
          className='skillsTitle flexStyle'
          variants={panelVariants}>
              Skills breakdown         
          </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills