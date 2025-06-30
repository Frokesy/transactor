import { EmailNewsletterIcon } from "../svgs/Icons";

const Newsletter = () => {
  return (
    <div className="bg-[#EF2D57] lg:py-20 py-10 mt-20">
      <div className="w-[90vw] mx-auto flex lg:flex-row flex-col justify-between items-center">
        <div className="flex lg:flex-row flex-col items-center space-x-6">
          <EmailNewsletterIcon />
          <p className="text-white lg:text-[34px] leading-tight text-[24px] lg:w-[70%] lg:text-start text-center lg:mt-0 mt-4 font-bold">
            Subscribe to our news weekly newsletter
          </p>
        </div>
        <div className="bg-[#fff] p-3 flex items-center rounded-full mt-6 lg:mt-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-none outline-none text-[#333]"
          />
          <button className="bg-[#010725] uppercase text-white px-4 lg:py-3 py-1 rounded-full text-[12px] lg:text-[14px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
