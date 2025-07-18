import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ProductsDropdown = () => {
  const dropdownItems = [
    { id: 1, title: "Wallets", link: "/wallet" },
    { id: 2, title: "Utility Bills", link: "#" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="lg:absolute bg-gray-800 text-[#fff] lg:rounded-xl lg:shadow-lg mt-2 flex flex-col p-2 space-y-2 lg:w-[10vw] w-[100%] lg:top-12 -left-[5vw]"
    >
      {dropdownItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className="text-[14px] hover:bg-gray-600 hover:rounded-xl p-3 transition-all duration-300 ease-in-out lg:border-none border-b-2 border-[#404040]"
        >
          {item.title}
        </NavLink>
      ))}
    </motion.div>
  );
};

export default ProductsDropdown;
