import { FooterDotAttachment } from "../svgs/Icons";

const Footer = () => {
  return (
    <div className="pb-10">
      <footer className="border-t-2 relative border-[#ccc] px-4 lg:py-[15vh] py-10">
        {/* background attachment */}
        <div className="absolute lg:block hidden -left-20 -top-[30vh]">
          <FooterDotAttachment />
        </div>
        <h2 className="lg:text-[54px] text-[30px] font-semibold text-center">
          A smarter, faster, and fairer <br /> way to send money from Australia
          to Africa.
        </h2>
        <div className="absolute lg:block hidden right-0 -top-20">
          <FooterDotAttachment />
        </div>
      </footer>
      <p className="text-center border-t-2 border-[#ccc] py-3">
        2025 All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
