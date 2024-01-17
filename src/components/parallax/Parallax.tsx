import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './parallax.scss';

function Parallax() {

  let scrollYProgressValue: number = 0
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end end"]
  })
useEffect(() => {
    // Nasłuchiwanie zmian w scrollYProgress
    const updateOpacity = (value: number) => {
      scrollYProgressValue = parseFloat(value.toFixed(2)) + 1
      console.log(`postęp przewijania ${scrollYProgressValue}`);
    };

    const unsubscribe = scrollYProgress.onChange(updateOpacity);

    // Oczyszczanie nasłuchiwacza przy odmontowywaniu komponentu
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <motion.div ref={ref} className='parallaxContainer'>
      <img 
      src="/src/images/oval.png" 
      alt="ovalPNG" 
      className='backgroundOval element'
      style={{ transform: `scale(${scrollYProgressValue})` }}
      />
      {/* <img src="/src/images/backgroundMain.jpg" alt="backgroundMain" className='backgroundMain element' />
      <img src="/src/images/mount1.png" alt="mount1" className='mount1 element' />
      <img src="/src/images/mount2.png" alt="mount2" className='mount2 element' /> */}
    </motion.div>
  )
}

export default Parallax