import React from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

import closeCircle from "../img/icon/close-circle.svg";

import ourPartners from "../public/ourPartners-image.jpg";
import sedrehLogo from "../img/logo/sedrehLogo.svg";

import task from "../img/icon/task.svg";
import medalStar from "../img/icon/medal-star.svg";
import cardReceive from "../img/icon/card-receive.svg";
import people from "../img/icon/people.svg";
import quotationLeft from "../img/icon/quotation-left.svg";
import quotationRight from "../img/icon/quotation-right.svg";
import { Notification } from "./Notification";

const OurPartners = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  // const notif = () => {
  //   <Notification />;
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
          // notif();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* landing page */}
      <div className="flex items-start justify-center w-full">
        <div className="flex items-start justify-center sm:mt-40 mt-36">
          <div className="md:container relative sm:mx-auto">
            <Image
              src={ourPartners}
              alt="/"
              height={2800}
              className="md:rounded-2xl"
            ></Image>

            {/* Overlay */}
            <div className="absolute top-0 bottom-0 left-0 right-0 h-[full] bg-gradient-to-b from-black/10 to-black  flex justify-center lg:items-end items-center md:pb-20 lg:pb-30 xl:pb-40 md:rounded-2xl">
              <div className="flex-col px-4 space-y-4 sm:px-8">
                <h1 className="text-2xl font-extrabold text-center xl:text-5xl sm:text-3xl flex sm:justify-start sm:items-end md:text-right text-ED">
                  همکاری با سدره
                </h1>
                <p className="text-xs lg:block hidden font-light text-justify sm:text-base md:w-1/2 text-ED/90 wspacing">
                  شرکت ویراپردازان سدره باتوجه به دغدغه هایی که دارد و همچنین
                  تجربه هایی که از طریق به انجام رساندن پروژه های فنی با سازمان
                  ها و شرکت های مختلف بدست آورده است همواره مشتاق همکاری با شما
                  می باشد
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-96"></div>
      </div>

      {/* chera hamkari */}
      <div id="cooperation"></div>
      <div className="flex items-center justify-center py-24">
        <div className="container flex flex-col items-center mx-auto gap-y-12">
          <p className=" text-primary3">کسب و کار خود را گسترش دهید</p>
          <h1 className="text-3xl font-semibold text-ED">چرا همکاری با سدره</h1>
          <div className="flex flex-col items-center gap-y-32">
            <p className="w-8/12 text-justify text-CB wspacing">
              ماموریت سدره بهره‌گیری صحیح از اطلاعات مکان‌محور می‌باشد که
              می‌تواند به استفاده بهینه از منابع کشور، افزایش عملکرد دستگاه‌های
              نظارتی و اجرایی و کاهش هزینه‌ها منجر شود، با سدره شریک شوید تا سطح
              فناوری خود را ارتقا داده، نفوذ خود را در بازار گسترش داده و به
              مشتریان خود کمک کنید تا از تصاویر ماهواره‌ای به موقع ارزش کسب
              کنند.
            </p>
            <div className="flex flex-col mx-4 gap-y-24 sm:mx-0 ">
              <Image src={sedrehLogo} width={345} height={130} alt="/"></Image>
              <div className="gap-16 space-y-24 lg:columns-3 md:gap-y-0">
                <div className="flex flex-col items-center gap-y-8 break-after-column">
                  <div className="flex flex-col gap-y-4">
                    <Image src={task} alt="/"></Image>
                    <p className="text-lg font-bold text-ED">
                      راه حل‌های منحصر به فرد با داده‌های منحصر به فرد{" "}
                    </p>
                  </div>
                  <p className="font-normal text-justify text-ED/70">
                    یافتن راه‌حل‌های هدفمند و شخصی‌سازی شده متناسب با نیازها و
                    چالش‌هایی که هر سازمان و یا کسب‌وکاری پیش‌روی خود ممکن است
                    داشته باشد می تواند تاثیر بسزایی در ارتقا و پیشرفت مجموعه
                    موردنظر بگذارد، درنهایت بعد از رسیدن به این راه‌حل ما با
                    تیم‌های فنی مهندسی شما کار می‌کنیم تا بینش های تحلیلی را در
                    جریان‌های کاری موجود شما ادغام کنیم
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-8 break-after-column">
                  <div className="flex flex-col gap-y-4">
                    <Image src={medalStar} alt="/"></Image>
                    <p className="text-xl font-bold text-ED">
                      کسب و کار خود را متمایز کنید{" "}
                    </p>
                  </div>
                  <p className="font-normal text-justify text-ED/70">
                    با استفاده روزانه و همیشگی از داده‌های مکان محور و بینش های
                    کاربردی که سدره در زمینه‌های مختلف مانند زمین خواری، کشاورزی
                    هوشمند، آلودگی هوا و... ارائه می دهد باعث تمایز خود با
                    رقبایتان بشوید
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-8">
                  <div className="flex flex-col gap-y-4">
                    <Image src={cardReceive} alt="/"></Image>
                    <p className="text-xl font-bold text-ED">
                      رشد و سودآوری سریع{" "}
                    </p>
                  </div>
                  <p className="font-normal text-justify text-ED/70">
                    از تاخیرهای غیرضروری و نتایج غیربهینه خودداری کنید. با یک
                    تیم مجرب برای طراحی و اجرای طرحی برای بدست آوردن هوش کاربردی
                    و عملیاتی با تجزیه و تحلیل های مکان‌محور شریک شوید تا به رشد
                    و سودآوری پایدار برسید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* shabake hamkaran */}
      <div id="partners"></div>
      <div className="flex bg-ED justify-center items-center py-24">
        <div className="container mx-auto grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 gap-y-20 sm:gap-y-20">
          <div className="flex flex-col sm:pr-8 pr-0 sm:border-r-2 gap-y-10 sm:border-primary4 border-r-none break-after-column h-fit self-center items-center sm:items-start">
            <h2 className="text-3xl font-semibold text-primary1">
              شبکه همکاران سدره
            </h2>
            <p className="w-4/5 text-justify text-black1/80 ">
              نتیجه مطالعات و بررسی‌های تطبیقی در زمینه نحوه بکارگیری تصاویر
              ماهواره‌ای و بهینه‌سازی استفاده از اطلاعات در کشورهای توسعه‌یافته،
              حکایت از آن دارد که سنگ بنای تصمیم‌گیری‌ها و برنامه‌ریزی های
              کشورهای توسعه یافته در سطوح مختلف، استفاده از اطلاعات مکان‌محور
              است و بسیاری از مشکلات مهم در سطوح ملی با استفاده از
              فناوری‌های‌مکانی قابل حل هستند. <br />
              <br />
              از این رو سدره همواره آماده همکاری با شرکت‌ها و سازمان‌های مختلف
              جهت رفع مشکلات و پیشرفت آنها می‌باشد.
            </p>
            <button
              className="px-5 py-3 font-bold rounded-lg bg-primary3 text-primary4 hover:bg-primary3/60 active:bg-primary3/40 w-fit"
              onClick={() => setOpen(true)}
            >
              <span className="flex flex-row gap-2 ">
                <Image src={people} alt="/"></Image>
                پیوستن به سدره{" "}
              </span>
            </button>
          </div>
          <div className="flex justify-center mx-4 sm:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/graph.png" usemap="#image-map" alt="aa" />
            <map name="image-map">
              <area
                target="_blank"
                alt="utstpark"
                title="utstpark"
                href="http://utstpark.ir/"
                coords="93,46,44"
                shape="circle"
              />
              <area
                target="_blank"
                alt="mcihub"
                title="mcihub"
                href="http://mcihub.ir/"
                coords="311,47,44"
                shape="circle"
              />
              <area
                target="_blank"
                alt="doe"
                title="doe"
                href="https://www.doe.ir/"
                coords="354,213,44"
                shape="circle"
              />
              <area
                target="_blank"
                alt="bco"
                title="bco"
                href="http://www.bco.ir/fa/index.aspx"
                coords="199,322,46"
                shape="circle"
              />
              <area
                target="_blank"
                alt="kosarut"
                title="kosarut"
                href="https://kosarut.ir/"
                coords="48,224,45"
                shape="circle"
              />
            </map>
          </div>
        </div>
      </div>

      {/*  */}

      {/* hamkaran sedreh */}
      {/* <div className="flex items-center justify-center mt-80">
        <div className="container flex flex-col mx-4 sm:mx-auto gap-y-28">
          <h2 className="text-3xl font-semibold text-center text-ED">
            شرکای سدره درباره ما چه می گویند ؟{" "}
          </h2>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:h-96 gap-y-4 ">
            <div className="flex flex-col lg:col-span-4 gap-y-20">
              <p className="pr-4 text-xl font-semibold border-r-2 text-ED border-primary3">
                مرکز نوآوری و شتابدهی پیشرانا{" "}
              </p>
              <div className="flex flex-col gap-y-3">
                <span>
                  <Image src={quotationLeft} alt="/" className=""></Image>
                </span>
                <p className="text-justify text-CB wspacing">
                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                  جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                  برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                  زبان فارسی ایجاد کرد.
                </p>
                <span className=" text-end">
                  <Image src={quotationRight} alt="/"></Image>
                </span>
              </div>
            </div>
            <div className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <div className="rounded-lg h_iframe-aparat_embed_frame ">
                <iframe
                  className="w-full h-full rounded-lg aspect-video"
                  src="https://www.aparat.com/video/video/embed/videohash/CJbFr/vt/frame"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/*  */}

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
                      <input
                        type="tel"
                        placeholder="شماره موبایل خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1"
                        name="from_phone"
                      />
                      <input
                        type="text"
                        placeholder="زمینه کاری خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1"
                        name="from_topic"
                      />
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* <div className="h-32"></div> */}
    </>
  );
};

export default OurPartners;
