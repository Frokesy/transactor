import { NavLink } from "react-router-dom";
import { RedDotTwo } from "../../components/svgs/Icons";

const NotFound = () => {
  return (
    <div className="bg-[#010725] h-screen text-[#fff]">
      <div className="absolute left-0 top-0">
        <RedDotTwo />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-[180px] font-bold">404</h1>
        <p className="text-[42px]">Page not found</p>
        <p className="text-[20px] my-6">
          The page you're looking for can't be found. Double-check the URL and
          try again. Or click the button below.
        </p>
        <NavLink
          to="/"
          className="bg-[#EF2D57] my-3 py-4 px-20 font-semibold uppercase rounded-xl"
        >
          Go Home
        </NavLink>
      </div>
      <div className="absolute right-0 bottom-0">
        <RedDotTwo />
      </div>
    </div>
  );
};

export default NotFound;
