import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import Cta from "../../components/sections/Cta";
import SectionOne from "../../components/sections/SectionOne";
import SupportedCountries from "../../components/sections/SupportedCountries";
import {
  RatesIcon,
  SelectCountryIcon,
  SignInIcon,
  SupportIcon,
} from "../../components/svgs/Icons";

const Wallet = () => {
  return (
    <Container>
      <h2 className="lg:text-[60px] text-[34px] text-center lg:w-[70%] w-[90%] mx-auto font-bold mt-14 lg:mt-[10vh]">
        Currency Conversion – Know Before You Send & Convert with Ease
      </h2>
      <p className="lg:text-[32px] text-[18px] lg:w-[50%] w-[90%] mx-auto text-center lg:my-20 my-10">
        Check real-time exchange rates from Australia to Africa. No surprises.
        No hidden fees.
      </p>

      <div className="w-[90vw] mx-auto font-semibold mb-20">
        <button className="bg-[#EF2D57] lg:hidden py-6 px-10 w-[100%] uppercase rounded-xl">
          Download App
        </button>
      </div>
      <SectionOne />
      <SupportedCountries />
      <div className="w-[90vw] mx-auto border border-[#ccc] z-10 items-center rounded-2xl mt-20 lg:p-10 p-4 flex lg:flex-row flex-col-reverse justify-between">
        <div className="lg:w-[55%] z-10 lg:mt-0 mt-10">
          <div className="leading-tight">
            <h2 className="lg:text-[60px] text-[32px] lg:text-start text-center font-bold">
              Real-Time Rates.
            </h2>
            <h2 className="lg:text-[60px] text-[32px] lg:text-start text-center font-bold">
              No Guesswork.
            </h2>
          </div>
          <p className="lg:text-[24px] mt-10 lg:text-start text-center ">
            Unlike many traditional banks, we show you the exact rate you’ll get
            — with no hidden margins or surprise deductions. What you see is
            what your recipient receives.
          </p>

          <div className="space-y-6 mt-10">
            <h3 className="text-[20px] font-semibold">How it works</h3>
            <div className="flex items-center space-x-3">
              <SignInIcon />
              <p className="lg:text-[18px]">
                Enter amount you want to send in AUD.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <SelectCountryIcon />
              <p className="lg:text-[18px]">
                View live exchange rate and total your recipient will
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <SupportIcon />
              <p className="lg:text-[18px]">
                Send instantly with secure payment and track it in real time
              </p>
            </div>
            <p className="lg:text-[20px]">
              💡 Tip: Exchange rates can shift throughout the day — lock in a
              great rate when you’re ready to send.
            </p>
          </div>
        </div>

        <div className="lg:w-[40%] z-10">
          <img
            src="/assets/wallet-img-one.png"
            alt="img"
            className="w-[100%] object-cover"
          />
        </div>
      </div>

      <div className="lg:my-[5vh] my-20 w-[90vw] mx-auto text-center bg-[#fff] flex flex-col text-[#000] items-center justify-center space-y-6 rounded-2xl py-10">
        <RatesIcon />
        <div className="leading-tight -mt-10">
          <h2 className="lg:text-[64px] text-[32px] font-bold">
            Real-Time Rates.
          </h2>
          <h2 className="lg:text-[64px] text-[32px] font-bold">
            No Guesswork.
          </h2>
        </div>

        <p className="lg:text-[32px] lg:w-[60%] w-[90%]">
          With Transactor, you can trust that your money — and your exchange
          rate — is protected every step of the way. Ready to send with
          confidence?
        </p>
        <button className="bg-[#EF2D57] text-[#fff] lg:text-[24px] font-semibold my-4 py-3 px-10 rounded-xl">
          Use the Converter Tool
        </button>
      </div>

      <Cta />
      <div className="mt-[15vh]">
        <Footer />
      </div>
    </Container>
  );
};

export default Wallet;
