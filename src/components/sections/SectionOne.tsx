import { ArrowUpDown, CaretUpDown, RedDot, SendIcon } from "../svgs/Icons";

const SectionOne = () => {
  return (
    <div className="relative border border-[#ccc] rounded-2xl w-[90vw] mx-auto mt-10">
      {/* background attachment */}
      <div className="absolute left-0 top-0">
        <RedDot />
      </div>
      <div className="p-14 flex justify-between items-center">
        <div className="w-[45%] z-10">
          <h1 className="text-[96px] font-semibold">No Fees.</h1>
          <h2 className="text-[96px] font-semibold">One World.</h2>
          <p className="text-[24px] font-medium mt-10">
            Whether you're supporting your family, investing in a brighter
            future, or just sending love across the miles — you deserve a
            platform that cares as much as you do.
          </p>
        </div>
        <div className="w-[45%]">
          <h2 className="text-[20px] font-semibold mb-4">Send Money</h2>

          <div className="flex flex-col space-y-3 items-center">
            <div className="w-[100%] flex justify-between items-center border border-[#ccc] p-6 rounded-2xl">
              <div className="">
                <h3 className="text-[14px] font-medium">You Send</h3>
                <p className="text-[40px] font-semibold">0.00</p>
              </div>
              <div className="flex space-x-3 items-center">
                <p className="text-[20px]">| AUD</p>
                <CaretUpDown />
              </div>
            </div>
            <ArrowUpDown />
            <div className="w-[100%] flex justify-between items-center border border-[#ccc] p-6 rounded-2xl">
              <div className="">
                <h3 className="text-[14px] font-medium">Recipient Gets</h3>
                <p className="text-[40px] font-semibold">0.00</p>
              </div>
              <div className="flex space-x-3 items-center">
                <p className="text-[20px]">| NIG</p>
                <CaretUpDown />
              </div>
            </div>
          </div>

          <div className="w-[100%] px-3 pt-10 pb-4">
            <div className="flex justify-between">
              <span className="text-[14px] font-medium">By Exchange Rate</span>
              <span className="text-[14px] font-medium">
                1.00 AUD = 116.78 NGN
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] font-medium">Transaction Fee</span>
              <span className="text-[14px] font-medium">1.00 AUD</span>
            </div>
          </div>

          <div className="py-4 px-10 w-[100%] my-6 rounded-xl text-[10p] font-medium bg-[#5A6B80]">
            <span>
              This rate is for new customers only. One per customer. Limited
              time offer. Rates are subject to change. Promotional FX rate
              applies to first £200. See Terms & Conditions for details
            </span>
          </div>

          <button className="bg-[#EF2D57] py-6 px-10 w-[100%] cursor-pointer flex items-center justify-center space-x-3 rounded-xl">
            <span className="text-[20px] font-semibold">Send Now</span>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
