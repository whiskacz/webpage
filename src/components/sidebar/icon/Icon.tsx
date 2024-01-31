import { motion } from  'framer-motion'

const Icon: React.FC<any> = ({setOpen}) => {
  return (
    <button className="icon" onClick={()=> setOpen((prev: boolean) => !prev)}>
        <svg width="40" height="40" viewBox="0 0 22 22">
        <motion.path
          id="path1"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          id="path2"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          id="path3"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  )
}

export default Icon