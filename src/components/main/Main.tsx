import Sidebar from '../sidebar/Sidebar';
import './main.scss';
import { motion } from 'framer-motion'

const Main = () => {

    const leftVariants = {
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

    const rightVariants = {
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


    const sliderVariants = {
        initial: {
            x: 2000,
        },
        animate: {
            x: "-210%",   
            transition: {
                repeat:Infinity,
                repeatType:"loop",
                duration: 20,
            },
        },
    }

  return (
    <div className='main'>
        <Sidebar />
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
    </div>
  );
}

export default Main;
