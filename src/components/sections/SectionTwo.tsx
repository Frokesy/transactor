import {
  RedDotTwo,
  SelectCountryIcon,
  SignInIcon,
  StarIcon,
  SupportIcon,
} from "../svgs/Icons";

const SectionTwo = () => {
  return (
    <div className="mt-[10vh] pb-30 space-y-10 lg:space-y-30">
      <div className="w-[90vw] mx-auto border border-[#ccc] items-center rounded-2xl lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[55%]">
          <h2 className="lg:text-[64px] leading-tight mb-6 text-[34px]">
            At Transactor,{" "}
            <span className="font-bold">
              we see the story behind every dollar.
            </span>
          </h2>
          <p className="lg:text-[30px] lg:mt-0 my-6">
            Every day, thousands of people wake up in Australia with Africa on
            their minds. They think of the mother in Lagos who never missed a
            school fee deadline. The sister in Nairobi starting her first
            business.The brother in Accra buying medicine for grandma. The
            friend in Johannesburg building a future—brick by brick. These are
            more than just transactions. They’re acts of love. Of sacrifice. Of
            dreams in motion.
          </p>
        </div>

        <div className="lg:w-[40%]">
          <img
            src="/assets/body-img-one.png"
            alt="Section Two Image"
            className="w-[100%] object-cover"
          />
        </div>
      </div>

      <div className="relative ">
        {/* background attachment */}
        <div className="absolute lg:block hidden right-[30vw] -top-20">
          <RedDotTwo />
        </div>
        <div className="w-[90vw] mx-auto border border-[#ccc] z-10 items-center rounded-2xl lg:px-10 p-4 flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[55%] z-10">
            <h2 className="lg:text-[64px] text-[32px] leading-tight font-semibold">
              Our Easy Steps For Registration
            </h2>
            <p className="lg:text-[24px] lg:mt-10 mt-4">No hidden charges</p>
            <p className="lg:text-[24px]">No frustrating delays.</p>
            <p className="lg:text-[24px]">
              Just a few taps, and your money flies home—fast, fair, and
              fuss-free.
            </p>

            <div className="space-y-6 lg:mt-10 mt-6">
              <div className="flex items-center space-x-3">
                <SignInIcon />
                <p className="text-[18px]">No frustrating delays.</p>
              </div>
              <div className="flex items-center space-x-3">
                <SelectCountryIcon />
                <p className="text-[18px]">Select Country Location.</p>
              </div>
              <div className="flex items-center space-x-3">
                <SupportIcon />
                <p className="text-[18px]">24/7 Dedicated support</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] flex justify-end z-10">
            <img
              src="/assets/body-img-two-mobile.png"
              alt="Section Two Image"
              className="w-[100%] lg:hidden block object-cover"
            />
            <img
              src="/assets/body-img-two.png"
              alt="Section Two Image"
              className="w-[90%] lg:block hidden h-[800px]"
            />
          </div>
        </div>
        {/* background attachment */}
        <div className="absolute lg:block hidden right-0 -bottom-30">
          <RedDotTwo />
        </div>
      </div>

      <div className="w-[90vw] mx-auto border border-[#ccc] items-center rounded-2xl lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[55%]">
          <h2 className="lg:text-[64px] leading-tight text-[34px] lg:text-start text-center lg:font-normal font-bold">
            Your Money. Safe. Always.
          </h2>
          <div className="lg:w-[40%] h-[270px] block lg:hidden lg:mt-0 mt-10">
            <img
              src="/assets/body-img-three.png"
              alt="Section Two Image"
              className="w-[100%] object-cover"
            />
          </div>
          <p className="lg:text-[24px] mt-4 lg:mt-10">
            At Transactor, security isn’t just a feature It’s a promise. From
            the moment you click send, your funds are protected by bank-level
            encryption, two-factor authentication, and real-time fraud detection
            systems designed to guard your money like it's our own.
          </p>
          <p className="lg:text-[24px] mt-4 lg:mt-10">
            We work with regulated financial partners across Africa and
            Australia, ensuring compliance with global standards — and peace of
            mind with every transaction. But we also know trust isn’t built by
            algorithms alone. So we back it up with 24/7 human support.
          </p>
          <p className="lg:text-[24px] mt-4 lg:mt-10">
            Real people. Real answers. Ready when you need us most. Because when
            you're sending money back home, you're not just sending currency.
            You're sending care. You're sending love. You're sending you. And we
            believe that deserves the highest protection.
          </p>
        </div>

        <div className="lg:w-[40%] lg:block hidden lg:mt-0 mt-10">
          <div>
            <StarIcon />
          </div>
          <img
            src="/assets/body-img-three.png"
            alt="Section Two Image"
            className="w-[100%] object-cover"
          />
          <div className="flex justify-end">
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
