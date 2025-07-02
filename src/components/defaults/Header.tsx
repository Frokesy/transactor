import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDown, Hamburger } from "../svgs/Icons";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CompanyDropdown from "../dropdowns/companyDropdown";
import ProductsDropdown from "../dropdowns/productsDropdown";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  return (
    <>
      <div className="py-4 border-b-2 border-[#ccc] z-50 relative">
        <div className="w-[90vw] mx-auto flex justify-between items-center">
          <NavLink to="/" className="lg:text-[40px] text-[24px] font-semibold">
            Transactor
          </NavLink>

          {/* Desktop Nav */}
          <div className="space-x-10 uppercase text-[14px] lg:flex hidden items-center">
            <NavLink to="#">Send Money</NavLink>
            <div className="relative">
              <div
                className="space-x-3 flex items-center cursor-pointer"
                onClick={() => {
                  setShowCompanyDropdown((prev) => !prev);
                  setShowProductsDropdown(false);
                }}
              >
                <span
                // className={`${active === "Programmes" && "text-[#00689E] font-semibold"}`}
                >
                  Company
                </span>
                <CaretDown />
              </div>
              <AnimatePresence>
                {showCompanyDropdown && <CompanyDropdown />}
              </AnimatePresence>
            </div>

            <div className="relative">
              <div
                className="space-x-3 flex items-center cursor-pointer"
                onClick={() => {
                  setShowProductsDropdown((prev) => !prev);
                  setShowCompanyDropdown(false);
                }}
              >
                <span
                // className={`${active === "Programmes" && "text-[#00689E] font-semibold"}`}
                >
                  Products
                </span>
                <CaretDown />
              </div>
              <AnimatePresence>
                {showProductsDropdown && <ProductsDropdown />}
              </AnimatePresence>
            </div>

            <NavLink to="/resources">Resources</NavLink>
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
            className="fixed top-0 right-0 h-full w-[80%] bg-gray-800 z-50 shadow-lg px-6 py-6"
          >
            <div className="flex justify-between items-center mb-8">
              <NavLink to="/" className="text-[24px] font-semibold">
                Transactor
              </NavLink>
              <button onClick={() => setIsDrawerOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-[15px] uppercase font-medium">
              <NavLink to="#" onClick={() => setIsDrawerOpen(false)}>
                Send Money
              </NavLink>
              <div className="relative">
                <div
                  className="space-x-3 flex items-center cursor-pointer justify-between"
                  onClick={() => {
                    setShowCompanyDropdown((prev) => !prev);
                    setShowProductsDropdown(false);
                  }}
                >
                  <span
                  // className={`${active === "Programmes" && "text-[#00689E] font-semibold"}`}
                  >
                    Company
                  </span>
                  <CaretDown />
                </div>
                <AnimatePresence>
                  {showCompanyDropdown && <CompanyDropdown />}
                </AnimatePresence>
              </div>

              <div className="relative">
                <div
                  className="space-x-3 flex items-center cursor-pointer justify-between"
                  onClick={() => {
                    setShowProductsDropdown((prev) => !prev);
                    setShowCompanyDropdown(false);
                  }}
                >
                  <span
                  // className={`${active === "Programmes" && "text-[#00689E] font-semibold"}`}
                  >
                    Products
                  </span>
                  <CaretDown />
                </div>
                <AnimatePresence>
                  {showProductsDropdown && <ProductsDropdown />}
                </AnimatePresence>
              </div>

              <NavLink to="/resources" onClick={() => setIsDrawerOpen(false)}>
                Resources
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
