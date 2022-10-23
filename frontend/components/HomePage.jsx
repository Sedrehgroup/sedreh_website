/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

import p1 from "../img/partners/p1.png";
import p2 from "../img/partners/p2.png";
import p3 from "../img/partners/p3.png";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

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
        <div className="container flex flex-col justify-center lg:space-y-36 space-y-4 mt-16 lg:mt-32 mx-4 sm:mx-auto">
          <div className="flex flex-col sm:gap-y-8 gap-y-8 xl:items-start items-center">
            <h1 className="px-8 lg:text-4xl sm:text-5xl text-3xl font-extrabold leading-tight text-center xl:text-right sm:w-4/5 xl:w-1/3 md:p-0 text-ED">
              با استفاده از هوش مکانی با چشمانی باز تصمیم بگیرید{" "}
            </h1>
            <p className="px-8 text-justify lg:w-full md:p-0 xl:w-2/3 text-ED/90 font-light wspacing">
              شرکت ویراپردازان سدره با تولید و پردازش اطلاعات کاربردی مکان‌محور
              با استفاده از تصاویر ماهواره‌ای طیف وسیعی از نیازها و مشکلاتی که
              کسب‌وکار‌ها، سازمان‌های دولتی ویا سایر افراد با آن مواجه هستند را
              برطرف می کند. سدره همچنین راه‌حل‌های موثری را در زمینه های پایش
              تغییرات کاربری اراضی، هواشناسی، آلودگی هوا، کشاورزی و باغداری،
              املاک و مستغلات و دیگر زمینه‌های کاربردی بنا بر درخواست سفارشی شما
              توسعه می‌دهد.
            </p>
          </div>
          <div className="">
            <Carousel />
          </div>
        </div>
      </div>

      {/* tavaanmandy */}
      <div className="flex bg-ED lg:h-[700px] sm:h-[1300px] h-[1400px] justify-center items-center">
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
                    شرکت سدره با تبدیل داده های توصیفی و آماری به اطلاعات هوشمند
                    مکان محور، تجزیه و تحلیل های مکانی را در هر لحظه در اختیار
                    کاربران قرار می دهد
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
                    سدره با بررسی و تحلیل تصاویر حاصل از سنجنده های ماهواره ای
                    ازطریق تکنیک‌های سنجش از دور به‌منظور شناسایی پوشش گیاهی،
                    مطالعه اقلیم ایران، مطالعه آلودگی هوا، پیش‌بینی وضع هوا و
                    میزان جنگخواری‌ها استفاده می‌کند
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
                    سدره با استفاده علوم داده از روش‌ها، الگوریتم‌ها و
                    پروسه‌هایی برای گرفتن خروجی و آنالیز داده استفاده می کند،
                    همچنین سدره با استفاده از تکنیک‌های دیتا ساینس روی مهندسی و
                    تجسم بهتر داده و ارائه بهتر داده تمرکز کرده است
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
                    تیم سدره توانسته است با استفاده از فناوری‌های هوش مصنوعی و
                    داده‌های ماهواره‌ای به الگوریتم‌های پیچیده ماشین لرنینگ
                    به‌منظور بهره‌گیری از داده‌های مکان محور دست پیدا کند
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
                    سدره بنابر نیازها و اهداف هر کسب‌وکار امکان طراحی و
                    پیاده‌سازی کامل انواع سامانه‌های تخصصی مکان محور را جهت رفع
                    چالش‌های پیش‌رو دارد
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
                    سدره از طریق فضای ابری اطلاعات را بین بخش‌ها و مکان‌های
                    مختلف یکپارچه می کند و سپس با کمک سرویس‌های ابری مثل یادگیری
                    ماشین و هوش مصنوعی، بینش بهتری برای تصمیم‌گیری ارائه می دهد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* rahe hal */}
      <div className="flex items-center justify-center mt-60">
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
                <h3 className=" text-ED text-3xl font-extrabold">
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
      <div className="flex bg-ED lg:h-[700px] h-[1100px] justify-center items-center mt-60">
        <div className="container flex flex-col gap-y-20">
          <h2 className="text-3xl lg:text-right text-center font-semibold text-black1 underline underline-offset-[16px] decoration-black1 ">
            همکاران سدره{" "}
          </h2>
          <div className=" grid lg:grid-cols-3 gap-y-10 justify-items-center">
            <Image src={p1} layout="fixed" height={200} alt="/"></Image>
            <Image
              src={p2}
              layout="fixed"
              width={200}
              height={200}
              alt="/"
            ></Image>
            <Image src={p3} layout="fixed" height={200} alt="/"></Image>
          </div>
          <Link href="/ourPartners#cooperation">
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
      <div className="flex items-center justify-center mt-60">
        <div className="container flex flex-col gap-y-24 mx-4 sm:mx-auto">
          <div className="flex flex-col lg:gap-y-8 gap-y-12">
            <h2 className="text-3xl lg:text-right text-center font-semibold text-ED underline underline-offset-[16px] decoration-ED ">
              سرویس های سدره{" "}
            </h2>
            <p className=" lg:w-1/2 text-ED/80 font-light">
              سدره در زمینه‌های زیر می‌تواند به کسب‌وکارها، سازمان‌ها و دیگر
              افراد خدمات اختصاصی خود را ارائه بدهد
            </p>
          </div>
          <div className=" grid xl:grid-cols-4 md:grid-cols-2 gap-x-16 gap-y-24">
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={messages} alt="/"></Image>
                <p className="text-lg font-bold text-ED">
                  مشاوره و پشتیبانی فنی
                </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                شرکت ویراپردازان سدره‌ می‌تواند در زمینه‌های هوش‌مصنوعی، علم
                داده، سنجش از دور و سیستم‌های اطلاعات مکانی از کسب و کار شما
                پشتیبانی کند
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={data2} alt="/"></Image>
                <p className="text-lg font-bold text-ED">پردازش اطلاعات </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                سدره با شناسایی الگوها و مدل‌سازی پدیده‌های گوناگون با
                هوش‌مصنوعی امکان ارائه و به تصویرکشیدن اطلاعات مکانی و موضوعی در
                قالب نقشه ونیز امکان استفاده از داده‌های موجود در جهت اهداف
                مختلف و براساس نیازهای گوناگون کاربران را فراهم کرده است
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
                شناسایی و بررسی میزان تغییرات کاربری اراضی، پوشش‌های گیاهی،
                پهنه‌های آبی، تغییرات ساختمان‌های مسکونی، ناهمواری‌ها و کیفیت
                هوای یک منطقه به سفارش شما
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
                برای رفع چالش‌های موجود، به کمک ما یک راه‌حل کاملا عملیاتی و
                شخصی‌سازی شده را در قالب پلتفرم‌های مکان محور برای کسب و کار خود
                پیاده‌سازی کنید
              </p>
            </div>
          </div>
          <div className=" mt-8 flex flex-col gap-y-8">
            <p className=" text-sm text-ED/90 self-center">
              برای بهره‌مندی از سرویس‌ها و خدمات سدره با تماس بگیرید{" "}
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
                    >
                      <input
                        type="text"
                        placeholder="نام خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1 "
                      />
                      <input
                        type="email"
                        placeholder="ایمیل خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1"
                      />
                      <div className="flex flex-col gap-2 space-y-2 xl:flex-row xl:space-y-0">
                        <input
                          type="tel"
                          placeholder="شماره موبایل خود را وارد کنید ..."
                          className="px-2 py-2 text-sm border-none rounded bg-CB/50 xl:w-3/5 xl:text-xs 2xl:text-sm focus:outline focus:outline-1"
                        />

                        <select
                          id="subject"
                          class="bg-CB/50 xl:w-2/5 xl:text-xs 2xl:text-sm text-sm rounded px-2 py-2 border-none  text-black1/80 focus:outline  focus:outline-1"
                        >
                          <option selected className=" text-black1/60">
                            موضوع مورد نظر
                          </option>
                          <option value="KE" className=" text-black1">
                            مدیریت شهری{" "}
                          </option>
                          <option value="MA" className=" text-black1">
                            رسانه{" "}
                          </option>
                          <option value="HA" className=" text-black1">
                            منابع طبیعی و محیط زیست{" "}
                          </option>
                          <option value="NA" className=" text-black1">
                            صنعتی و تجاری{" "}
                          </option>
                          <option value="NA" className=" text-black1">
                            هواشناسی{" "}
                          </option>
                          <option value="NA" className=" text-black1">
                            انرژی{" "}
                          </option>
                          <option value="NA" className=" text-black1">
                            حقوقی و قضایی{" "}
                          </option>

                          <option value="NA" className=" text-black1">
                            موارد دیگر ...{" "}
                          </option>
                        </select>
                      </div>

                      <textarea
                        rows="10"
                        placeholder="متن خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded resize-none bg-CB/50 focus:outline focus:outline-1 "
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
      <div className="h-32"></div>
    </div>
  );
};

export default HomePage;
