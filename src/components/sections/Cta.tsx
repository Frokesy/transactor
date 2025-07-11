import { AppStoreIcon, PlaystoreIcon } from "../svgs/Icons";

const Cta = () => {
  return (
    <div className="w-[90vw] mx-auto lg:pt-10 mb-20">
      <h2 className="lg:text-[70px] text-[38px] leading-tight font-bold text-center lg:w-[70%] mb-10 mx-auto">
        Ready for the Transactor Experience?
      </h2>
      <div className="flex lg:flex-row flex-col justify-between lg:space-x-10">
        <div className="bg-[#fff] lg:pt-14 pt-6 lg:px-10 px-4 rounded-2xl flex flex-col justify-center items-center lg:w[50%]">
          <h2 className="lg:text-[48px] text-center text-[24px] font-semibold text-[#000]">
            Download for iOS
          </h2>
          <p className="lg:text-[18px] text-center lg:w-[70%] mx-auto text-[14px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>

          <button className="flex items-center space-x-3 lg:my-10 my-6 bg-[#0328EE] lg:px-10 px-6 lg:py-4 py-3 rounded-full">
            <AppStoreIcon />
            <span className="lg:text-[18px] font-semibold uppercase">
              App Store
            </span>
          </button>

          <div className="flex items-center justify-center">
            <img
              src="/assets/iPhones.png"
              alt="iOS Download"
              className="lg:w-[458px] lg:h-[435px] w-[250px]"
            />
          </div>
        </div>

        <div className="bg-[#fff] mt-10 lg:mt-0 lg:pt-14 pt-6 lg:px-10 px-4 rounded-2xl flex flex-col justify-center items-center lg:w[50%]">
          <h2 className="lg:text-[48px] text-center text-[24px] font-semibold text-[#000]">
            Download for Android
          </h2>
          <p className="lg:text-[18px] text-center lg:w-[70%] mx-auto text-[14px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>

          <button className="flex items-center space-x-3 lg:my-10 my-6 bg-[#0328EE] lg:px-10 px-6 lg:py-4 py-3 rounded-full">
            <PlaystoreIcon />
            <span className="lg:text-[18px] font-semibold uppercase">
              Play Store
            </span>
          </button>

          <div className="flex items-center justify-center">
            <img
              src="/assets/android.png"
              alt="Android Download"
              className="lg:w-[458px] lg:h-[435px] w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
