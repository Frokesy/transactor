import { RedDot } from "../svgs/Icons";

const Hero = () => {
  return (
    <div className="relative">
      {/* background attachment */}
      <div className="absolute lg:block hidden left-0 top-0">
        <RedDot />
      </div>
      <div className="flex lg:flex-row flex-col w-[90vw] mx-auto lg:pt-[10vh] pt-14">
        <div className="flex flex-col space-y-6 z-10 lg:w-[45%]">
          <h2 className="lg:text-[66px] text-[38px] leading-tight text-center lg:text-start font-semibold">
            From Australia with Love – The Transactor Story
          </h2>

          <p className="lg:text-[24px] font-medium text-center lg:text-start">
            Born out of a simple mission —to make money transfers from Australia
            to Africa faster, safer, and more human— we built Transactor with
            you in mind.
          </p>

          <div className="flex lg:flex-row flex-col lg:space-x-10 font-semibold mt-10 lg:mt-20">
            <button className="bg-[#EF2D57] lg:py-4 py-6 px-10 uppercase rounded-xl">
              Download App
            </button>
            <button className="uppercase bg-[#fff] text-[#232323] lg:mt-0 mt-6 lg:py-4 py-6 px-10 rounded-xl">
              Get Started Now
            </button>
          </div>
        </div>
        <div className="lg:w-[55%] lg:-mt-14 mt-10">
          <img
            src="/assets/hero-img.png"
            alt="Hero Image"
            className="w-[100%] h-[700px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
