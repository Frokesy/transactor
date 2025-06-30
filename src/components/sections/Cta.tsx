import { AppStoreIcon, PlaystoreIcon } from "../svgs/Icons";

const Cta = () => {
  return (
    <div className="w-[90vw] mx-auto mb-20">
      <h2 className="lg:text-[66px] text-[34px] leading-tight font-bold text-center lg:w-[80%] mb-20 mx-auto">
        Ready for the Transactor Experience?
      </h2>
      <div className="flex lg:flex-row flex-col justify-between lg:space-x-10">
        <div className="bg-[#fff] lg:pt-14 pt-6 lg:px-10 px-4 rounded-2xl lg:w[50%]">
          <h2 className="lg:text-[40px] text-[24px] font-semibold text-[#000]">
            Download for iOS
          </h2>
          <p className="text-[16px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>

          <button className="flex items-center space-x-3 lg:my-10 my-4 bg-[#0328EE] lg:px-10 px-6 py-4 rounded-full">
            <AppStoreIcon />
            <span className="lg:text-[18px] font-semibold uppercase">
              App Store
            </span>
          </button>

          <div className="flex items-center justify-center">
            <img
              src="/assets/iPhones.png"
              alt="iOS Download"
              className="lg:w-[458px] lg:h-[435px]"
            />
          </div>
        </div>

        <div className="bg-[#fff] lg:pt-14 pt-6 lg:mt-0 mt-10 lg:px-10 px-4 rounded-2xl lg:w[50%]">
          <h2 className="lg:text-[40px] text-[24px] font-semibold text-[#000]">
            Download for Android
          </h2>
          <p className="text-[16px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>

          <button className="flex items-center space-x-3 lg:my-10 my-4 bg-[#0328EE] lg:px-10 px-6 py-4 rounded-full">
            <PlaystoreIcon />
            <span className="lg:text-[18px] font-semibold uppercase">
              Play Store
            </span>
          </button>

          <div className="flex items-center justify-center">
            <img
              src="/assets/android.png"
              alt="Android Download"
              className="lg:w-[458px] lg:h-[435px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
