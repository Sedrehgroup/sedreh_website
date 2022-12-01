import React, { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import map from "../img/icon/map.svg";
import callCalling from "../img/icon/call-calling.svg";
import sms from "../img/icon/sms.svg";

// import axios from "./Axios";

const ContactUs = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   topic: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const newData = { ...data };
  //   newData[e.target.id] = e.target.value;
  //   setData(newData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const information = {
  //     name: data.name,
  //     email: data.email,
  //     phone: data.phone,
  //     topic: data.topic,
  //     message: data.message,
  //   };

  //   try {
  //     await axios.post("/data.json", information).then((response) => null);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tq8dx3",
        "template_lh079dc",
        form.current,
        "qsclqTFM0PTc7W9o0"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent ...");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="w-full py-40">
        <div className="flex items-center justify-center">
          <div className="container">
            <div className="grid lg:grid-cols-12 grid-cols-1 lg:w-full sm:w-2/3 w-4/5 mx-auto gap-6 h-[800px]">
              <div className="flex flex-col justify-center order-1 py-4 space-y-4 lg:row-span-2 lg:col-span-4 lg:order-none bg-ED rounded-2xl px-11 ">
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <span className="flex flex-row gap-2 ">
                    <Image src={map} alt="/"></Image>
                    <p className="font-semibold text-primary4">آدرس</p>
                  </span>
                  <p className="text-sm font-normal text-primary4">
                    تهران، بلوار کشاورز، خیابان قدس، پلاک 37
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <span className="flex flex-row gap-2 ">
                    <Image src={callCalling} alt="/"></Image>
                    <p className="font-semibold text-primary4">شماره تماس</p>
                  </span>
                  <p className="text-sm font-normal text-primary4">
                    8493 467 0922
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <span className="flex flex-row gap-2 ">
                    <Image src={sms} alt="/"></Image>
                    <p className="font-semibold text-primary4">ایمیل</p>
                  </span>
                  <p className="text-sm font-normal text-primary4">
                    sedreh@gmail.com
                  </p>
                </div>
              </div>
              <div className="order-3 lg:row-span-6 lg:col-span-8 lg:order-none bg-ED rounded-2xl">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      className="rounded-2xl aspect-video w-full lg:h-[840px] md:h-[500px] sm:h-[400px] h-[300px] "
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=%D8%AA%D8%B9%D8%A7%D9%84%DB%8C%20%DA%A9%D9%88%D8%AB%D8%B1&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start order-2 px-6 py-5 space-y-6 lg:row-span-4 lg:col-span-4 lg:order-none bg-ED rounded-2xl xl:px-11 xl:py-8">
                <div className="space-y-4 ">
                  <p className="text-xl font-semibold ">
                    به راحتی با سدره ارتباط برقرار کنید
                  </p>
                  <p className="text-xs font-light ">
                    برای ارتباط با سدره و همکاری با این شرکت کافیست فیلد های زیر
                    را تکمیل کنید :
                  </p>
                </div>
                <form
                  action=""
                  className="flex flex-col justify-start space-y-4"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    id="name"
                    type="text"
                    placeholder="نام خود را وارد کنید ..."
                    className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1 "
                    name="from_name"
                    // value={data.name}
                    // onChange={(e) => handleChange(e)}
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="ایمیل خود را وارد کنید ..."
                    className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1"
                    name="from_email"
                    // value={data.email}
                    // onChange={(e) => handleChange(e)}
                  />
                  <div className="flex flex-col gap-2 space-y-2 xl:flex-row xl:space-y-0">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="شماره موبایل خود را وارد کنید ..."
                      className="px-2 py-2 text-sm border-none rounded bg-CB/50 xl:w-3/5 xl:text-xs focus:outline focus:outline-1"
                      name="from_phone"
                      // value={data.phone}
                      // onChange={(e) => handleChange(e)}
                    />

                    <select
                      id="topic"
                      class="bg-CB/50 xl:w-2/5 xl:text-xs  text-sm rounded px-2 py-2 border-none  text-black1/80 focus:outline  focus:outline-1"
                      name="from_topic"
                      // value={data.topic}
                      // onChange={(e) => handleChange(e)}
                    >
                      <option selected className=" text-black1/60">
                        موضوع مورد نظر
                      </option>
                      <option value="مدیریت شهری" className=" text-black1">
                        مدیریت شهری
                      </option>
                      <option value="رسانه" className=" text-black1">
                        رسانه{" "}
                      </option>
                      <option
                        value="منابع طبیعی و محیط زیست"
                        className=" text-black1"
                      >
                        منابع طبیعی و محیط زیست{" "}
                      </option>
                      <option value="صنعتی و تجاری" className=" text-black1">
                        صنعتی و تجاری{" "}
                      </option>
                      <option value="هواشناسی" className=" text-black1">
                        هواشناسی{" "}
                      </option>
                      <option value="انرژی" className=" text-black1">
                        انرژی{" "}
                      </option>
                      <option value="حقوقی و قضایی" className=" text-black1">
                        حقوقی و قضایی{" "}
                      </option>
                      <option value="موارد دیگر" className=" text-black1">
                        موارد دیگر ...{" "}
                      </option>
                    </select>
                  </div>
                  <textarea
                    id="message"
                    rows="10"
                    placeholder="متن خود را وارد کنید ..."
                    className="px-2 py-2 text-sm border-none rounded resize-none bg-CB/50 focus:outline focus:outline-1 "
                    name="message"
                    // value={data.message}
                    // onChange={(e) => handleChange(e)}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full px-5 py-3 font-bold rounded-lg bg-primary3 text-primary4 hover:bg-primary3/60"
                    // onClick={(e) => handleSubmit(e)}
                  >
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
