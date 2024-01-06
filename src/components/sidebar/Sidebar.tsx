
import './sidebar.scss';
import List from './list/List';
import Icon from './icon/Icon';
import { useState } from 'react';
import { motion } from 'framer-motion'

const Sidebar = () => {

  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(50px at 70px 70px)",
      transtion: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }


  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className="background" variants={variants}>
          <List />
        </motion.div>
        <Icon setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar