import React from "react";
import SolutionCard from "./Solutions/SolutionCard";

import agriculture from "/img/solutionsImage/agriculture.jpg";
import RealEstates from "/img/solutionsImage/RealEstates.jpeg";
import mine from "/img/solutionsImage/mine.jpg";
import spatialIntelligence from "/img/solutionsImage/spatialIntelligence.webp";
import insurance from "/img/solutionsImage/insurance.jpeg";

const IndustrialCommercial = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/industrialCommercial-image.jpg"
          className="object-cover w-full h-screen"
          alt="/"
        />

        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black1/70 ">
          <div className="container flex flex-col items-center gap-y-6">
            <h1 className=" text-center px-8 lg:text-6xl text-4xl font-extrabold leading-tight md:w-3/4  md:p-0 text-ED">
              بهترین راه حل های
            </h1>
            <h1 className=" text-center px-8 lg:text-6xl text-4xl font-extrabold leading-tight md:w-3/4  md:p-0 text-primary3">
              صنعتی و تجاری{" "}
            </h1>
            <p className="px-8 text-center md:p-0 lg:w-1/2 text-lg font-light text-ED/80 wspacing mt-12">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>
      </div>

      {/* all solutions */}
      <div className="flex items-center justify-center py-24">
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
              img={mine}
              title="معدن"
              description="یک ابزار کشاورزی دقیق دیجیتالی برای کمک به کشاورزان از راه دور برای ارزیابی سلامت محصولات خود، کاهش هزینه‌های جستجو، آزمایش خاک، و مدیریت مزرعه، و استفاده کارآمدتر از دانه‌ها و کودها."
            />
            <SolutionCard
              img={spatialIntelligence}
              title="هوش مکانی"
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
    </>
  );
};

export default IndustrialCommercial;
