/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Carousel from "./Slider/Carousel";

import logout from "../img/icon/logout.svg";
import logout2 from "../img/icon/logout2.svg";
import closeCircle from "../img/icon/close-circle.svg";
import keyboardOpen from "../img/icon/keyboard-open.svg";
import messages1 from "../img/icon/messages1.svg";

import discover from "../img/icon/discover.svg";
import globalSearch from "../img/icon/global-search.svg";
import programmingArrow from "../img/icon/programming-arrow.svg";
import cpuSetting from "../img/icon/cpu-setting.svg";
import codeCircle from "../img/icon/code-circle.svg";
import cloudConnection from "../img/icon/cloud-connection.svg";

import messages from "../img/icon/messages.svg";
import documentText from "../img/icon/document-text.svg";
import data2 from "../img/icon/data-2.svg";
import code from "../img/icon/code.svg";

import natural from "/img/solutionsImage/natural.jpg";

import p1Bg from "../img/partners/p1-bg.png";
import p2 from "../img/partners/p2.png";
import p3Bg from "../img/partners/p3-bg.png";

import ReactDOM from "react-dom";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

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

  const space = () => {
    return React.createElement("span", null, "&nbsp;&nbsp;");
  };

  // let space = createElement("span", null, "&nbsp;&nbsp;");

  return (
    <div classname="flex items-center justify-center w-full h-screen ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/homePage-image.jpg"
        className="object-cover w-full h-screen"
        alt="/"
      />

      {/* Overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black1/70 ">
        <div className="container flex flex-col justify-center xl:mt-40 xl:gap-y-28 w-full h-screen mx-4 sm:mx-auto">
          <div className="flex flex-col sm:gap-y-6 xl:gap-y-4  gap-y-8 xl:items-start items-center mt-4">
            <h1 className="px-8 self-center lg:text-4xl sm:text-5xl text-3xl font-extrabold leading-tight text-center xl:text-center md:p-0 text-ED">
              با استفاده از <span className="text-primary3">هوش مکانی </span>
              با چشمانی باز تصمیم بگیرید
            </h1>
            {/* <span className="text-primary3">هوش مکانی</span> */}
            <p className="xl:hidden px-8 text-justify md:p-0 lg:w-2/3 text-ED/90 font-light wspacing">
              با توجه به نقش کلیدی که تصاویر ماهواره‌ای در اطلاعات مکان‌محور
              ایفا می‌کند شرکت ویراپردازان سدره با تولید و پردازش داده‌های
              هوشمند مکانی سعی در برطرف کردن مسائل و نیازهای روز کسب‌وکارها،
              سازمان‌ها و دیگر افراد دارد.
            </p>
          </div>
          <div className="hidden xl:block ">
            <Carousel />
          </div>
        </div>
      </div>

      {/* tavaanmandy */}
      <div className="flex bg-ED  justify-center items-center py-24">
        <div className="container flex flex-col gap-y-16">
          <h2 className="text-3xl lg:text-right text-center font-semibold text-black1 underline underline-offset-[16px] decoration-black1 ">
            توانمندی های فنی سدره{" "}
          </h2>
          <div className="flex flex-col w-full space-y-12 lg:space-y-4">
            <div className="space-y-6 lg:columns-3 lg:mx-0 sm:mx-8 columns-1 ">
              <div className="p-4 md:py-6 md:px-2 ">
                <div className="flex flex-col  gap-4 ">
                  <span className=" flex gap-x-2">
                    <Image src={discover} alt="/"></Image>
                    <p className="text-xl font-bold  text-black1">
                      سیستم‌های اطلاعات مکانی{" "}
                    </p>
                  </span>
                  <p className="w-11/12 font-light text-justify text-black1">
                    با استفاده از سیستم اطلاعات جغرافیایی یا همان GIS، می‌توان
                    با مدیریت، تجزیه و تحلیل و بصری‌سازی اطلاعات جغرافیایی،
                    داده‌ها را به دانسته‌های موثر در تصمیم‌گیری، تبدیل نمود
                  </p>
                </div>
              </div>
              <div className="p-4 md:py-6 md:px-2  ">
                <div className="flex flex-col  gap-4 ">
                  <span className=" flex gap-x-2">
                    <Image src={globalSearch} alt="/"></Image>
                    <p className="text-xl font-bold  text-black1">
                      سنجش از دور{" "}
                    </p>
                  </span>
                  <p className="w-11/12 font-light text-justify text-black1">
                    استفاده از فن‌آوری‌های جدید مانند دریافت و پردازش داده‌ها از
                    طریق سنجنده‌های ماهواره‌ای و استفاده از نرم‌افزار‌ها و
                    سیستم‌های پردازش اطلاعات، نقش مهمی در ارزیابی و نظارت، کنترل
                    و مدیریت منابع دارد
                  </p>
                </div>
              </div>
              <div className="p-4 md:py-6 md:px-2 ">
                <div className="flex flex-col  gap-4 ">
                  <span className=" flex gap-x-2">
                    <Image src={programmingArrow} alt="/"></Image>
                    <p className="text-xl font-bold  text-black1">علم داده </p>
                  </span>
                  <p className="w-11/12 font-light text-justify text-black1">
                    با استفاده از روش‌ها، ابزارها و تکنیک‌های دیتا ساینس از
                    داده‌های مطلوب برای تجزیه و تحلیل‌ و توسعه استراتژی‌های
                    آماری استفاده می‌شود تا نتایج مطلوب حاصل شود
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:columns-3 lg:mx-0 sm:mx-8 columns-1 ">
              <div className="p-4 md:py-6 md:px-2 ">
                <div className="flex flex-col  gap-4 ">
                  <span className=" flex gap-x-2">
                    <Image src={cpuSetting} alt="/"></Image>
                    <p className="text-xl font-bold  text-black1">
                      هوش مصنوعی{" "}
                    </p>
                  </span>
                  <p className="w-11/12 font-light text-justify text-black1">
                    از تکنیک‌های یادگیری عمیق و یادگیری‌ماشین برای طراحی و توسعه
                    استراتژی‌های الگوریتم‌محور استفاده می‌شود، الگوریتم‌هایی که
                    تمرکز آن بر یادگیری ازطریق تجربه و داده‌های real-time است
                  </p>
                </div>
              </div>
              <div className="p-4 md:py-6 md:px-2 ">
                <div className="flex flex-col  gap-4 ">
                  <span className=" flex gap-x-2">
                    <Image src={codeCircle} alt="/"></Image>
                    <p className="text-xl font-bold  text-black1">
                      پیاده‌سازی سامانه های تخصصی مکان‌محور{" "}
                    </p>
                  </span>
                  <p className="w-11/12 font-light text-justify text-black1">
                    طراحی و پیاده‌سازی انواع پلتفرم‌های اختصاصی مکان‌محور و تحت
                    وب، شامل نقشه و داشبوردهای مدیریتی و تحلیلی جهت اتخاذ
                    تصمیمات هوشمندانه‌تر و رسیدن به دیدی عمیق‌تر نسبت به
                    داده‌های مکانی
                  </p>
                </div>
              </div>
              <div className="p-4 md:py-6 md:px-2 ">
                <div className="flex flex-col  gap-4 ">
                  <span className=" flex gap-x-2">
                    <Image src={cloudConnection} alt="/"></Image>
                    <p className="text-xl font-bold  text-black1">
                      پردازش ابری{" "}
                    </p>
                  </span>
                  <p className="w-11/12 font-light text-justify text-black1">
                    کاربران می‌توانند در هر جا و هر مکانی که دسترسی به اینترنت
                    امکان‌پذیر باشد و با هر دستگاهی، به اطلاعات و داده‌های مکانی
                    و سامانه‌ها و پلتفرم‌های تحت‌وب دسترسی راحت داشته باشند
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* rahe hal */}
      <div className="flex items-center justify-center py-24">
        <div className="container flex flex-col gap-y-20 mx-4 sm:mx-auto">
          <div className="flex flex-col lg:gap-y-6 gap-y-12">
            <h2 className="text-3xl lg:text-right text-center font-semibold text-ED underline underline-offset-[16px] decoration-ED ">
              راه حل های سدره{" "}
            </h2>
            <p className=" lg:w-5/12 text-ED/80 font-light">
              با استفاده از راه حل هایی که سدره در زمینه های مختلف صنعتی ارائه
              می دهد نیازها و چالش خود را برطرف کنید
            </p>
          </div>
          <div className="grid lg:grid-cols-3 xl:gap-x-24 lg:gap-x-8 gap-y-8 lg:gap-y-0 justify-items-center">
            <div className="relative">
              <img
                src="/spatialIntelligence.webp"
                alt="/"
                className="object-cover rounded-3xl h-[500px] "
              ></img>
              <div className="absolute pb-24 top-0 bottom-0 left-0 right-0 flex flex-col gap-y-4 items-center justify-center bg-black1/60">
                <h3 className=" text-ED text-3xl font-extrabold">هوش مکانی</h3>
                <p className=" text-ED/90 font-light text-sm ">
                  شناسایی تغییرات پوشش های گیاهی و پهنه های آبی{" "}
                </p>
                <Link href="/">
                  <a className=" bg-primary2 py-1 font-semibold absolute bottom-0 left-0 px-4 rounded-tr-3xl rounded-bl-3xl">
                    اطلاعات بیشتر
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/agriculture.jpg"
                alt="/"
                className="object-cover rounded-3xl h-[500px] "
              ></img>
              <div className="absolute pb-24 top-0 bottom-0 left-0 right-0 flex flex-col gap-y-4 items-center justify-center bg-black1/60">
                <h3 className=" text-ED text-3xl font-extrabold">کشاورزی </h3>
                <p className=" text-ED/90 font-light text-sm ">
                  شناسایی مناطق حاصلخیز و قابل کشت{" "}
                </p>
                <Link href="/">
                  <a className=" bg-primary2 py-1 font-semibold absolute bottom-0 left-0 px-4 rounded-tr-3xl rounded-bl-3xl">
                    اطلاعات بیشتر
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/natural.jpg"
                alt="/"
                className="object-cover rounded-3xl h-[500px] "
              ></img>
              <div className="absolute pb-24 top-0 bottom-0 left-0 right-0 flex flex-col gap-y-4 items-center justify-center bg-black1/60">
                <h3 className=" text-ED text-3xl text-center font-extrabold">
                  منابع طبیعی و محیط زیست
                </h3>
                <p className=" text-ED/90 font-light text-sm ">
                  تشخیص مناطق و نواحی آلوده و خطرناک{" "}
                </p>
                <Link href="/">
                  <a className=" bg-primary2 py-1 font-semibold absolute bottom-0 left-0 px-4 rounded-tr-3xl rounded-bl-3xl">
                    اطلاعات بیشتر
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/solutions">
            <button className=" mt-8 border-2 border-primary3 px-4 py-3  w-fit rounded-lg self-center">
              <span className="flex flex-row gap-x-2 ">
                <p className="text-primary3 font-bold">
                  {" "}
                  مشاهده تمامی راه حل ها
                </p>
                <Image src={logout} alt="/"></Image>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* hamkaran */}
      <div className="flex bg-ED justify-center items-center py-24">
        <div className="container flex flex-col gap-y-20">
          <h2 className="text-3xl lg:text-right text-center font-semibold text-black1 underline underline-offset-[16px] decoration-black1 ">
            همکاران سدره{" "}
          </h2>
          <div className=" grid lg:grid-cols-3 gap-y-10 justify-items-center items-center">
            <Image
              src={p1Bg}
              layout="fixed"
              height={150}
              width={300}
              alt="/"
            ></Image>
            <Image
              src={p2}
              layout="fixed"
              width={150}
              height={150}
              alt="/"
            ></Image>
            <Image
              src={p3Bg}
              layout="fixed"
              height={100}
              width={200}
              alt="/"
            ></Image>
          </div>
          <Link href="/ourPartners#partne">
            <button className=" mt-8 border-2 border-primary4 px-4 py-3  w-fit rounded-lg self-center">
              <span className="flex flex-row gap-x-2 ">
                <p className="text-primary4 font-bold">مشاهده تمامی همکاران </p>
                <Image src={logout2} alt="/"></Image>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* servis */}
      <div className="flex items-center justify-center py-24">
        <div className="container flex flex-col gap-y-24 mx-4 sm:mx-auto">
          <div className="flex flex-col lg:gap-y-8 gap-y-12">
            <h2 className="text-3xl lg:text-right text-center font-semibold text-ED underline underline-offset-[16px] decoration-ED ">
              سرویس های سدره{" "}
            </h2>
            <p className=" lg:w-1/2 text-ED/80 font-light">
              شرکت‌ها، سازمان‌ها و دیگر افراد می‌توانند در زمینه‌های زیر از
              خدمات اختصاصی سدره بهره‌مند شوند
            </p>
          </div>
          <div className=" grid xl:grid-cols-4 md:grid-cols-2 gap-x-12 gap-y-24">
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={messages} alt="/"></Image>
                <p className="text-lg font-bold text-ED">
                  مشاوره و پشتیبانی فنی
                </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                شرکت ویراپردازان سدره‌ می‌تواند در زمینه‌های توسعه مدل‌سازی‌های
                هوش‌مصنوعی، تصاویر ماهواره‌ای تکنیک‌های علم داده، سنجش از دور و
                سیستم‌های اطلاعات مکانی از کسب و کار شما پشتیبانی کند
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={data2} alt="/"></Image>
                <p className="text-lg font-bold text-ED">پردازش اطلاعات </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                شناسایی و بررسی میزان تغییرات کاربری اراضی، پوشش‌های گیاهی،
                پهنه‌های آبی، تغییرات ساختمان‌های مسکونی، ناهمواری‌ها و کیفیت
                هوای یک منطقه به سفارش شما
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={documentText} alt="/"></Image>
                <p className="text-lg font-bold text-ED">
                  تولید بسته های اطلاعاتی
                </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                سدره با شناسایی الگوها و مدل‌سازی پدیده‌های گوناگون با
                هوش‌مصنوعی امکان به تصویرکشیدن اطلاعات مکانی در قالب نقشه،
                بصری‌سازی داده‌های مکانی و ارائه به‌صورت نمودارها و جداول تحلیلی
                و را دارد
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={code} alt="/"></Image>
                <p className=" font-bold text-ED">
                  پیاده سازی سامانه های مکان محور{" "}
                </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                برای رفع چالش‌های موجود در سر راهتان، به کمک ما یک راه‌حل کاملا
                عملیاتی و شخصی‌سازی شده را در قالب پلتفرم‌های مکان محور برای کسب
                و کار خود پیاده‌سازی کنید
              </p>
            </div>
          </div>
          <div className=" mt-8 flex flex-col gap-y-8">
            <p className=" text-sm text-ED/90 self-center">
              برای بهره‌مندی از سرویس‌ها و خدمات سدره با ما تماس بگیرید{" "}
            </p>

            <button
              className=" border-2 border-primary3 px-4 py-3  w-fit rounded-lg self-center"
              onClick={() => setOpen(true)}
            >
              <span className="flex flex-row gap-x-2 ">
                <Image src={messages1} alt="/"></Image>
                <p className="text-primary3 font-bold">ارتباط با سدره</p>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* pop up */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black1 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-ED text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mx-4 sm:mx-0">
                  <div className="flex flex-col justify-start order-2 px-6 py-5 space-y-6 bg-ED rounded-2xl xl:px-8 xl:py-8">
                    <div className="flex justify-between items-start">
                      <div className="space-y-4 ">
                        <p className="text-xl font-semibold ">
                          پیوستن به شبکه سدره{" "}
                        </p>
                        <p className="text-sm w-8/12 font-light ">
                          برای پیوستن به شبکه سدره و همکاری با این شرکت، کافیست
                          فرم زیر را کامل نمایید.{" "}
                        </p>
                      </div>
                      <button
                        className=" opacity-80"
                        onClick={() => setOpen(false)}
                      >
                        <Image
                          src={closeCircle}
                          width={40}
                          height={40}
                          alt="/"
                        ></Image>
                      </button>
                    </div>

                    <form
                      action=""
                      className="flex flex-col justify-start space-y-4"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <input
                        type="text"
                        placeholder="نام خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1 "
                        name="from_name"
                      />
                      <input
                        type="email"
                        placeholder="ایمیل خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1"
                        name="from_email"
                      />
                      <div className="flex flex-col gap-2 space-y-2 xl:flex-row xl:space-y-0">
                        <input
                          type="tel"
                          placeholder="شماره موبایل خود را وارد کنید ..."
                          className="px-2 py-2 text-sm border-none rounded bg-CB/50 xl:w-3/5 xl:text-xs  focus:outline focus:outline-1"
                          name="from_phone"
                        />

                        <select
                          id="subject"
                          class="bg-CB/50 xl:w-2/5 xl:text-xs text-sm rounded px-2 py-2 border-none  text-black1/80 focus:outline  focus:outline-1"
                          name="from_topic"
                        >
                          <option selected className=" text-black1/60">
                            موضوع مورد نظر
                          </option>
                          <option value="مدیریت شهری" className=" text-black1">
                            مدیریت شهری{" "}
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
                          <option
                            value="صنعتی و تجاری"
                            className=" text-black1"
                          >
                            صنعتی و تجاری{" "}
                          </option>
                          <option value="هواشناسی" className=" text-black1">
                            هواشناسی{" "}
                          </option>
                          <option value="انرژی" className=" text-black1">
                            انرژی{" "}
                          </option>
                          <option
                            value="حقوقی و قضایی"
                            className=" text-black1"
                          >
                            حقوقی و قضایی{" "}
                          </option>

                          <option
                            value="موارد دیگر ..."
                            className=" text-black1"
                          >
                            موارد دیگر ...{" "}
                          </option>
                        </select>
                      </div>

                      <textarea
                        rows="10"
                        placeholder="متن خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded resize-none bg-CB/50 focus:outline focus:outline-1 "
                        name="message"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full px-5 py-3 font-bold rounded-lg bg-primary3 text-primary4 hover:bg-primary3/60"
                        onClick={() => setOpen(false)}
                      >
                        ارسال پیام
                      </button>
                    </form>
                  </div>
                  {/* <div className="bg-ED px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* space */}
      {/* <div className="h-32"></div>  */}
    </div>
  );
};

export default HomePage;
