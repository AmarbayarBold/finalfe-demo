import React from "react";
import Button from "../layout/Button";
const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between md:px-32 px-5 bg-blue-400">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl font-semibold md:text-start text-center md:2/3">
          Your body, your rules.
        </h1>

        <div className="w-full md:w-2/4 mt-5 flex flex-row justify-center">
          <Button title="Checkout Our Plans" />
        </div>
      </div>
    </div>
  );
};

export default Home;
