import { useRef } from "react";
import { CaretLeft, CaretRight, MiniNig } from "../svgs/Icons";

const SectionThree = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -window.innerWidth * 0.9,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: window.innerWidth * 0.9,
      behavior: "smooth",
    });
  };

  const testimonials = [
    {
      quote: "“Transactor gives me peace of mind.”",
      text: `I send money to my mum in Nigeria every month, and I used to worry
      about delays or high fees. With Transactor, she gets it in minutes —
      and I always get notified. It’s fast, safe, and reliable.`,
      author: "Emeka O., Sydney",
      img: "/assets/body-img-four.png",
    },
    {
      quote: "“It’s like sending love instantly.”",
      text: `My sister needed emergency medical help back in Lagos. I used Transactor
      and within minutes, the funds were there. That speed matters.`,
      author: "Ada M., Melbourne",
      img: "/assets/body-img-four.png",
    },
    {
      quote: "“I never worry about exchange rates again.”",
      text: `The rates are clear, the fees are low, and the service is just smooth.
      Transactor is the best money transfer tool I’ve ever used.`,
      author: "Chuka N., Brisbane",
      img: "/assets/body-img-four.png",
    },
  ];

  return (
    <div className="w-[90vw] mx-auto overflow-hidden mb-[15vh]">
      <h2 className="text-[32px] lg:text-[96px] font-bold leading-tight lg:leading-[1.1]">
        Real People. Real Transfers. Real Impact.
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4 space-y-4 lg:space-y-0">
        <p className="text-[18px] lg:text-[32px] lg:w-[60%]">
          Join thousands of Australians who trust Transactor to send money home
          — safely, quickly, and with heart.
        </p>
        <div className="flex items-center space-x-6 ">
          <button onClick={scrollLeft}>
            <CaretLeft />
          </button>
          <button onClick={scrollRight}>
            <CaretRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 mt-10 scroll-smooth no-scrollbar"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[90vw] lg:min-w-[1049px] h-[500px] lg:h-[871px] rounded-xl bg-cover bg-center relative flex-shrink-0"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute flex flex-col justify-end left-0 right-0 bg-black/60 text-white h-full p-6 lg:p-10">
              <h2 className="text-[20px] lg:text-[32px] font-semibold">
                {item.quote}
              </h2>
              <p className="text-[14px] lg:text-[20px] mt-4 font-light">
                {item.text}
              </p>
              <div className="flex space-x-3 items-center mt-6 lg:mt-10">
                <MiniNig />
                <p className="text-[14px] lg:text-[18px]">{item.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
