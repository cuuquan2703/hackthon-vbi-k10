import React, { useState } from "react";
import { cardProps } from "./type";

const Card = (props: cardProps) => {
  const { ownerId, title, des, expAt, uri, price } = props;
  const [popup, setPopup] = useState<boolean>(false);
  console.log(popup);
  return (
    <div className="block">
      <div className="w-[15rem] h-[23rem] rounded-[1.25rem] p-0 border-solid border-[0.2rem] border-[#1c82ad]">
        <img
          src="/test/R.jpg"
          className="w-full rounded-t-[1rem] h-[70%] object-cover"
        />
        <p className="font-roboto-slab text-sm font-normal text-[#d2d2d2]/60 px-[1rem] mt-1">
          {ownerId}
        </p>
        <p className="font-roboto-slab text-2xl mb-2 font-normal text-[#d2d2d2] px-[1rem]">
          {title}
        </p>
        <p className="font-roboto-slab text-lg font-normal text-[#d2d2d2] px-[1rem]">
          {price} NEAR
        </p>
        <img
          src="/info.svg"
          className="none md:visible md:relative md:bottom-4 md:right-[-12rem] md:w-[2rem] md:h-[2rem] md:hover:cursor-pointer"
          onMouseEnter={() => setPopup(true)}
          onMouseLeave={() => setPopup(false)}
        />
        <div
          className={`bg-black/20 text-lightGray/60  backdrop-blur-sm relative bottom-12 right-[-15rem] max-w-fit max-h-fit p-2 ${
            popup ? "visible" : "invisible"
          } `}
        >
          {des}
        </div>
      </div>
    </div>
  );
};

export default Card;
