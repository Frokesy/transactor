import { useRef, useState } from "react";
import { CaretLeft, CaretRight, MiniNig } from "../svgs/Icons";
import { useInView } from "react-intersection-observer";

const SectionThree = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
      img: "/assets/body-img-four.webp",
    },
    {
      quote: "“It’s like sending love instantly.”",
      text: `My sister needed emergency medical help back in Lagos. I used Transactor
      and within minutes, the funds were there. That speed matters.`,
      author: "Ada M., Melbourne",
      img: "/assets/body-img-four.webp",
    },
    {
      quote: "“I never worry about exchange rates again.”",
      text: `The rates are clear, the fees are low, and the service is just smooth.
      Transactor is the best money transfer tool I’ve ever used.`,
      author: "Chuka N., Brisbane",
      img: "/assets/body-img-four.webp",
    },
  ];

  // Show the rest once the section comes into view
  if (inView && !showAll) setShowAll(true);

  const visibleTestimonials = showAll ? testimonials : [testimonials[0]];

  return (
    <div ref={ref} className="w-[90vw] mx-auto overflow-hidden mb-[8vh]">
      <h2 className="text-[34px] lg:text-[90px] w-[80%] font-bold leading-tight lg:leading-[1.1]">
        Real People. Real Transfers. Real Impact.
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4 space-y-4 lg:space-y-0">
        <p className="text-[18px] lg:text-[32px] lg:w-[60%]">
          Join thousands of Australians who trust Transactor to send money home
          — safely, quickly, and with heart.
        </p>
        <div className="flex items-center space-x-6 lg:my-0 my-4">
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
        className="flex overflow-x-auto space-x-6 lg:mt-20 mt-6 scroll-smooth no-scrollbar"
      >
        {visibleTestimonials.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[90vw] lg:min-w-[1049px] h-[500px] lg:h-[871px] rounded-xl relative flex-shrink-0 overflow-hidden"
          >
            <img
              src={item.img}
              alt={`Testimonial from ${item.author}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
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
