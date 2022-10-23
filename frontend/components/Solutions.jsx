import React from "react";
import SolutionCard from "./Solutions/SolutionCard";

import Image from "next/image";

import agriculture from "/img/solutionsImage/agriculture.jpg";
import RealEstates from "/img/solutionsImage/RealEstates.jpeg";
import media from "/img/solutionsImage/media.webp";
import natural from "/img/solutionsImage/natural.jpg";
import meteorology from "/img/solutionsImage/meteorology.jpg";
import mine from "/img/solutionsImage/mine.jpg";
import energy from "/img/solutionsImage/energy.jpg";
import spatialIntelligence from "/img/solutionsImage/spatialIntelligence.webp";
import judicial from "/img/solutionsImage/judicial.jpg";
import urbanManagement from "/img/solutionsImage/urbanManagement.jpg";
import insurance from "/img/solutionsImage/insurance.jpeg";

import cpu from "../img/icon/cpu.svg";
import book from "../img/icon/book.svg";
import emptyWallet from "../img/icon/empty-wallet.svg";

const Solutions = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/solutions-image.jpg"
          className="object-cover w-full h-screen"
          alt="/"
        />

        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black1/80 ">
          <div className="container flex flex-col items-center space-y-12">
            <h1 className=" text-center px-8 lg:text-6xl text-4xl font-extrabold leading-tight md:w-3/4  md:p-0 text-ED">
              بهترین راه حل ها با استفاده از هوش مکانی{" "}
            </h1>
            <p className="px-8 text-center text-xl font-light md:p-0 lg:w-1/2 text-ED/80 wspacing">
              با اطلاعات دقیق‌تر تصمیمات بهتر و به‌موقعی برای خود بگیرید، در
              مناطقی که برایتان مهم است درک کنید که چه اتفاقی می‌افتد
            </p>
          </div>
        </div>
      </div>

      {/* all solutions */}
      <div className="flex items-center justify-center lg:h-[2700px] sm:h-[4200px] mt-32 mb-24">
        <div className="container mx-8 sm:mx-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-x-24 sm:gap-x-8 sm:gap-y-32 gap-y-24 justify-items-center">
            <SolutionCard
              img={agriculture}
              title="کشاورزی"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={RealEstates}
              title="املاک و مستغلات"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={media}
              title="رسانه"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={natural}
              title="منابع طبیعی و محیط زیست"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={meteorology}
              title="هواشناسی"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={mine}
              title="معدن"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={energy}
              title="انرژی"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={spatialIntelligence}
              title="هوش مکانی"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={judicial}
              title="حقوقی و قضایی"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={urbanManagement}
              title="مدیریت شهری"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={insurance}
              title="بیمه و دارایی"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
          </div>
        </div>
      </div>

      {/* vizegi */}
      <div className="flex items-center justify-center mt-60 mb-24">
        <div className="container flex flex-col mx-auto gap-y-24">
          <div className="flex flex-col gap-y-8 items-center">
            <h2 className="text-3xl font-semibold text-center text-ED">
              ویژگی های بارز سدره برای ارائه راه حل ها{" "}
            </h2>
            <p className="text-ED font-light">
              چرا می توانیم به سدره و راه حل های آن اعتماد کنیم
            </p>
          </div>
          <div className="gap-8 mx-4 lg:mx-16 gap-y-8 sm:mx-0 grid lg:grid-cols-3">
            <div className="flex flex-col items-center gap-8 p-8 bg-primary3/5 rounded-3xl">
              <span className="flex flex-row gap-4 ">
                <Image src={cpu} alt="/"></Image>{" "}
                <p className="text-xl font-bold text-primary3">
                  استفاده از هوش مصنوعی{" "}
                </p>
              </span>
              <p className="w-11/12 text-justify text-primary2/80">
                سدره با داشتن تیم‌های تخصصی و باتجربه در زمینه‌‌های فنی مختلف
                همواره آماده ارائه بهترین خدمات و راه‌حل های به مشتریان خود
                می‌باشد
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 p-8 bg-primary3/5 rounded-3xl">
              <span className="flex flex-row gap-4 ">
                <Image src={book} alt="/"></Image>{" "}
                <p className="text-xl font-bold text-primary3">
                  استفاده از دانش روز
                </p>
              </span>
              <p className="w-11/12 text-justify text-primary2/80">
                سدره با داشتن تیم‌های تخصصی و باتجربه در زمینه‌‌های فنی مختلف
                همواره آماده ارائه بهترین خدمات و راه‌حل های به مشتریان خود
                می‌باشد
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 p-8 bg-primary3/5 rounded-3xl">
              <span className="flex flex-row gap-4 ">
                <Image src={emptyWallet} alt="/"></Image>{" "}
                <p className="text-xl font-bold text-primary3">
                  به حداقل رساندن هزینه ها{" "}
                </p>
              </span>
              <p className="w-11/12 text-justify text-primary2/80">
                سدره با داشتن تیم‌های تخصصی و باتجربه در زمینه‌‌های فنی مختلف
                همواره آماده ارائه بهترین خدمات و راه‌حل های به مشتریان خود
                می‌باشد
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
