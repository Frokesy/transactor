import { Australia, Ghana, Kenya, Nigeria, Zambia } from "../svgs/Flags";

const SupportedCountries = () => {
  return (
    <>
      <div className="flex justify-center items-center lg:mt-[10vh] mt-10">
        <h2 className="text-[#fff] lg:text-[60px] text-[20px] font-semibold text-center">
          Supported Countries
        </h2>
      </div>
      <div className="w-[98vw] mx-auto mt-10 overflow-hidden">
        <div className="flex items-center scroll-content scroll-animation">
          <div className="flex items-center space-x-10 lg:space-x-20 lg:scale-100 scale-75">
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Australia />
              <span className="text-[30px] font-semibold">Australia</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Nigeria />
              <span className="text-[30px] font-semibold">Nigeria</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Ghana />
              <span className="text-[30px] font-semibold">Ghana</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Zambia />
              <span className="text-[30px] font-semibold">Zambia</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Kenya />
              <span className="text-[30px] font-semibold">Kenya</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Australia />
              <span className="text-[30px] font-semibold">Australia</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Nigeria />
              <span className="text-[30px] font-semibold">Nigeria</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Ghana />
              <span className="text-[30px] font-semibold">Ghana</span>
            </div>
            <div className="flex items-center space-x-3 border border-[#ccc] rounded-lg p-3">
              <Zambia />
              <span className="text-[30px] font-semibold">Zambia</span>
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
