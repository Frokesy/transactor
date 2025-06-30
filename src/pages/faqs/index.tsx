import { useState } from "react";
import Container from "../../components/defaults/Container";
import {
  OthersIcon,
  PlusIcon,
  RedDotTwo,
  ReferralsIcon,
  SearchIcon,
  TransferIcon,
  VerificationIcon,
  MinusIcon,
} from "../../components/svgs/Icons";
import Footer from "../../components/defaults/Footer";

const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "1. Is my money safe with Transactor?",
      answer: "Yes, your money is safe with Transactor.",
    },
    {
      id: 2,
      question: "2. Is Transactor a regulated service?",
      answer: "Yes, Transactor is a regulated service.",
    },
    {
      id: 3,
      question: "3. How do I know my money reached the right person?",
      answer: "You can check the transaction history on your account.",
    },
    {
      id: 4,
      question: "4. What happens if something goes wrong?",
      answer: "We will help you resolve the issue.",
    },
    {
      id: 5,
      question: "5. Can someone else access my account?",
      answer:
        "You can contact us via email at support@transactor.com or call us at +1-800-123-4567.",
    },
  ];

  const toggleFaq = (id: number) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <Container>
      {/* Background dot */}
      <div className="absolute lg:block hidden -left-50 top-20">
        <RedDotTwo />
      </div>

      <h2 className="lg:text-[60px] text-[32px] leading-tight text-center lg:w-[80%] mx-auto font-bold mt-[10vh]">
        Advice and answers from the Transactor Team
      </h2>

      {/* Search Bar */}
      <div className="mt-10 bg-[#fff] text-[#808080] lg:py-6 py-3 px-4 lg:px-10 w-[90vw] lg:space-x-10 items-center mx-auto rounded-2xl flex">
        <div className="lg:scale-100 scale-50">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Find an answer"
          className="border-none outline-none w-full placeholder:text-[24px] text-[24px]"
        />
      </div>

      {/* Categories */}
      <div className="mt-10 flex flex-col space-y-10 w-[90vw] mx-auto">
        <h2 className="lg:text-[40px] text-[24px] font-bold">Browse topics</h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 lg:justify-between">
          {[
            { icon: <TransferIcon />, title: "Transfer" },
            { icon: <ReferralsIcon />, title: "Referrals" },
            { icon: <VerificationIcon />, title: "Verification" },
            { icon: <OthersIcon />, title: "Others" },
          ].map((item, i) => (
            <div
              key={i}
              className="lg:w-[257px] h-[236px] flex flex-col border border-[#ccc] items-center justify-center space-y-3 rounded-md"
            >
              {item.icon}
              <p className="lg:text-[24px] text-[24px] font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="lg:mt-[10vh] lg:w-[70vw] w-[90vw] mx-auto">
        <h2 className="lg:text-[60px] text-[30px] leading-tight mt-14 lg:mt-0 font-semibold text-center">
          Security & Transfers – Frequently Asked Questions
        </h2>
        <div className="lg:mt-20 mt-10 flex flex-col space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="pb-6 border-b-2 border-[#404040] cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="flex justify-between items-center">
                <p className="lg:text-[24px] text-[18px] font-semibold">
                  {faq.question}
                </p>
                {activeFaq === faq.id ? <MinusIcon /> : <PlusIcon />}
              </div>
              {activeFaq === faq.id && (
                <p className="mt-4 lg:text-[18px] text-[#606060]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </Container>
  );
};

export default FAQs;
