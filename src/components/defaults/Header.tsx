import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "../svgs/Icons";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="py-4 border-b-2 border-[#ccc] z-50 relative">
        <div className="w-[90vw] mx-auto flex justify-between items-center">
          <NavLink to="/" className="lg:text-[40px] text-[24px] font-semibold">
            Transactor
          </NavLink>

          {/* Desktop Nav */}
          <div className="space-x-10 uppercase text-[14px] lg:flex hidden items-center">
            <span>Products</span>
            <NavLink to="/wallet">Wallet</NavLink>
            <NavLink to="/about">Company</NavLink>
            <NavLink to="/help">Help</NavLink>
          </div>

          <div className="lg:flex hidden items-center space-x-6 uppercase text-[16px] font-semibold">
            <button className="uppercase">Login</button>
            <button className="bg-[#EF2D57] py-3 px-10 uppercase rounded-xl">
              Get Started
            </button>
          </div>

          {/* Hamburger Icon */}
          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Hamburger />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[80%] bg-gray-700 z-50 shadow-lg px-6 py-6"
          >
            <div className="flex justify-between items-center mb-8">
              <NavLink to="/" className="text-[24px] font-semibold">
                Transactor
              </NavLink>
              <button onClick={() => setIsDrawerOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-[16px] uppercase font-medium">
              <span>Products</span>
              <NavLink to="/wallet" onClick={() => setIsDrawerOpen(false)}>
                Wallet
              </NavLink>
              <NavLink to="/about" onClick={() => setIsDrawerOpen(false)}>
                Company
              </NavLink>
              <NavLink to="/help" onClick={() => setIsDrawerOpen(false)}>
                Help
              </NavLink>
            </div>

            <div className="mt-10 flex flex-col space-y-4">
              <button className="uppercase border py-2 rounded-xl">
                Login
              </button>
              <button className="bg-[#EF2D57] py-3 px-6 uppercase rounded-xl text-white">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
