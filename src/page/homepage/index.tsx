import React, { useState } from "react";
import Card from "../../components/card";
import Layout from "../../layout";

const HomePage = () => {
  const date = new Date();
  return (
    <>
      <p className="w-full flex justify-center mb-16 font-roboto-slab text-5xl mb-2 font-bold text-[#d2d2d2]">
        MARKET
      </p>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-4 gap-x-24 gap-y-16">
          <div className="max-w-fit flex  flex-col items-center">
            <Card
              ownerId="cquan.testnet"
              title="NAME #1"
              des="description"
              expAt={date}
              price={0.25}
              uri="aaaa"
            />
            <button className="h-[2rem]  mt-4 bg-caribbean rounded-[3.125rem] w-[10rem] font-roboto-slab text-xl font-normal">
              Purchase
            </button>
          </div>
          <Card
            ownerId="cquan.testnet"
            title="NAME #1"
            des="description"
            expAt={date}
            price={0.25}
            uri="aaaa"
          />
          <Card
            ownerId="cquan.testnet"
            title="NAME #1"
            des="description"
            expAt={date}
            price={0.25}
            uri="aaaa"
          />
          <Card
            ownerId="cquan.testnet"
            title="NAME #1"
            des="description"
            expAt={date}
            price={0.25}
            uri="aaaa"
          />
          <Card
            ownerId="cquan.testnet"
            title="NAME #1"
            des="description"
            expAt={date}
            price={0.25}
            uri="aaaa"
          />
        </div>
      </div>
    </>
  );
};
export default HomePage;
