/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import arrowSquareLeft from "../../img/icon/arrow-square-left.svg";

// import tower from "../Images/tower.svg";
// import Button from "../Images/button.svg";
// import square from "../Images/arrow-square-left.svg";

const Cards = (props) => {
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center">
      <div className=" rounded-t-2xl object-cover sm:w-[450px] w-[350px] sm:h-[250px] h-[180px]">
        <Image
          className="rounded-t-2xl"
          src={props.cardImage}
          width={1400}
          height={780}
          alt=""
        />
      </div>

      <div className=" rounded-b-2xl sm:w-[450px] sm:h-[130px] w-[350px] bg-black1/60 flex flex-col gap-y-1 items-center justify-between ">
        <p className=" font-semibold text-ED text-lg text-center py-2 px-4">
          {props.title}{" "}
        </p>
        <div className="flex justify-between p-4 w-full">
          <div className="flex gap-x-2 items-center">
            <p className=" bg-primary3/30 text-primary3 py-1 px-2 text-xs rounded-md">
              {props.topic}{" "}
            </p>
            <p className="text-xs text-ED">مرداد ماه 1401</p>
          </div>
          <div className="flex gap-x-1">
            <p className=" text-primary3 p-1 text-xs">اطلاعات بیشتر</p>
            <Image src={arrowSquareLeft} alt="/"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
