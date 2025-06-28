import { EmailNewsletterIcon } from "../svgs/Icons";

const Newsletter = () => {
  return (
    <div className="bg-[#EF2D57] py-20 mt-20">
      <div className="w-[90vw] mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <EmailNewsletterIcon />
          <p className="text-white text-[40px] w-[70%] font-bold">
            Subscribe to our news weekly newsletter
          </p>
        </div>
        <div className="bg-[#fff] p-3 flex items-center rounded-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-none outline-none text-[#333]"
          />
          <button className="bg-[#010725] uppercase text-white px-4 py-3 rounded-full text-[14px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
