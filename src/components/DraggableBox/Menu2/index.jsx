import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';

const Menu2 = ({ showNewMenu, setShowNewMenu, }) => {
  const [selected, setSelected] = useState(null);
  const controls = useAnimation();
  const correctAnswerIndex = 1; // The correct answer is "المدينة المنورة"

  useEffect(() => {
    if (showNewMenu) {
      controls.start('visible');
    } else {
      setSelected(null)
      controls.start('hidden');
    }
  }, [controls, showNewMenu]);

  const handleClickAnswer = (index) => {
    setSelected(index);
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  const crossVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <>
      {showNewMenu && (
        <div className={styles.layer} onClick={() => setShowNewMenu(false)} />
      )}
      <motion.div
        initial="hidden"
        animate={controls}
        className={styles.container}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: '20%', opacity: 1 },
          hidden: { y: '-100%', opacity: 0 },
        }}
        style={{
          position: 'fixed',
          top: '9%',
          left: '5%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '600px',
          border: '1px solid #E0E0E0',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)',
          borderRadius: '13px',
          zIndex: 1000,
        }}
        id="menu"
        dir="rtl"
      >
        <div className="Navbar">
          <div className={styles.img_container}>
            <img src="/assets/imgs/002.png" alt="" />
          </div>
          <div className="ButtonGroup">
            <span className="CloseIcon" onClick={() => setShowNewMenu(false)}>
              <img src="/assets/imgs/003.png" alt="" />
            </span>
          </div>
        </div>

        <div className={styles.menu_container}>
          <div className={styles.question}>
            <h2>أين تقع قصور عروة؟</h2>
          </div>
          <div className={styles.options}>
            <ul>
              {['تبوك', 'المدينة المنورة', 'الطائف'].map((option, index) => (
                <li key={index} onClick={() => handleClickAnswer(index)}>
                  <button
                    className={`${
                      // selected !== null && index === correctAnswerIndex ? styles.correct : '' 
                      index !== correctAnswerIndex && selected === index && styles.wrong}`}
                    style={{
                      backgroundColor:
                        selected !== null && index === correctAnswerIndex
                          ? 'lightgreen'
                          : 'white',
                    }}
                  >
                    {option}
                    {selected !== null && (
                      <span className={styles.icon}>
                        {index === correctAnswerIndex && selected === index && (
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="green"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.svgIcon}
                            initial="hidden"
                            animate="visible"
                            variants={checkmarkVariants}
                          >
                            <motion.path
                              d="M5 13l4 4L19 7"
                              variants={checkmarkVariants}
                            />
                          </motion.svg>
                        )}
                        {index !== correctAnswerIndex && selected === index && (
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="red"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.svgIcon}
                            initial="hidden"
                            animate="visible"
                            variants={crossVariants}
                          >
                            <motion.path
                              d="M18 6L6 18"
                              variants={crossVariants}
                            />
                            <motion.path
                              d="M6 6l12 12"
                              variants={crossVariants}
                            />
                          </motion.svg>
                        )}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu2;

