import React from "react";

// Icon
import IconIncrease from "../../assets/images/icon-increase.svg";
import Icon3Dots from "../../assets/images/icon-3dots.svg";
import IconChart from "../../assets/images/icon-chart.svg";
import IconDecrease from "../../assets/images/icon-decrease.svg";

const Dashboard = () => {
  return (
    <div className="flex space-x-[20px]">
      {/* Soil Moisture  */}
      <div className="w-[344px] h-[170px] bg-gradient-to-b from-[#0093E9] to-[#80D0C7] rounded relative">
        <div className="p-[12px]">
          <div className="font-poppins text-[14px] font-semibold flex justify-between items-center">
            <div>Soil Moisture</div>
            <button className="w-[20px] h-[20px]">
              <img src={Icon3Dots} alt="icon 3 dots" />
            </button>
          </div>
          <div className="font-roboto text-[28px] font-bold text-white leading-[42px] my-[8px]">
            53%
          </div>
          <div className="text-white font-roboto text-[14px] font-normal leading-[20px] flex space-x-1">
            <img
              src={IconIncrease}
              alt="icon increase"
              className="w-[20px] h-[20px]"
            />
            <div>13% vs last quarter</div>
          </div>

          <div className="absolute right-2 bottom-6">
            <img src={IconChart} alt="icon chart" />
          </div>
        </div>
      </div>

      {/* Temperature  */}
      <div className="w-[344px] h-[170px] bg-gradient-to-b from-[#FF55AACD] to-[#FBDA61] rounded relative">
        <div className="p-[12px]">
          <div className="font-poppins text-[14px] font-semibold flex justify-between items-center">
            <div>Temperature</div>
            <button className="w-[20px] h-[20px]">
              <img src={Icon3Dots} alt="icon 3 dots" />
            </button>
          </div>
          <div className="font-roboto text-[28px] font-bold text-white leading-[42px] my-[8px]">
            27°C
          </div>
          <div className="text-white font-roboto text-[14px] font-normal leading-[20px] flex space-x-1">
            <img
              src={IconDecrease}
              alt="icon increase"
              className="w-[20px] h-[20px]"
            />
            <div>8% vs last year</div>
          </div>

          <div className="absolute right-2 bottom-6">
            <img src={IconChart} alt="icon chart" />
          </div>
        </div>
      </div>

      {/* Air Humidity  */}
      <div className="w-[344px] h-[170px] bg-gradient-to-b from-[#64E39E] to-[#53ECE5] rounded relative">
        <div className="p-[12px]">
          <div className="font-poppins text-[14px] font-semibold flex justify-between items-center">
            <div>Air Humidity</div>
            <button className="w-[20px] h-[20px]">
              <img src={Icon3Dots} alt="icon 3 dots" />
            </button>
          </div>
          <div className="font-roboto text-[28px] font-bold text-white leading-[42px] my-[8px]">
            44%
          </div>
          <div className="text-white font-roboto text-[14px] font-normal leading-[20px] flex space-x-1">
            <img
              src={IconIncrease}
              alt="icon increase"
              className="w-[20px] h-[20px]"
            />
            <div>2% vs last month</div>
          </div>

          <div className="absolute right-2 bottom-6">
            <img src={IconChart} alt="icon chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
