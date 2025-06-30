import { useState, useEffect } from "react";
import { ArrowUpDown, CaretUpDown, RedDot, SendIcon } from "../svgs/Icons";

const SectionOne = () => {
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [swap, setSwap] = useState<boolean>(false);
  const exchangeRate = 116.78;
  const transactionFee = 1.0;

  useEffect(() => {
    const net = Math.max(amount - transactionFee, 0);

    const result = swap ? net / exchangeRate : net * exchangeRate;

    setConvertedAmount(isNaN(result) ? 0 : result);
  }, [amount, swap]);

  const fromCurrency = swap ? "NGN" : "AUD";
  const toCurrency = swap ? "AUD" : "NGN";

  return (
    <div className="relative border border-[#ccc] rounded-2xl w-[90vw] mx-auto lg:mt-10">
      <div className="absolute lg:block hidden left-0 top-0">
        <RedDot />
      </div>

      <div className="lg:p-30 p-4 flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[45%] z-10 lg:mt-10">
          <div className="lg:leading-30">
            <h1 className="lg:text-[96px] text-[38px] text-center lg:text-start font-semibold">
              No Fees.
            </h1>
            <h2 className="lg:text-[96px] text-[38px] text-center lg:text-start font-semibold">
              One World.
            </h2>
          </div>
          <p className="lg:text-[24px] lg:w-[80%] text-center lg:text-start font-medium lg:mt-20 mt-3">
            Whether you're supporting your family, investing in a brighter
            future, or just sending love across the miles — you deserve a
            platform that cares as much as you do.
          </p>
        </div>

        {/* Rate Converter */}
        <div id="rate-converter" className="lg:w-[45%] lg:mt-0 mt-10">
          <h2 className="text-[20px] font-semibold mb-4">Send Money</h2>

          <div className="flex flex-col space-y-4 items-center">
            {/* Input */}
            <div className="w-[100%] flex justify-between items-center border border-[#ccc] p-6 rounded-2xl">
              <div className="w-[60%]">
                <h3 className="text-[14px] font-medium">You Send</h3>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className="bg-transparent outline-none text-[40px] font-semibold w-[100%]"
                  placeholder="0.00"
                />
              </div>
              <div className="flex w-[20%] space-x-3 items-center justify-end">
                <p className="text-[20px]">| {fromCurrency}</p>
                <CaretUpDown />
              </div>
            </div>

            {/* Toggle */}
            <button type="button" onClick={() => setSwap(!swap)}>
              <ArrowUpDown />
            </button>

            {/* Output */}
            <div className="w-full flex justify-between items-center border border-[#ccc] p-6 rounded-2xl">
              <div>
                <h3 className="text-[14px] font-medium">Recipient Gets</h3>
                <p className="text-[40px] font-semibold">
                  {convertedAmount.toFixed(2)}
                </p>
              </div>
              <div className="flex space-x-3 items-center">
                <p className="text-[20px]">| {toCurrency}</p>
                <CaretUpDown />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:px-3 pt-10 pb-4">
            <div className="flex justify-between">
              <span className="lg:text-[14px] text-[12px] font-medium">
                By Exchange Rate
              </span>
              <span className="lg:text-[14px] text-[12px] font-medium">
                1.00 AUD = {exchangeRate} NGN
              </span>
            </div>
            <div className="flex justify-between">
              <span className="lg:text-[14px] text-[12px] font-medium">
                Transaction Fee
              </span>
              <span className="lg:text-[14px] text-[12px] font-medium">
                {transactionFee} {fromCurrency}
              </span>
            </div>
          </div>

          {/* Promo */}
          <div className="py-4 lg:px-10 px-4 w-full my-6 rounded-xl text-[10px] lg:text-start text-center font-medium bg-[#5A6B80]">
            This rate is for new customers only. One per customer. Limited time
            offer. Rates are subject to change. Promotional FX rate applies to
            first £200. See{" "}
            <a
              href="https://www.pesa.co/promo-terms-and-conditions"
              className="text-[#EF2D57]"
            >
              Terms & Conditions
            </a>{" "}
            for details.
          </div>

          {/* CTA Button */}
          <button className="bg-[#EF2D57] lg:py-6 py-4 px-10 w-full cursor-pointer flex items-center justify-center space-x-3 rounded-xl">
            <span className="text-[20px] font-semibold">Send Now</span>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
