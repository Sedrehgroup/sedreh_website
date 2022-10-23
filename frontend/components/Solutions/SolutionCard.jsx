/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const SolutionCard = (props) => {
  return (
    <div className="flex flex-col justify-between gap-y-6 ">
      <div className="">
        <Image
          src={props.img}
          height={800}
          width={1000}
          className="rounded-t-2xl object-cover"
          alt="/"
        ></Image>
      </div>
      <div className="">
        <p className="text-3xl font-semibold text-ED text-center">
          {props.title}
        </p>
      </div>
      <div className="">
        <p className=" text-ED/80 text-sm text-justify px-4">
          {props.description}
        </p>
      </div>
      <div className="rounded-b-2xl bg-ED text-lg font-semibold text-center w-full p-3">
        اطلاعات بیشتر
      </div>
    </div>
  );
};

export default SolutionCard;
