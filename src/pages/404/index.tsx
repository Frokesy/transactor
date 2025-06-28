import { NavLink } from "react-router-dom";
import { RedDotTwo } from "../../components/svgs/Icons";

const NotFound = () => {
  return (
    <div className="bg-[#010725] max-h-screen overflow-hidden text-[#fff]">
      <div className="absolute lg:block hidden left-0 top-0">
        <RedDotTwo />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="lg:text-[180px] z-10 text-[66px] font-bold">404</h1>
        <p className="lg:text-[42px] text-[28px] z-10">Page not found</p>
        <p className="lg:text-[20px] px-6 lg:px-0 lg:text-start z-10 text-center my-6">
          The page you're looking for can't be found. Double-check the URL and
          try again. Or click the button below.
        </p>
        <NavLink
          to="/"
          className="bg-[#EF2D57] my-3 py-4 px-20 font-semibold z-10 uppercase rounded-xl"
        >
          Go Home
        </NavLink>
      </div>
      <div className="absolute right-0 bottom-0 lg:block hidden">
        <RedDotTwo />
      </div>
    </div>
  );
};

export default NotFound;
