import { motion, useScroll, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './parallax.scss';

function Parallax() {

  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end end"]
  })
  useEffect(() => {
    const updateScale = (value: number) => {
      const scaledValue = parseFloat(value.toFixed(2))*6 + 1;
      console.log(`postęp przewijania ${scaledValue}`);
      
      // Używamy animate do płynnej zmiany wartości scale
      controls.start({ scale: scaledValue });
    };

    const unsubscribe = scrollYProgress.onChange(updateScale);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, controls]);

  return (
    <motion.div ref={ref} className='parallaxContainer'>
      <motion.img 
      src="/src/images/oval.png" 
      alt="ovalPNG" 
      className='backgroundOval element'
      animate={controls}
      />
      {/* <img src="/src/images/backgroundMain.jpg" alt="backgroundMain" className='backgroundMain element' />
      <img src="/src/images/mount1.png" alt="mount1" className='mount1 element' />
      <img src="/src/images/mount2.png" alt="mount2" className='mount2 element' /> */}
    </motion.div>
  )
}

export default Parallax