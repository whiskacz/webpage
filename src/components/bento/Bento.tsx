import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import './bento.scss'

const Bento = () => {

    const ref = useRef(null);

    const isInView = useInView(ref, {margin:"-100px"});

    const wouldVariant = {
        hidden: {
            y:-1000,
        },
        visible: {
            y:0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 50,
                duration: 1,
                delay: 0.5,
            },
        },
    };
    const youVariant = {
        hidden: {
            y:1000,
        },
        visible: {
            y:0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 50,
                duration: 1,
                delay: 1,
            },
        },
    };
    const likeVariant = {
        hidden: {
            x:1000,
        },
        visible: {
            x:0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 50,
                duration: 1,
                delay: 1.3,
            },
        },
    };
    const toVariant = {
        hidden: {
            opacity:0,
        },
        visible: {
            opacity:1,
            transition: {
                duration: 0.3,
                delay: 2.2,
            },
        },
    };
    const tasteVariant = {
        hidden: {
            x:-1000,
        },
        visible: {
            x:0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 50,
                duration: 1,
                delay: 2.4,
            },
        },
    };
    const someVariant = {
        hidden: {
            x:1000,
        },
        visible: {
            x:0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 50,
                duration: 1,
                delay: 2.8,
            },
        },
    };
    const bentoVariant = {
        hidden: {
            opacity:0,
        },
        visible: {
            opacity:1,
            transition: {
                duration: 0.3,
                delay: 4.3,
            },
        },
    };
    const questionVariant = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 5.5,
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse" as const,
          },
        },
      }
      const icoVariant = {
        hidden: {
          opacity: 0,
          rotate: 0,
        },
        visible: {
          opacity: 1,
          rotate: 360, // Obrót o 360 stopni, gdy staje się widoczne
          transition: {
            rotate: {
              repeat: Infinity,
              duration: 5,
              ease: "linear", // Opcjonalnie: Ustawienie funkcji łagodzenia dla płynniejszego obrotu
            },
            opacity: {
              duration: 0, // Natychmiastowe przejście dla opacity
              delay: 6, // Opóźnienie 6 sekund przed pojawieniem się ikony
            },
          },
        },
      };
  return (
    <div className='bentoContainer' ref={ref}>
        <div className="bentoGrid">
            <motion.div
                variants={wouldVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                would
            </motion.div>
            <motion.div
                variants={youVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                you
            </motion.div>
            <motion.div
                variants={likeVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                like
            </motion.div>
            <motion.div
                variants={toVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                to
            </motion.div>
            <motion.div
                variants={tasteVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                taste
            </motion.div>
            <motion.div
                variants={someVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                some
            </motion.div>
            <motion.div
                variants={bentoVariant}
                initial="hidden"
                className="bento"
                animate={isInView ? "visible" : "hidden"}>
                BENTO
                    <motion.div
                    variants={questionVariant}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}>
                    ?</motion.div>
            </motion.div>
            <motion.img 
                src="/images/bentoIco.svg" 
                alt="bentoIco"
                className="bentoIco" 
                variants={icoVariant}
                initial="hidden"
                animate={isInView ? ["visible", "moving"] : "hidden"}
            />

        </div>
    </div>
  )
}

export default Bento