import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const location = useLocation();

  return (
    <div className="bg-[#010725] min-h-screen text-[#fff] overflow-hidden">
      <Header />

      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Container;
