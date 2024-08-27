import React from "react";
import PlanCard from "../layout/PlanCard";

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center">Gym membership</h1>
      <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
        <PlanCard title="Trail Plan" price="0" />
        <PlanCard title="Plus Plan" price="3000" />
        <PlanCard title="ProMax Plan" price="5000" />
      </div>
    </div>
  );
};

export default Plans;
