import React from "react";
import { cardProps } from "./type";

const Card = (props: cardProps) => {
  const { ownerId, title, des, expAt, uri } = props;
  return (
    <div className="w-[15rem] h-[23rem] rounded-[1.25rem] p-0 absolute border-solid border-[0.5rem] border-[#1c82ad] overflow-hidden">
      <img src="/test/R.jpg" className="w-full h-[80%] overflow-hidden" />
      <p className="font-roboto-slab text-sm font-normal text-[#d2d2d2]/60 px-[1rem] mt-1">
        {ownerId}
      </p>
      <p className="font-roboto-slab text-2xl font-normal text-[#d2d2d2] px-[1rem]">
        {title}
      </p>
      <img
        src="/info.svg"
        className="none md:visible md:relative md:bottom-4 md:right-[-12rem] md:w-[2rem] md:h-[2rem]"
      />
    </div>
  );
};

export default Card;
