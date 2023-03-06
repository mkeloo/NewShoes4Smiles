import React from 'react';
import JoinUsPic from './JoinUsPic';
import JoinUs from './JoinUs';
import Socials from './Socials';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.4 }}
    >
      <JoinUsPic />
      <JoinUs />
      <Socials />
    </motion.section>
  );
};

export default GetInvolved;
