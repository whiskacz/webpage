import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './parallax.scss';

function Parallax() {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  use
  const ovalAnimation = useTransform(scrollYProgress, [0,1], ["0%","100%"])

  const numericScrollProgress = ovalAnimation.get();
  console.log(`scroll progress ${numericScrollProgress}`)
  return (
    <div ref={ref} className='parallaxContainer'>
      <motion.img 
      src="/src/images/oval.png" 
      alt="ovalPNG" 
      className='backgroundOval element'
      style={{ transform: `scale(${1 + numericScrollProgress})` }}
      />
      {/* <img src="/src/images/backgroundMain.jpg" alt="backgroundMain" className='backgroundMain element' />
      <img src="/src/images/mount1.png" alt="mount1" className='mount1 element' />
      <img src="/src/images/mount2.png" alt="mount2" className='mount2 element' /> */}
    </div>
  )
}

export default Parallax