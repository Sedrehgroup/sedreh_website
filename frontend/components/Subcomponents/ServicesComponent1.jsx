import React from "react";
import Image from "next/image";

const ServicesComponent1 = (props) => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="">
        <Image
          src={props.img}
          height={800}
          width={1000}
          className="rounded-t-lg object-cover"
          alt="/"
        ></Image>
      </div>
      <div className="flex flex-col gap-y-4 p-6 items-center bg-primary3/5 rounded-b-lg ">
        <p className="text-ED font-medium text-xl">{props.title}</p>
        <p className="text-ED/90 font-light text-base text-justify">
          {" "}
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesComponent1;
