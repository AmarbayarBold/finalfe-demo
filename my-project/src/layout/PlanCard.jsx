import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "./Button";

const PlanCard = (props) => {
  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/3 p-5 rounded-lg">
      <h2 className="font-semibold text-center text-white">{props.title}</h2>

      <div className="flex flex-row justify-center items-center">
        <span className="inline-block text-white">
          <MdOutlineAttachMoney size={22} />
        </span>
        <h3 className="font-semibold text-xl inline-block text-white">
          {props.price}
        </h3>
      </div>
      <div className=" flex flex-col items-center mt-5">
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5 text-blue-400">
            <AiFillCheckCircle size={22} />
          </span>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ut
            sit doloribus?
          </p>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5 text-blue-400">
            <AiFillCheckCircle size={22} />
          </span>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus
            voluptas, adipisci illum unde tempora?
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-4">
        <Button title="Buy Plan" />
      </div>
    </div>
  );
};

export default PlanCard;
