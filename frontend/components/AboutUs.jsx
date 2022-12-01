import React, { useState, useEffect } from "react";
import Image from "next/image";
import a1 from "../img/a1.png";
import a2 from "../img/a2.jpg";
import shieldTick from "../img/icon/shield-tick.svg";
import shieldTick2 from "../img/icon/shield-tick2.svg";

import person1 from "../public/person1.png";

const AboutUs = () => {
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);

  const handleItem1 = () => {
    setItem1(!item1);
  };

  const handleItem2 = () => {
    setItem2(!item2);
  };

  const handleItem3 = () => {
    setItem3(!item3);
  };

  const handleItem4 = () => {
    setItem4(!item4);
  };

  return (
    <>
      <div classname="flex items-center justify-center w-full h-screen ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/aboutUs-image.jpg"
          className="object-cover w-full h-screen"
          alt="/"
        />

        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black1/80">
          <div className="container flex-col justify-center space-y-8">
            <h1 className="px-8 text-4xl font-extrabold leading-tight text-center md:text-right md:w-3/4 lg:w-1/3 md:p-0 text-ED">
              استفاده از داده‌های هوشمند مکانی برای اتخاذ تصمیمات بهتر
            </h1>
            <p className="px-8 text-justify text-lg font-light md:w-3/4 md:p-0 lg:w-1/2 text-ED/90 wspacing">
              تجزیه و تحلیل داده‌های هوشمند مکانی توسط انواع الگوریتم‌های
              یادگیری‌ ماشین و هوش مصنوعی شرکت‌ها، سازمان‌ها و افراد را قادر
              می‌سازد تا آنچه‌ را بروی زمین اتفاق ‌می‌افتد درک کنند تا بتوانند
              با اطلاعات دقیق و فعلی تصمیمات بهتری بگیرند
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-5 py-3 font-black rounded-lg bg-primary3 text-primary4 hover:bg-primary3/80">
                راه حل های سدره
              </button>
            </div>
          </div>
        </div>

        {/* sedreh yani */}
        <div id="aboutSedreh" className="h-10"></div>
        <div className="flex items-start justify-center mx-4 py-24">
          <div className="container flex flex-col mx-auto gap-y-20">
            <div className="flex flex-col gap-y-3 ">
              <h2 className="text-4xl font-semibold leading-tight lg:w-5/12 text-ED">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary3 to-primary">
                  سدره
                </span>{" "}
                یعنی
              </h2>
              <h2 className="text-4xl font-semibold leading-tight text-ED">
                سامانه های دیدبانی و رایانش هوشمند
              </h2>
            </div>
            <div className="flex justify-center ">
              <div className="flex flex-col lg:gap-y-32 gap-y-40 xl:w-3/4">
                <div className="flex flex-col items-center justify-between lg:flex-row gap-x-8 sm:gap-y-0 gap-y-2">
                  <p className="font-light text-justify basis-7/12 text-ED/90 wspacing">
                    شرکت ویراپردازان سدره کار خود را از شهریورماه سال 1399 با
                    ایده استفاده از ابزارها و روش‌های نوین جهت تولید و پردازش
                    اطلاعات کاربردی مکان‌محور شروع کرد و دغدغه ابتدایی
                    بنیان‌گذاران آن استفاده بهینه‌تر از منابع موجود در کشور جهت
                    جلوگیری از هدررفت آنها بود. همچنین سدره از طراحی و اجرای
                    سامانه‌های مبتنی بر اطلاعات مکانی جهت پیاده‌سازی سیستم‌های
                    مدیریت اطلاعات (MIS) و سیستم‌های پشتیبانی تصمیم‌گیری (DSS)
                    در راستای حل مسائل کشور استفاده می‌کند.
                  </p>
                  <Image
                    src={a1}
                    alt="/"
                    width={440}
                    height={240}
                    className="rounded-2xl"
                  ></Image>
                </div>
                <div className="flex flex-col items-center justify-between gap-x-8 lg:flex-row-reverse sm:gap-y-0 gap-y-2">
                  <p className="font-light text-justify basis-7/12 text-ED/90 wspacing">
                    با استفاده از انواع تصاویر ماهواره‌ای در دسترس، داده‌های
                    زمینی و فناوری هوش مصنوعی می توان‌ تغییرات کاربری اراضی،
                    انواع عارضه‌های طبیعی و مصنوعی گوناگون، پوشش‌های گیاهی،
                    پهنه‌های آبی، ناهمواری‌ها و ارتفاعات سطح زمین، میزان ذرات
                    گرد و غبار، آلاینده‌ها و انواع گازهای موجود در جو زمین را
                    اندازه‌گیری و شناسایی کرد. اینگونه می‌توان در زمان کوتاه‌تر
                    و با دقت بیشتری متوجه تغییرات گوناگون زمینی و جوی شد.
                    <br></br>
                    <br></br> بر این اساس، تیم سدره در تلاش است که با انواع
                    مدلسازی‌های یادگیری ماشین و هوش‌مصنوعی همواره این تغییرات و
                    عوارض را مورد مشاهده قرار بدهد تا کسب‌وکارها، سازمان‌ها و
                    دیگر افراد بتوانند بهترین تصمیمات موجود را برای حل مشکلات
                    خود اتخاذ کنند.استفاده می‌کند.
                  </p>
                  <Image
                    src={a2}
                    alt="/"
                    width={440}
                    height={240}
                    className="w-1/3 rounded-2xl"
                  ></Image>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>

        {/* ahdafe sedreh */}
        <div className="flex items-center justify-center py-24">
          <div className="container flex flex-col mx-auto gap-y-28">
            <h2 className="text-3xl font-semibold text-center text-ED">
              اهداف سدره
            </h2>
            <div className="flex flex-col w-full space-y-24 lg:space-y-16">
              <div className="space-y-24 lg:columns-2 lg:mx-0 sm:mx-8 columns-1">
                <div className="p-4 md:py-6 md:px-2 border-x-2 border-primary2/10 lg:border-none">
                  <div className="flex flex-col items-center gap-8 ">
                    <p className="text-xl font-bold text-center text-primary3">
                      حل مسائل کلان کشور{" "}
                    </p>
                    <p className="w-11/12 font-light text-justify text-CB">
                      بررسی‌های اولیه نشان داد یکی از ریشه‌ای‌ترین مشکلاتی که در
                      مسائل کشور وجود دارد، عبارت است از خلأ اطلاعاتی یا عدم
                      استفادهی بهینه از اطلاعات که این مشکل باعث بروز مجموعه‌ای
                      به هم پیوسته از مسائل مدیریتی در کشور میشود.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:py-6 md:px-2 border-x-2 border-primary2/10 lg:border-none">
                  <div className="flex flex-col items-center gap-8 ">
                    <p className="text-xl font-bold text-center text-primary3">
                      استفاده از نیروهای نخبه و جوان{" "}
                    </p>
                    <p className="w-11/12 font-light text-justify text-CB">
                      شرکت ویراپردازان سدره در مسیر رسیدن به اهداف خود همواره
                      سعی دارد با استفاده از پتانسیل ها و ظرفیت های نیروی های
                      جوان و نخبه دانشگاهی بهترین عملکرد را داشته باشد
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-24 lg:columns-2 lg:mx-0 sm:mx-8 columns-1 ">
                <div className="p-4 md:py-6 md:px-2 border-x-2 border-primary2/10 lg:border-none">
                  <div className="flex flex-col items-center gap-8 ">
                    <p className="text-xl font-bold text-center text-primary3">
                      جلوگیری از هدررفت منابع کشور و افزایش بهره وری{" "}
                    </p>
                    <p className="w-11/12 font-light text-justify text-CB">
                      امروزه بیش از 80٪ از اطلاعات موردنیاز در تصمیم‌گیری‌ها،
                      برنامه‌ریزی‌ها و مدیریت در سطوح مختلف مکان‌محور بوده و عدم
                      استفاده از فناوری‌های مکانی ممکن است موجب عدم کارایی و حتی
                      منجر به هزینه‌های هنگفت اجتماعی، اقتصادی، سیاسی،
                      زیست‌محیطی و غیره شود
                    </p>
                  </div>
                </div>
                <div className="p-4 md:py-6 md:px-2 border-x-2 border-primary2/10 lg:border-none">
                  <div className="flex flex-col items-center gap-8 ">
                    <p className="text-xl font-bold text-center text-primary3">
                      ترویج و توسعه فعالیت های فضاپایه در کشور{" "}
                    </p>
                    <p className="w-11/12 font-light text-justify text-CB">
                      باتوجه به اینکه سنگ بنای تصمیم گیری ها در کشورهای توسعه
                      یافته استفاده از اطلاعات مکان محور است شرکت سدره با
                      استفاده از تصاویر ماهواره ای و داده های مکان محور سعی در
                      استفاده بهینه از منابع کشور و افزایش عملکرد دستگاه های
                      نظارتی و اجرایی دارد
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* osol kare sedreh */}
        <div className="flex items-center justify-center bg-primary2 py-24">
          <div className="container flex flex-col mx-auto gap-y-28">
            <h2 className="text-3xl font-semibold text-center text-primary1">
              اصول کار سدره
            </h2>

            <div className="gap-8 mx-4 lg:mx-16 gap-y-8 sm:mx-0 grid lg:grid-cols-2">
              <div className="flex flex-col items-center gap-8 p-8 bg-primary1/10 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick2} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary1">
                    تعهد به مشتریان و شرکا{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary1/80">
                  تلاش زیاد، کار سخت به‌همراه بازده بالا و طراحی و پیاده‌سازی
                  راه‌حل‌هایی که مناسب کسب‌وکار مشتریان باشد از طرح‌های ما در
                  سدره برای ایجاد اعتماد و تعهد می‌باشد
                </p>
              </div>
              <div className="flex flex-col items-center gap-8 p-8 bg-primary1/10 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick2} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary1">
                    حرفه‌ای بودن{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary1/80">
                  سدره با داشتن تیم‌های تخصصی و باتجربه در زمینه‌‌های فنی مختلف
                  همواره آماده ارائه بهترین خدمات و راه‌حل های به مشتریان خود
                  می‌باشد
                </p>
              </div>
              <div className="flex flex-col items-center gap-8 p-8 bg-primary1/10 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick2} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary1">
                    استفاده از فناوری روز{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary1/80">
                  تیم سدره با استفاده از فناوری‌های هوش مصنوعی و داده‌های متنوع
                  ماهواره‌ای توانسته است به الگوریتم‌های پیچیده‌ای به منظور
                  بهره‌گیری از داده‌های مکان‌محور دست پیدا کند و الگوریتم
                  پیشنهادی خود را به صورت موردی در چند موضوع نیز پیاده‌سازی
                  نموده است
                </p>
              </div>
              <div className="flex flex-col items-center gap-8 p-8 bg-primary1/10 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick2} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary1">
                    ارتباط مستمر{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary1/80">
                  گفت‌وگوی سازنده بذر یک داستان موفق است. ما از پیشرفت‌های علمی
                  برای تسهیل کسب‌وکارها استفاده می‌کنیم و سپس همه از مزایای آن
                  بهره‌مند می‌شویم.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* faaliat sedreh */}
        <div className="flex items-center justify-center py-24">
          <div className="container flex flex-col mx-auto gap-y-28   rounded-xl">
            <h2 className="text-3xl font-semibold text-center text-ED">
              فعالیت سدره{" "}
            </h2>
            <div className="gap-8 mx-4 lg:mx-16 gap-y-8 sm:mx-0 grid lg:grid-cols-2">
              <div className="flex flex-col items-center gap-8 p-8 bg-primary3/5 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary3">
                    استفاده بهینه از تصاویر ماهواره‌ای{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary2/80">
                  نتیجه مطالعات و بررسی‌های تطبیقی در زمینه نحوه به‌کارگیری
                  تصاویر ماهواره‌ای و بهینه‌سازی استفاده از اطلاعات در کشورهای
                  توسعه‌یافته حکایت از آن دارد که سنگ‌بنای تصمیم‌گیری‌ها و
                  برنامه‌ریزی‌های کشورها در سطوح مختلف، استفاده بهینه از اطلاعات
                  مکان‌محور است
                </p>
              </div>
              <div className="flex flex-col items-center gap-8 p-8 bg-primary3/5 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary3">
                    تولید و تحلیل اطلاعات مکان‌محور{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary2/80">
                  داده‌های مکانی در کشور اغلب در سطح پروژه‌های مهندسی کاربرد
                  یافته، و جنبه‌های زیربنایی داده‌های مکانی در تحلیل‌های کلان
                  ملی بسیار کمرنگ است. سدره با بهره‌گیری صحیح از اطلاعات
                  مکان‌محور می‌تواند به استفاده‌ی بهینه از منابع کشور، افزایش
                  عملکرد دستگاه‌های نظارتی و اجرایی و کاهش هزینه‌ها کمک کند
                </p>
              </div>
              <div className="flex flex-col items-center gap-8 p-8 bg-primary3/5 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary3">
                    پیاده‌سازی سیستم‌های مدیریت اطلاعات{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary2/80">
                  هر چه فضای اطلاعات یک سازمان دقیقتر، شفافتر، منسجم تر و
                  سیستماتیک تر باشد، سازمان بهتر می تواند به اهدافش نائل آید.
                  سدره نیز با ارائه داده های صحیح، دقیق، بهنگام و جامع، به
                  سازمان‌ها و شرکت‌ها کمک می‌کند تا در کمترین زمان به اطلاعات
                  موردنیازشان در زمینه پردازش تصاویر ماهواره‌ای و اطلاعات مکانی
                  دسترسی داشته باشند
                </p>
              </div>
              <div className="flex flex-col items-center gap-8 p-8 bg-primary3/5 rounded-3xl">
                <span className="flex flex-row gap-4 ">
                  <Image src={shieldTick} alt="/"></Image>{" "}
                  <p className="text-xl font-bold text-primary3">
                    پیاده‌سازی سیستم‌های پشتیبانی تصمیم‌گیری{" "}
                  </p>
                </span>
                <p className="w-11/12 text-justify text-primary2/80">
                  گفت‌وگوی سازنده بذر یک داستان موفق است. ما از پیشرفت‌های علمی
                  برای تسهیل کسب‌وکارها استفاده می‌کنیم و سپس همه از مزایای آن
                  بهره‌مند می‌شویم.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* dastaavarde sedreh */}
        {/* <div className="flex items-center justify-center py-24">
          <div className="container flex flex-col mx-auto gap-y-16">
            <h2 className="text-3xl font-semibold text-center text-ED">
              دستاورد های سدره
            </h2>
            <div className="flex justify-center sm:gap-x-6 gap-x-4">
              <button
                className="basis-1/6 group"
                disabled
                onClick={handleItem1}
              >
                <div className="flex items-center justify-center py-4 border-2 border-primary3 group-focus:bg-primary3 group-hover:bg-primary3/5 sm:py-6 rounded-2xl">
                  <p className="text-xl font-medium sm:text-2xl text-primary3 group-focus:text-black1">
                    1398
                  </p>
                </div>
              </button>
              <button
                className="basis-1/6 group"
                disabled
                onClick={handleItem2}
              >
                <div className="flex items-center justify-center py-4 border-2 border-primary3 group-focus:bg-primary3 group-hover:bg-primary3/5 sm:py-6 rounded-2xl">
                  <p className="text-xl font-medium sm:text-2xl text-primary3 group-focus:text-black1">
                    1399
                  </p>
                </div>
              </button>
              <button
                className="basis-1/6 group"
                disabled
                onClick={handleItem3}
              >
                <div className="flex items-center justify-center py-4 border-2 border-primary3 group-focus:bg-primary3 group-hover:bg-primary3/5 sm:py-6 rounded-2xl">
                  <p className="text-xl font-medium sm:text-2xl text-primary3 group-focus:text-black1">
                    1400
                  </p>
                </div>
              </button>
              <button
                className="basis-1/6 group"
                disabled
                onClick={handleItem4}
              >
                <div className="flex items-center justify-center py-4 border-2 border-primary3 group-focus:bg-primary3 group-hover:bg-primary3/5 sm:py-6 rounded-2xl">
                  <p className="text-xl font-medium sm:text-2xl text-primary3 group-focus:text-black1">
                    1401
                  </p>
                </div>
              </button>
            </div>

            {item1 ? (
              <div className="flex flex-col p-8 mx-4 gap-y-6 bg-primary3 rounded-2xl sm:mx-0">
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
              </div>
            ) : null}

            {item2 ? (
              <div className="flex flex-col p-8 mx-4 gap-y-6 bg-primary3 rounded-2xl sm:mx-0">
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
              </div>
            ) : null}

            {item3 ? (
              <div className="flex flex-col p-8 mx-4 gap-y-6 bg-primary3 rounded-2xl sm:mx-0">
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
              </div>
            ) : null}

            {item4 ? (
              <div className="flex flex-col p-8 mx-4 gap-y-6 bg-primary3 rounded-2xl sm:mx-0">
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
                <hr className=" border-Seventy" />
                <div className="flex items-center gap-x-6 ">
                  <p className="text-xl font-medium text-black1">
                    همکاری با قوه قضاییه برای مبارزه با زمین خواری
                  </p>
                  <p className="text-sm font-normal text-black1/80">
                    23 بهمن 1399{" "}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div> */}

        {/*  */}

        {/* team sedreh */}
        {/* <div id="team-sedreh"></div> */}
        {/* <div className="flex justify-center tems-center mt-80">
          <div className="container flex flex-col mx-auto gap-y-28">
            <h2 className="text-3xl font-semibold text-center text-ED">
              اعضای سدره
            </h2>
            <div className="flex flex-col gap-y-10">
              <div className="grid grid-cols-12 overflow-hidden gap-x-6">
                <div className="flex flex-col justify-between col-start-2 col-end-7 bg-primary2 rounded-2xl xl:m-6 box sm:col-start-4 sm:col-end-7">
                  <Image
                    src={person1}
                    alt="/"
                    className=" rounded-t-2xl"
                  ></Image>
                  <div className="flex flex-col items-center my-4 gap-y-2">
                    <p className="font-bold ">جواد کریمی</p>
                    <p className="text-center ">Chief Executive Officer</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between col-start-7 col-end-12 bg-primary2 rounded-2xl xl:m-6 box sm:col-start-7 sm:col-end-10">
                  <Image
                    src={person1}
                    alt="/"
                    width={258}
                    height={258}
                    className=" rounded-t-2xl"
                  ></Image>
                  <div className="flex flex-col items-center my-4 gap-y-2">
                    <p className="font-bold ">جواد کریمی</p>
                    <p className="text-center ">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 overflow-hidden gap-x-6">
                <div className="flex flex-col justify-between col-start-2 col-end-7 bg-primary2 rounded-2xl xl:m-6 box sm:col-span-3">
                  <Image
                    src={person1}
                    alt="/"
                    className=" rounded-t-2xl"
                  ></Image>
                  <div className="flex flex-col items-center my-4 gap-y-2">
                    <p className="font-bold ">جواد کریمی</p>
                    <p className="text-center ">Chief Executive Officer</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between col-start-7 col-end-12 bg-primary2 rounded-2xl xl:m-6 box sm:col-span-3">
                  <Image
                    src={person1}
                    alt="/"
                    width={258}
                    height={258}
                    className=" rounded-t-2xl"
                  ></Image>
                  <div className="flex flex-col items-center my-4 gap-y-2">
                    <p className="font-bold ">جواد کریمی</p>
                    <p className="text-center ">Chief Executive Officer</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between col-start-2 col-end-7 mt-10 sm:mt-0 bg-primary2 rounded-2xl xl:m-6 box sm:col-span-3">
                  <Image
                    src={person1}
                    alt="/"
                    width={258}
                    height={258}
                    className=" rounded-t-2xl"
                  ></Image>
                  <div className="flex flex-col items-center my-4 gap-y-2">
                    <p className="font-bold ">جواد کریمی</p>
                    <p className="text-center ">Chief Executive Officer</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between col-start-7 col-end-12 mt-10 sm:mt-0 bg-primary2 rounded-2xl xl:m-6 box sm:col-span-3">
                  <Image
                    src={person1}
                    alt="/"
                    width={258}
                    height={258}
                    className=" rounded-t-2xl"
                  ></Image>
                  <div className="flex flex-col items-center my-4 gap-y-2">
                    <p className="font-bold ">جواد کریمی</p>
                    <p className="text-center ">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/*  */}

        {/*  */}

        {/* sedreh dar resaneh */}
        {/* <div id="sedreh-resane"></div>
        <div className="flex items-center justify-center mt-80">
          <div className="container flex flex-col mx-4 sm:mx-auto gap-y-28">
            <h2 className="text-3xl font-semibold text-center text-ED">
              سدره در رسانه{" "}
            </h2>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:h-96 gap-y-4 ">
              <div className="flex flex-col lg:col-span-4 gap-y-10">
                <p className="pr-4 text-xl font-semibold border-r-2 text-ED border-primary3">
                  بر بنیان دانش
                </p>
                <p className="text-justify text-CB wspacing">
                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                  جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                  برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                  زبان فارسی ایجاد کرد.{" "}
                </p>
                <p className="text-justify text-CB wspacing">
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. طراحان
                  خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.{" "}
                </p>
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

        {/* space */}
        {/* <div className=" h-[200px]"></div> */}
      </div>
    </>
  );
};

export default AboutUs;
