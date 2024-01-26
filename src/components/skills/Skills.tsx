import './skills.scss'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {margin:"-100px"});

  const frontendIcons = [ '/src/images/frontend/react.svg', '/src/images/frontend/js.svg', '/src/images/frontend/typescript.svg', '/src/images/frontend/html.svg',  '/src/images/frontend/css.svg',  '/src/images/frontend/sass.svg', '/src/images/frontend/tailwind.svg', '/src/images/frontend/bootstrap.svg','/src/images/frontend/wordpress.svg',]

  const backendIcons = [ '/src/images/backend/nodejs.svg', '/src/images/backend/express.svg', '/src/images/backend/mongodb.svg', '/src/images/backend/docker.svg',  '/src/images/backend/restApi.svg',  '/src/images/backend/jest.svg']

  const otherIcons = [ '/src/images/other/git.svg', '/src/images/other/autocad.svg', '/src/images/other/canva.svg', '/src/images/other/scrum.svg',  '/src/images/other/photoshop.svg',  '/src/images/other/gimp.svg' ]

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