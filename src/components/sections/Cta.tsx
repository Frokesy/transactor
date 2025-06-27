import { AppStoreIcon, PlaystoreIcon } from "../svgs/Icons";

const Cta = () => {
  return (
    <div className="w-[90vw] mx-auto mb-20">
      <h2 className="text-[66px] font-bold text-center w-[80%] mb-20 mx-auto">
        Ready for the Transactor Experience?
      </h2>
      <div className="flex justify-between space-x-10">
        <div className="bg-[#fff] pt-14 px-10 rounded-2xl w[50%]">
          <h2 className="text-[40px] font-semibold text-[#000]">
            Download for iOS
          </h2>
          <p className="text-[16px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>

          <button className="flex items-center space-x-3 my-10 bg-[#0328EE] px-10 py-4 rounded-full">
            <AppStoreIcon />
            <span className="text-[18px] font-semibold uppercase">
              App Store
            </span>
          </button>

          <div className="flex items-center pt-10 justify-center">
            <img
              src="/assets/iPhones.png"
              alt="iOS Download"
              className="w-[458px] h-[435px]"
            />
          </div>
        </div>

        <div className="bg-[#fff] pt-14 px-10 rounded-2xl w[50%]">
          <h2 className="text-[40px] font-semibold text-[#000]">
            Download for Android
          </h2>
          <p className="text-[16px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>

          <button className="flex items-center space-x-3 my-10 bg-[#0328EE] px-10 py-4 rounded-full">
            <PlaystoreIcon />
            <span className="text-[18px] font-semibold uppercase">
              Play Store
            </span>
          </button>

          <div className="flex items-center pt-10 justify-center">
            <img
              src="/assets/android.png"
              alt="Android Download"
              className="w-[458px] h-[435px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
