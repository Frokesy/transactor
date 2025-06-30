import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import { EmailIcon } from "../../components/svgs/Icons";

const Help = () => {
  return (
    <Container>
      <div className="w-[90vw] mx-auto border border-[#ccc] z-10 items-center rounded-2xl lg:mt-20 mt-10 lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[55%] z-10">
          <h2 className="lg:text-[60px] text-[32px] leading-tight font-bold">
            {" "}
            <span className="font-bold">We're Here to Help</span> - Anytime,
            Anywhere.
          </h2>
          <p className="lg:text-[24px] mt-6 lg:mt-10">
            At Transactor, we know that sending money home is more than just a
            transaction — it’s a lifeline. That’s why our support team is always
            ready to assist you with fast, friendly, and secure service. <br />{" "}
            Whether you’ve got a question, concern, or just need a little help
            using the app, we’d love to hear from you.
          </p>

          <div className="space-y-6 mt-10 lg:mt-10">
            <div className="flex items-center space-x-3">
              <EmailIcon />
              <p className="text-[18px]">contact@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <EmailIcon />
              <p className="text-[18px]">support@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <EmailIcon />
              <p className="text-[18px]">press@example.com</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%] lg:mt-0 mt-10 z-10">
          <img
            src="/assets/help-img-one.png"
            alt="img"
            className="w-[100%] object-cover"
          />
        </div>
      </div>

      <div className="w-[90vw] mx-auto items-center rounded-2xl lg:mt-20 mt-10 lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
        <div className="lg:space-y-10 space-y-6 lg:w-[50%] w-[100%]">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between lg:space-x-10 w-[100%]">
            <div className="flex flex-col space-y-3 w-[100%]">
              <label className="lg:text-[18px] text-[14px] uppercase">
                Name
              </label>
              <input
                type="text"
                className="bg-[#fff] text-[#333] outline-none rounded-full p-3 w-[100%]"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="flex flex-col space-y-3 w-[100%]">
              <label className="lg:text-[18px] text-[14px] uppercase">
                Email
              </label>
              <input
                type="email"
                className="bg-[#fff] text-[#333] outline-none rounded-full p-3 w-[100%]"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between lg:space-x-10 w-[100%]">
            <div className="flex flex-col space-y-3 w-[100%]">
              <label className="lg:text-[18px] text-[14px] uppercase">
                Company
              </label>
              <input
                type="text"
                className="bg-[#fff] text-[#333] outline-none rounded-full p-3 w-[100%]"
                placeholder="Enter company name"
                required
              />
            </div>
            <div className="flex flex-col space-y-3 w-[100%]">
              <label className="lg:text-[18px] text-[14px] uppercase">
                Subject
              </label>
              <input
                type="email"
                className="bg-[#fff] text-[#333] outline-none rounded-full p-3 w-[100%]"
                placeholder="How can we help?"
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-[100%]">
            <label className="lg:text-[18px] text-[14px] uppercase">
              Message
            </label>
            <textarea
              className="bg-[#fff] text-[#333] outline-none rounded-lg p-3 w-[100%]"
              placeholder="Your Message"
              required
              rows={10}
            />
          </div>
          <button className="bg-[#EF2D57] py-5 px-10 uppercase rounded-xl font-semibold">
            Send Message
          </button>
        </div>

        <div className="lg:w-[40%] mt-10 lg:mt-0 z-10">
          <img
            src="/assets/help-img-two.png"
            alt="img"
            className="w-[100%] object-cover"
          />
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </Container>
  );
};

export default Help;
