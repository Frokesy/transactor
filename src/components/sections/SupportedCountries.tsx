import { Kenya } from "../svgs/Flags";

const SupportedCountries = () => {
  return (
    <>
      <div className="flex justify-center items-center lg:mt-[10vh] mt-10">
        <h2 className="text-[#fff] lg:text-[60px] text-[12px] font-semibold text-center">
          Supported Countries
        </h2>
      </div>
      <div className="w-[98vw] mx-auto mt-10 overflow-hidden">
        <div className="flex items-center scroll-content scroll-animation">
          <div className="flex items-center space-x-10 lg:space-x-20 lg:scale-100 scale-75">
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportedCountries;
