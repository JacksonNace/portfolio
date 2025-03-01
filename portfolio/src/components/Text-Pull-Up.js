'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export function LettersPullUp({ text, className = '' }) {
  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {splittedText.map((current, i) => (
        <motion.span
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className="inline-block"
        >
          {current === ' ' ? <span>&nbsp;</span> : current}
        </motion.span>
      ))}
    </div>
  );
}
