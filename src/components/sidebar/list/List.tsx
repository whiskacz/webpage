import { motion } from 'framer-motion';

const List = () => {

  const pages = [
    "Homepage",
    "Parallax",
    "Bento",
    "Skills",
    "Contact"
  ];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1
      },
    },
  };

  const iremVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="list" variants={variants}>
      {pages.map((item) => (
        <motion.a 
        href={`#${item}`} 
        key={item} 
        variants={iremVariants} 
        whileHover={{scale:1.2}} 
        whileTap={{scale: 0.9}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default List