import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4 border-b-2 border-[#ccc]">
      <div className="w-[90vw] mx-auto flex justify-between items-center">
        <h1 className="text-[40px] font-semibold">Transactor</h1>
        <div className="space-x-10 uppercase text-[14px] flex items-center">
          <span>Products</span>
          <NavLink to="/wallet">Wallet</NavLink>
          <NavLink to="/about">Company</NavLink>
          <NavLink to="/help">Help</NavLink>
        </div>
        <div className="flex items-center space-x-6 uppercase text-[16px] font-semibold">
          <button className="uppercase">Login</button>
          <button className="bg-[#EF2D57] py-3 px-10 uppercase rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
