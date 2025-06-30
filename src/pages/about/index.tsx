import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import { RedDotTwo } from "../../components/svgs/Icons";

const Company = () => {
  return (
    <Container>
      <h2 className="lg:text-[66px] text-[32px] leading-tight z-20 text-center lg:w-[80%] mx-auto font-bold mt-14 lg:mt-[10vh]">
        Welcome to Transactor.{" "}
        <span className="font-bold">
          Money moves, but it's love that truly travels.
        </span>
      </h2>
      <div className="relative">
        {/* background attachment */}
        <div className="absolute lg:block hidden right-0 -top-[30vh]">
          <RedDotTwo />
        </div>

        <div className="w-[90vw] mt-10 lg:mt-[10vh] mx-auto border border-[#ccc] items-center rounded-2xl lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[55%]">
            <h2 className="lg:text-[60px] leading-tight text-[32px]">
              Powered by Purpose, Driven by Connection
            </h2>
            <p className="lg:text-[24px] lg:mt-10 mt-6">
              At Transactor, we’re more than just a money transfer company.
              We’re the bridge between dreams and reality—connecting loved ones
              across continents, one transfer at a time.
            </p>
            <p className="lg:text-[24px] lg:mt-10 mt-6">
              Our story began with a simple, personal question: Why is sending
              money from Australia to Africa still so complicated, expensive,
              and slow?
            </p>
            <p className="lg:text-[24px] lg:mt-10 mt-6">
              We heard the frustrations of students, workers, business owners,
              and families trying to support their loved ones back home. We
              lived that experience too. So, we built Transactor — a smarter,
              faster, and fairer way to send money from Australia to Africa.
            </p>
          </div>

          <div className="lg:w-[40%] lg:mt-0 mt-10 z-10">
            <img
              src="/assets/about-img-one.png"
              alt="Image"
              className="w-[100%] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        {/* background attachment */}
        <div className="absolute lg:block hidden -left-50 bottom-0">
          <RedDotTwo />
        </div>

        <div className="w-[90vw] lg:mt-[10vh] mt-10 mx-auto border border-[#ccc] items-center rounded-2xl lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[55%] z-10">
            <h2 className="lg:text-[60px] text-[32px] leading-tight">
              It's about building bridges between continents,{" "}
              <span className="font-bold">one transaction at a time</span>
            </h2>
            <p className="lg:text-[24px] lg:mt-10 mt-6 ">
              Whether you're supporting your family, investing in a brighter
              future, or just sending love across the miles — you deserve a
              platform that cares as much as you do.
            </p>
          </div>

          <div className="lg:w-[40%] flex relative lg:mt-0 mt-10">
            <img
              src="/assets/about-img-two.png"
              alt="Image"
              className="w-[100%] object-cover"
            />
            <img
              src="/assets/about-img-three.png"
              alt="Image"
              className="right-0 object-cover absolute lg:block hidden bottom-0 h-[377px] w-[301px]"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        {/* background attachment */}
        <div className="absolute lg:block hidden -left-50 bottom-0">
          <RedDotTwo />
        </div>

        <div className="w-[90vw] lg:mt-[10vh] mt-10 mx-auto border border-[#ccc] items-center rounded-2xl lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[55%] z-10">
            <h2 className="lg:text-[60px] text-[32px] leading-tight">
              Welcome to Transactor. Where every transfer tells a story - your
              story.
            </h2>
            <p className="lg:text-[24px] lg:mt-10 mt-6 ">
              There is still a significant gap between the experience of sending
              money within the same country and sending money across borders. We
              believe that sending and receiving money across borders should be
              as hassle-free as sending money within the same country.
            </p>
            <p className="lg:text-[24px] lg:mt-10 mt-6 ">
              And that’s why we are committed to making global money transfers
              have that local experience of sending money within the same
              country, while eliminating the mental gymnastics of figuring out
              how to get money across borders.
            </p>
          </div>

          <div className="lg:w-[40%] mt-10 lg:mt-0 z-10">
            <img
              src="/assets/about-img-four.png"
              alt="Image"
              className="w-[100%] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-[90vw] lg:mt-[10vh] mt-10 lg:mb-20 mb-10 mx-auto bg-[#fff] text-[#333] items-center rounded-2xl lg:p-10 p-4 flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[55%] z-10">
          <div className="space-y-4">
            <h2 className="lg:text-[38px] text-[28px] font-semibold">
              Our mission
            </h2>
            <p className="lg:text-[24px] lg:mt-4">
              To become the most trusted and human-centered money transfer
              platform between Australia and Africa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="lg:text-[38px] text-[28px] font-semibold mt-10">
              Our vision
            </h2>
            <p className="lg:text-[24px] lg:mt-4">
              To empower African communities in the diaspora to stay financially
              connected with home—seamlessly, securely, and with love.
            </p>
            <p className="lg:text-[24px] lg:mt-10 mt-4">
              Whether you’re sending love to mum, paying for education, funding
              a dream, or investing in your roots — we’re here to help you do it
              with confidence.
            </p>
          </div>
        </div>

        <div className="lg:w-[40%] lg:mt-0 mt-10 flex relative">
          <img
            src="/assets/about-img-five.png"
            alt="Image"
            className="w-[100%] h-[482px] object-cover"
          />
          <img
            src="/assets/about-img-six.png"
            alt="Image"
            className="right-0 object-cover lg:block hidden absolute bottom-14 h-[377px] w-[301px]"
          />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Company;
