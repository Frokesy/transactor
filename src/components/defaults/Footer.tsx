import { FooterDotAttachment } from "../svgs/Icons";

const Footer = () => {
  return (
    <div className="pb-[10vh]">
      <footer className="border-t-2 relative border-[#ccc] py-[15vh]">
        {/* background attachment */}
        <div className="absolute -left-20 -top-[30vh]">
          <FooterDotAttachment />
        </div>
        <h2 className="text-[54px] font-semibold text-center">
          A smarter, faster, and fairer <br /> way to send money from Australia
          to Africa.
        </h2>
        <div className="absolute right-0 -top-20">
          <FooterDotAttachment />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
