import { FooterDotAttachment } from "../svgs/Icons";

const Footer = () => {
  return (
    <>
      <div className="pb-[30px]">
        <footer className="border-t-2 relative border-[#ccc] px-4 lg:py-[15vh] py-10">
          {/* background attachment */}
          <div className="absolute lg:block hidden -left-20 -top-[30vh]">
            <FooterDotAttachment />
          </div>
          <h2 className="lg:text-[56px] text-[24px] leading-tight font-semibold text-center">
            A smarter, faster, and fairer <br /> way to send money from
            Australia to Africa.
          </h2>
          <div className="absolute lg:block hidden right-0 -top-20">
            <FooterDotAttachment />
          </div>
        </footer>
      </div>
      <div className="text-[#333] text-[24px] bg-[#fff] py-6 lg:flex hidden">
        <div className="flex justify-between items-center w-[90vw] mx-auto">
          <p>2025 Transactor. All rights reserved.</p>
          <p>Money moves. Love travels.</p>
        </div>
      </div>
      <p className="text-center border-t-2 border-[#ccc] lg:hidden block py-6">
        All rights reserved. Transactor 2025
      </p>
    </>
  );
};

export default Footer;
