import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    content: "Simplicity"
  },
  {
    id: 2,
    content: "Clarity"
  }
];

const Test01 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2350);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute" }}
        >
          {items[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Test01;