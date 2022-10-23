/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import emailjs from "@emailjs/browser";

import s1 from "/img/servicesImage/s1.jpg";
import s2 from "/img/servicesImage/s2.jpg";
import s3 from "/img/servicesImage/s3.jpg";
import approach1 from "/img/servicesImage/approach1.jpg";
import approach2 from "/img/servicesImage/approach2.jpg";
import counseling from "/img/servicesImage/counseling.jpg";
import system1 from "/img/servicesImage/system1.png";
import system2 from "/img/servicesImage/system2.jpg";
import system3 from "/img/servicesImage/system3.jpg";

import data from "../img/icon/data.svg";
import gps from "../img/icon/gps.svg";
import satellite from "../img/icon/satellite.svg";
import code from "../img/icon/code.svg";

import shieldTick2 from "../img/icon/shield-tick2.svg";
import logout from "../img/icon/logout.svg";
import logout2 from "../img/icon/logout2.svg";
import messages2 from "../img/icon/messages2.svg";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import closeCircle from "../img/icon/close-circle.svg";
import ServicesComponent1 from "./Subcomponents/ServicesComponent1";

const Services = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  //
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6tq8dx3",
  //       "template_lh079dc",
  //       form.current,
  //       "qsclqTFM0PTc7W9o0"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  //

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/services-image.jpg"
          className="object-cover w-full h-screen"
          alt="/"
        />

        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black1/80 ">
          <div className="container flex justify-between lg:items-end lg:flex-row flex-col gap-y-16 items-center">
            <div className="flex flex-col gap-y-8 items-center lg:items-start">
              <h1 className="text-ED md:text-6xl text-4xl font-bold">
                خدمات اختصاصی سدره
              </h1>
              <p className="text-ED/90 font-light text-lg md:w-2/3 text-center md:text-right">
                سدره به هر نوع کسب‌وکار و یا سازمانی در زمینه‌های هوش‌مصنوعی،
                پردازش اطلاعات، سیستم‌های اطلاعات مکانی و سنجش از دور خدمات
                اختصاصی ارائه می دهد
              </p>
            </div>
            <div className="">
              <button
                onClick={() => setOpen(true)}
                className=" flex flex-col gap-y-3 p-4 bg-ED bg-opacity-90 rounded-lg items-center "
              >
                <p className=" font-extrabold text-xl text-primary4">
                  مشاوره و پشتیبانی فنی
                </p>
                <p className=" text-primary4">
                  برای دریافت خدمات اختصاصی با ما ارتباط بگیرد
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* komak */}
      <div className="flex items-center justify-center mt-60">
        <div className="container flex flex-col gap-y-20 mx-4 sm:mx-auto">
          <div className="flex flex-col lg:gap-y-12 gap-y-12 items-center">
            <h2 className="text-3xl text-center font-semibold text-ED  ">
              چگونه به کسب و کار شما کمک خواهیم کرد{" "}
            </h2>
            <p className=" lg:w-8/12 text-ED/80 font-light text-justify">
              یافتن راه‌حل‌های هدفمند و شخصی‌سازی شده متناسب با نیازها و
              چالش‌هایی که هر سازمان و یا کسب‌وکاری پیش روی خود ممکن است داشته
              باشد می‌تواند تاثیر بسزایی در ارتقا و پیشرفت مجموعه موردنظر
              بگذارد، درنهایت بعد از رسیدن به این راه‌حل ما با تیم‌های فنی
              مهندسی شما کار می‌کنیم تا بینش‌های تحلیلی را در جریان‌های کاری
              موجود شما ادغام کنیم.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:mx-40 lg:mx-0   xl:gap-x-24 sm:gap-x-8 sm:gap-y-32 gap-y-16 justify-items-center  ">
            <ServicesComponent1
              img={s1}
              title="کاهش ریسک"
              description="از تاخیرهای غیرضروری و نتایج غیربهینه خودداری کنید. با یک تیم مجرب برای طراحی و اجرای طرحی برای بدست آوردن هوش کاربردی و عملیاتی با تجزیه و تحلیل های مکان‌محور شریک شوید"
            />
            <ServicesComponent1
              img={s2}
              title="افزایش ارزش و بهره‌وری"
              description="با استفاده از هوش‌مکانی که بر پایه تجزیه و تحلیل های داده‌های جغرافیایی می‌باشد راه‌حل‌هایی کاملا کاربردی و عملیاتی متناسب با کار خود را پیاده‌سازی کنید تا بهره‌وری کارتان به‌مقدار چشم‌گیری افزایش بیابد"
            />
            <ServicesComponent1
              img={s3}
              title="مدیریت منابع"
              description="با استفاده از اطلاعات مکان‌محور و بینش‌های کاربردی و به‌موقعی که سدره ارائه می‌دهد به‌صورت دائمی از تغییرات محیط اطراف خود باخبر شوید و از رقیب‌های خود پیشی بگیرید "
            />
          </div>
        </div>
      </div>

      {/* roikard */}
      <div className="flex items-center justify-center mt-60 bg-ED py-24">
        <div className="container flex flex-col gap-y-32 mx-4 sm:mx-auto">
          <h2 className="text-3xl text-center font-semibold text-black1  ">
            رویکرد سدره{" "}
          </h2>
          <div className="flex justify-between lg:gap-x-16 xl:mx-40">
            <div className="md:block hidden">
              <Image
                src={approach1}
                width={1200}
                height={1200}
                alt="/"
                className=" object-cover rounded-lg"
              ></Image>
            </div>
            <div className="flex flex-col gap-y-4 px-8">
              <h2 className=" font-semibold text-2xl text-primary">
                طراحی راه حل
              </h2>
              <p className=" text-justify lg:leading-7">
                سدره ابتدا با تیم فنی شما برای تشخیص میزان کارکرد و اثربخشی
                اطلاعات مکانی و تجزیه و تحلیل تصاویر ماهواره‌ای در سیستم‌های شما
                برای طراحی راه‌حلی هدفمند باتوجه به نیازها و چالش‌های
                کسب‌وکارتان شروع به‌کار می‌کند<br></br> ملاحظاتی که در این
                فرآیند درنظر می‌گیریم عبارت‌اند از: <br></br>
                <br></br> آیا تجزیه و تحلیل داده‌های مکان‌محور و تصاویر
                ماهواره‌ای می‌تواند ارزش افزوده‌ای برای شما ایجاد کند؟<br></br>{" "}
                آیا داده‌های کافی در زمینه‌های موردنیاز شما وجود دارد؟<br></br>{" "}
                تجزیه و تحلیل اطلاعات هوشمند مکان‌محور چگونه به بهبود کارایی
                سیستم‌های شما کمک خواهد کرد؟<br></br> چگونه می‌توان الگوریتم‌ها
                را برای داشتن بهترین عملکرد در زمینه کاری شما، پیکیربندی کرد؟
              </p>
            </div>
          </div>
          <div className="flex justify-between lg:gap-x-16 xl:mx-40">
            <div className="flex flex-col gap-y-4 px-8">
              <h2 className=" font-semibold text-2xl text-primary">
                تخصصی چندبعدی
              </h2>
              <p className=" text-justify lg:leading-7">
                تیم فنی ما با داشتن تجربه‌های موفق در پیاده‌سازی سامانه‌های
                هوشمند اطلاعات مکانی مانند شناسایی تغییرات کاربری اراضی و تعیین
                کیفیت‌هوا با استفاده از آنالیز و تحلیل کاربردی مجموعه داده‌های
                جغرافیایی و مکان‌محور می‌تواند بسیاری از نیازها و چالش‌های کاری
                شما را رفع کند. <br />
                <br /> تیم ما در طول چرخه عمر پروژه شما از طراحی تا اجرا و
                پیاده‌سازی نهایی با شما همکاری می کند، این یک فرآیند مشارکتی است
                که تضمین می‌کند نتایج تحلیلی سدره به دستیابی به اهداف تجاری و
                کاری شما کمک می کند.
              </p>
            </div>
            <div className="md:block hidden">
              <Image
                src={approach2}
                width={1200}
                height={1200}
                alt="/"
                className=" object-cover rounded-lg"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* servis */}
      <div id="counseling"></div>
      <div className="flex items-center justify-center mt-60">
        <div className="container flex flex-col gap-y-24 mx-4 sm:mx-auto">
          <div className="flex flex-col lg:gap-y-12 gap-y-16 items-center">
            <h2 className="text-3xl  text-center font-semibold text-ED ">
              سرویس‌های فنی سدره{" "}
            </h2>
            <p className=" lg:w-1/2 text-ED/80 font-light text-justify">
              تیم‌های تخصصی سدره در انواع زمینه‌های سنجش از دور، سیستم‌های
              اطلاعات مکانی، علم داده و یادگیری ماشین همواره آماده هستند تا به
              شما در راستای رسیدن به اهداف و برداشتن موانع پیش‌روی کسب‌وکار خود
              کمک بدهند تا راه‌حل ‌های شخصی‌سازی شده و مناسب خود را پیدا و
              عملیاتی بکنید
            </p>
          </div>
          <div className="grid xl:grid-cols-2 justify-between xl:gap-x-6 gap-y-8 ">
            <div className=" rounded-2xl bg-primary2 flex flex-col items-center gap-y-12  p-10">
              <p className=" text-black1 underline underline-offset-[16px] text-xl font-bold decoration-black1 decoration-2">
                مشاوره و پشتیبانی فنی
              </p>
              <p className=" text-black1/90 font-light text-justify lg:px-24">
                تیم سدره با تجربه انجام پروژه‌های مختلف صنعتی، در حوزه‌های مختلف
                مانند یادگیری ماشین، سیستم اطلاعات مکانی و سنجش از دور همواره
                آماده کمک به شما می‌باشد.
              </p>
              <div className="flex flex-col items-center gap-y-8">
                <p className="text-black1 font-bold text-sm">
                  چه چیزی برای مشتریان و شرکای ما ارزش ایجاد می کند
                </p>
                <div className="grid md:grid-cols-2 md:gap-x-6 gap-y-6">
                  <div className="flex flex-col items-center gap-4 p-5 bg-black1/10 rounded-3xl">
                    <span className="flex flex-col gap-3">
                      <Image src={shieldTick2} alt="/"></Image>{" "}
                      <p className="text-xl font-bold text-black1">کشف </p>
                    </span>
                    <p className="lg:px-3 text-justify text-black1/90">
                      ما با تیم شما همکاری خواهیم کرد تا باتوجه به فناوری ها و
                      چالش های شما بهترین راه‌حل ممکن را پیدا بکنیم
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-5 bg-black1/10 rounded-3xl">
                    <span className="flex flex-col gap-3">
                      <Image src={shieldTick2} alt="/"></Image>{" "}
                      <p className="text-xl font-bold text-black1">اجرا </p>
                    </span>
                    <p className="lg:px-3 text-justify text-black1/90">
                      سدره به شما کمک می‌کنیم تا با ادغام داده‌های هوشمند
                      مکان‌محور در سیستم ها و زیرساخت هایتان چالش‌های خود را حل
                      کنید
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" rounded-2xl bg-ED flex flex-col items-center gap-y-12  p-10">
              <p className=" text-black1 underline underline-offset-[16px] text-xl font-bold decoration-black1 decoration-2">
                سامانه های تخصصی مکان‌محور{" "}
              </p>
              <p className=" text-black1/90 font-light text-justify lg:px-24">
                ما در سدره با تجربه طراحی و پیاده‌سازی موفق چندین سامانه کاربردی
                مکان‌محور در زمینه‌های مختلف همواره آماده کمک و همکاری با دیگر
                شرکت‌ها و مراکز برای پیشرفت و ارتقای آنها هستیم
              </p>
              <div className="flex flex-col items-center gap-y-8">
                <p className="text-black1 font-bold text-sm">
                  چه چیزی برای مشتریان و شرکای ما ارزش ایجاد می کند
                </p>
                <div className="grid md:grid-cols-2 md:gap-x-6 gap-y-6">
                  <div className="flex flex-col items-center gap-4 p-5 bg-black1/10 rounded-3xl">
                    <span className="flex flex-col gap-3">
                      <Image src={shieldTick2} alt="/"></Image>{" "}
                      <p className="text-xl font-bold text-black1">
                        شخصی‌سازی شده{" "}
                      </p>
                    </span>
                    <p className="lg:px-3 text-justify text-black1/90">
                      تیم سدره بعد از شناسایی دقیق اهداف و راه‌حل های موجود شما،
                      بهترین و مناسب‌ترین پلتفرم را متناسب با نیازهای شما را
                      پیاده‌سازی خواهد کرد
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-5 bg-black1/10 rounded-3xl">
                    <span className="flex flex-col gap-3">
                      <Image src={shieldTick2} alt="/"></Image>{" "}
                      <p className="text-xl font-bold text-black1">
                        کاربردی بودن{" "}
                      </p>
                    </span>
                    <p className="lg:px-3 text-justify text-black1/90">
                      پلتفرم‌های مکان‌محور کاملا به‌صورت کاربردی براساس نیازهای
                      مشتریان شما طراحی و پیاده‌سازی می‌شوند
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* moshavere */}
      <div className="flex items-center justify-center mt-60">
        <div className="grid md:grid-cols-2 bg-ED">
          <div className="flex flex-col gap-y-8 xl:pr-40 md:py-44 py-32 px-16">
            <h2 className=" text-primary1 text-2xl font-semibold">
              درخواست مشاوره و پشتیبانی فنی
            </h2>
            <p className="text-justify text-primary1/90 xl:pl-32 ">
              ما در سدره با تکیه بر تجربیات تخصصی خود در زمینه‌های مختلف فنی
              حاصل از طراحی و پیاده‌سازی انواع سامانه‌های مکان‌محور با کمک
              تیم‌های متخصص خود همواره آماده ارائه هرنوع کمک و پشتیبانی در
              زمینه‌های مربوطه هستیم
            </p>
            <button
              className=" border-2 border-primary1 px-4 py-3  w-fit rounded-lg "
              onClick={() => setOpen(true)}
            >
              <span className="flex flex-row gap-x-2">
                <Image src={messages2} alt="/"></Image>
                <p className="text-primary1 font-bold">مشاوره و پشتیبانی فنی</p>
              </span>
            </button>
          </div>
          <Image
            src={counseling}
            alt="counseling"
            className="object-cover"
          ></Image>
        </div>
      </div>

      {/* team */}
      <div className="flex items-center justify-center mt-60">
        <div className="container flex flex-col gap-y-20 mx-4 sm:mx-auto">
          <h2 className="text-3xl text-center font-semibold text-ED ">
            معرفی تیم های تخصصی سدره{" "}
          </h2>

          <div className=" grid xl:grid-cols-4 md:grid-cols-2 gap-x-16 gap-y-24">
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={data} alt="/"></Image>
                <p className="text-lg font-bold text-ED">هوش‌مصنوعی </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                متخصصان هوش‌مصنوعی سدره با شناسایی الگوهای گوناگون و توسعه انواع
                مدل‌های هوش مصنوعی به تولید بسته‌های اطلاعاتی اختصاصی برای شما
                کمک خواهند کرد
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={gps} alt="/"></Image>
                <p className="text-lg font-bold text-ED">
                  سیستم‌های اطلاعات مکانی
                </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                با دسترسی صحیح و سریع به داده‌های موردنیاز در یک حجم وسیع، امکان
                ارائه و به تصویرکشیدن اطلاعات مکانی و موضوعی در قالب نقشه ونیز
                امکان استفاده از داده‌های موجود در جهت اهداف مختلف و براساس
                نیازهای گوناگون کاربران فراهم می‌گردد
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={satellite} alt="/"></Image>
                <p className="text-lg font-bold text-ED">سنجش از دور </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                متخصصان سنجش از دور تیم سدره می‌توانند با استفاده از تصاویر قابل
                پردازش با کمک رایانه، بررسی یک منطقه بر اساس یک سری زمان و تهیه
                داده های متناوب به کسب و کار شما کمک بکنند
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 ">
              <div className="flex flex-col gap-y-3">
                <Image src={code} alt="/"></Image>
                <p className=" font-bold text-ED">
                  پیاده‌سازی سامانه‌های تخصصی مکان‌محور{" "}
                </p>
              </div>
              <p className="font-normal text-justify text-ED/70">
                برای رفع چالش‌های موجود، به کمک ما یک راه‌حل کاملا عملیاتی و
                شخصی‌سازی شده را در قالب پلتفرم‌های مکان محور برای کسب و کار خود
                پیاده‌سازی کنید
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* saamaane */}
      <div id="specializedSystems"></div>
      <div className="flex items-center justify-center mt-60">
        <div className="container flex flex-col gap-y-36 mx-4 sm:mx-auto">
          <div className="flex flex-col lg:gap-y-12 gap-y-12 items-center">
            <h2 className="text-3xl text-center font-semibold text-ED  ">
              سامانه های تخصصی مکان محور چه مواردی را شامل می شوند{" "}
            </h2>
            <p className=" lg:w-8/12 text-ED/80 font-light text-justify">
              بسیاری از کسب‌وکارها یا سازمان‌هایی وجود دارند که داده‌ها و
              اطلاعات مکان‌محور برای آنها نقش کلیدی ایفا می‌کند زیرا امروزه بیش
              از 80٪ از اطلاعات مورد نیاز در تصمیم‌گیری، برنامه‌ریزی‌ها و مدیریت
              در سطوح مختلف مکان‌محور بوده و بدون این اطلاعات توسعه پایدار در
              زمینه‌های مختلف امکان‌پذیر نمی‌باشد. ما در سدره همواره با استفاده
              از طراحی و پیاده‌سازی کامل انواع سامانه‌های مکان‌محور به آنها در
              توسعه پایدار خود کمک می‌کنیم.
            </p>
          </div>
          <div className="flex flex-col gap-y-40">
            <div className="flex justify-between lg:gap-x-16 xl:mx-40">
              <div className="md:block hidden">
                <Image
                  src={system1}
                  width={1400}
                  height={1400}
                  alt="/"
                  className=" object-cover rounded-lg"
                ></Image>
              </div>
              <div className="flex flex-col gap-y-4 px-8">
                <h2 className=" font-semibold text-2xl text-primary">
                  تغییرات کاربری اراضی{" "}
                </h2>
                <p className=" text-justify lg:leading-7 text-ED/90">
                  کاربری اراضی به معنای نحوه استفاده از زمین می‌باشد و تصحیح
                  کاربری اراضی با هدف تعیین نوع فعالیت مستقر روی زمین جهت
                  بهره‌برداری بهینه از منابع و کاهش ناسازگاری بین کاربری‌های
                  مجاور و در عین حال توسعه برنامه‌ریزی شده‌ی کاربری‌ها، چالش
                  همیشگی دستگاه‌های برنامه‌ریز است. <br />
                  <br /> سامانه پایش تغییرات زمین اولین محور فعالیت سدره می‌باشد
                  که با استفاده از پردازش تصاویر ماهواره‌ای و ابزارهای فناوری
                  اطلاعات، ضمن شناسای و دسته‌بندی عوارض سطح زمین در هفت کلاس،
                  بستری جهت نظارت بر تغییرات کاربری اراضی و زمین‌خواری برای
                  شرکت‌ها و سازمان های ذی‌ربط فراهم می‌آورد. <br />
                  <br /> از کلاس‌های مختلفی که در این سامانه استفاده می‌شود می
                  توان به شناسایی درختان، پوشش گیاهی، پهنه آبی، زمین کشاورزی،
                  ساختمان‌های مسکونی و زمین بایر نام برد
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:gap-x-16 xl:mx-40">
              <div className="flex flex-col gap-y-4 px-8">
                <h2 className=" font-semibold text-2xl text-primary">
                  کشاورزی هوشمند{" "}
                </h2>
                <p className=" text-justify lg:leading-7 text-ED/90">
                  کشاورزان می توانند سلامت محصول را از فصل داشت تا برداشت، برای
                  کشاورزی کارآمدتر، سودآورتر و پایدارتر اندازه گیری کنند. سنجش
                  از دور ابزار مهمی در پایش به موقع و ارائه تصویری دقیق از بخش
                  کشاورزی با فرکانس بالا و دقت بالا می باشد. برای مدیریت پایدار
                  کشاورزی، تمامی عواملی که بر بخش کشاورزی تأثیر می‌گذارند باید
                  بر مبنای مکانی و زمانی تحلیل شوند. <br />
                  <br /> فناوری ها کاربردهای متعددی در زمینه کشاورزی دارند مانند
                  تخمین سطح زیر کشت محصول، پایش رشد محصول، تخمین رطوبت خاک،
                  ارزیابی حاصلخیزی خاک، تشخیص تنش محصول، تشخیص بیماری ها و
                  آلودگی آفات، پایش وضعیت خشکسالی و سیل، تخمین عملکرد، پیش‌بینی
                  آب و هوا وکشاورزی دقیق برای حفظ پایداری سیستم‌های کشاورزی و
                  بهبود رشد اقتصادی کشور.
                </p>
              </div>
              <div className="md:block hidden">
                <Image
                  src={system2}
                  width={1400}
                  height={1400}
                  alt="/"
                  className=" object-cover rounded-lg"
                ></Image>
              </div>
            </div>
            <div className="flex justify-between lg:gap-x-16 xl:mx-40">
              <div className="md:block hidden">
                <Image
                  src={system3}
                  width={1400}
                  height={1400}
                  alt="/"
                  className=" object-cover rounded-lg"
                ></Image>
              </div>
              <div className="flex flex-col gap-y-4 px-8">
                <h2 className=" font-semibold text-2xl text-primary">
                  اطلاعات هوشمند محیطی{" "}
                </h2>
                <p className=" text-justify lg:leading-7 text-ED/90">
                  دومین محور فعالیت‌های سدره کار بروی داده‌های محیطی آلودگی‌هوا
                  و هواشناسی می‌باشد. در سامانه ملی آلودگی‌هوای سدره با استفاده
                  از یادگیری ماشین مدل‌سازی انجام شده است، به این صورت که
                  ورودی‌های اصلی عبارت‌اند از تصاویر ماهواره‌ای و داده‌های حاصل
                  از مدل‌های هواشناسی و خروجی‌های آن نیز عبارت‌اند از تخمین غلظت
                  حجمی و شاخص آلودگی‌هوا در ارتفاع تنفسی برای آلاینده‌های اصلی
                  هوا به‌صورت پیوسته برای سراسر کشور. <br />
                  <br /> در سامانۀ شهری آلودگی‌هوا از تکنیک‎های درون‎یابی و
                  برون‎یابی استفاده شده است و به این صورت با استفاده از داده‎های
                  حاصل از اندازه‎گیری زمینی توسط ایستگاه‎های سنجش آلودگی هوای
                  سازمان محیط زیست و شهرداری تهران، شاخص کیفیت هوای نقاطی که
                  فاقد ایستگاه زمینی هستند را تخمین می‎زند و به ضمن بصری‎سازی
                  این خروجی‎ها، به شکل قابل استفاده‎تری این اطلاعات را نمایش
                  می‎دهد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* space */}
      <div className=" h-[200px]"></div>

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
                      // ref={form}
                      // onSubmit={sendEmail}
                    >
                      <input
                        type="text"
                        placeholder="نام خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1 "
                        // name="from_name"
                      />
                      <input
                        type="email"
                        placeholder="ایمیل خود را وارد کنید ..."
                        className="px-2 py-2 text-sm border-none rounded bg-CB/50 focus:outline focus:outline-1"
                        // name="from_email"
                      />
                      <div className="flex flex-col gap-2 space-y-2 xl:flex-row xl:space-y-0">
                        <input
                          type="tel"
                          placeholder="شماره موبایل خود را وارد کنید ..."
                          className="px-2 py-2 text-sm border-none rounded bg-CB/50 xl:w-3/5 xl:text-xs 2xl:text-sm focus:outline focus:outline-1"
                          // name="from_phone"
                        />

                        <select
                          id="subject"
                          class="bg-CB/50 xl:w-2/5 xl:text-xs 2xl:text-sm text-sm rounded px-2 py-2 border-none  text-black1/80 focus:outline  focus:outline-1"
                          // name="from_topic"
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
                        // name="message"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full px-5 py-3 font-bold rounded-lg bg-primary3 text-primary4 hover:bg-primary3/60"
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
    </>
  );
};

export default Services;
