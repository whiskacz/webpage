import './contact.scss';
import { GoArrowRight } from 'react-icons/go';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const handleEmailClick = () => {
    window.location.href = 'mailto:pawel@blasiak.info';
  };

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 3.2,
      },
    },
  };

  return (
    <motion.div
      className="contactContainer"
      ref={ref}
      variants={textVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'hidden'}
    >
      <motion.span className="title" variants={textVariants}>
        Let's talk.
      </motion.span>

      <motion.div
        className="mailAnimation"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <svg
          width="300px"
          height="300px"
          viewBox="-0.5 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ duration: 3 }}
            strokeWidth={0.3}
            d="M2.8 4C1.86451 4 1.0468 4.46923 0.544325 5.16792C0.20074 5.64567 0 6.23499 0 6.86667V17.1333C0 18.682 1.21964 20 2.8 20H10.2C10.7523 20 11.2 19.5523 11.2 19C11.2 18.4477 10.7523 18 10.2 18H2.8C2.39214 18 2 17.6466 2 17.1333V7.94766L7.77948 14.3096C8.96986 15.6199 11.0301 15.6199 12.2205 14.3096L18 7.94766V12.1333C18 12.6856 18.4477 13.1333 19 13.1333C19.5523 13.1333 20 12.6856 20 12.1333V6.86667C20 6.235 19.7993 5.64567 19.4557 5.16792C18.9532 4.46923 18.1355 4 17.2 4H2.8ZM9.25983 12.9647L2.9327 6H17.0673L10.7402 12.9647C10.3434 13.4015 9.65662 13.4015 9.25983 12.9647ZM18.2929 21.2929C17.9024 21.6834 17.9024 22.3166 18.2929 22.7071C18.6834 23.0976 19.3166 23.0976 19.7071 22.7071L22.7071 19.7071C23.0976 19.3166 23.0976 18.6834 22.7071 18.2929L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L19.5858 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H19.5858L18.2929 21.2929Z"
            fill="#251351"
          />
        </svg>
      </motion.div>

      <motion.div className="detailsContainer" variants={textVariants}>
        <span>Share your excitement.</span>
        <motion.span
          onClick={handleEmailClick}
          whileHover={{
            color: 'var(--indigo)',
            cursor: 'pointer',
          }}
        >
          pawel@blasiak.info <GoArrowRight />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
