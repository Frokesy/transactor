import { RedDot } from "../svgs/Icons";

const Hero = () => {
  return (
    <div className="relative">
      {/* background attachment */}
      <div className="absolute left-0 top-0">
        <RedDot />
      </div>
      <div className="flex w-[90vw] mx-auto pt-[15vh]">
        <div className="flex flex-col space-y-6 z-10 w-[45%]">
          <h2 className="text-[66px] font-semibold">
            From Australia with Love – The Transactor Story
          </h2>
          <p className="text-[24px] font-medium">
            Born out of a simple mission —to make money transfers from Australia
            to Africa faster, safer, and more human— we built Transactor with
            you in mind.
          </p>

          <div className="flex space-x-10 font-semibold mt-20">
            <button className="bg-[#EF2D57] py-4 px-10 uppercase rounded-xl">
              Download App
            </button>
            <button className="uppercase bg-[#fff] text-[#232323] py-4 px-10 rounded-xl">
              Get Started Now
            </button>
          </div>
        </div>
        <div className="w-[55%] -mt-14">
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
