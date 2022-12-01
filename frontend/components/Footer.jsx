import React from "react";
import Image from "next/image";
import sedrehLogo2 from "../img/logo/sedrehLogo-2.svg";
import map from "../img/icon/map.svg";
import callCalling from "../img/icon/call-calling.svg";
import sms from "../img/icon/sms.svg";

import instagram from "../img/icon/instagram-filled.svg";
import linkedin from "../img/icon/linkedin-box-fill.svg";
import twitter from "../img/icon/twitter-fill.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="relative w-full bottom-0 lg:h-[440px] md:h-[700px] h-[1200px] flex items-center justify-center bg-center bg-cover custom-img">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-primary3/80 lg:items-end">
          <div className="flex flex-col justify-between w-full lg:container px-4">
            <div className="flex flex-col justify-between lg:flex-row lg:gap-x-16 gap-y-4">
              <div className="flex-col items-center lg:items-start lg:gap-y-8">
                <div>
                  <Image src={sedrehLogo2} alt="/" />
                </div>
                <div className="flex flex-col p-2 border-2 rounded-md lg:gap-y-3 lg:border-none lg:p-0 border-primary4/30 lg:flex-col gap-y-4 ">
                  <div className="flex flex-col items-start justify-start gap-y-1">
                    <span className="flex flex-row gap-2 ">
                      <Image src={map} alt="/"></Image>
                      <p className="font-bold text-primary4">آدرس</p>
                    </span>
                    <p className=" font-normal text-primary4">
                      تهران، بلوار کشاورز، خیابان قدس مرکز رشد شهید فخری زاده، پلاک 37 </p>
                  </div>
                  <hr className="hidden border-primary4/30 lg:block" />
                  <div className="flex flex-col items-start justify-start gap-y-1">
                    <span className="flex flex-row gap-2 ">
                      <Image src={callCalling} alt="/"></Image>
                      <p className="font-bold text-primary4">شماره تماس</p>
                    </span>
                    <div className="flex flex-col">
                      <p className=" font-normal text-primary4">8493 467 0922</p>
                      <p className=" font-normal text-primary4">28429338 - 021</p>
                    </div>
                  </div>
                  <hr className="hidden border-primary4/30 lg:block" />
                  <div className="flex flex-col items-start justify-start gap-y-1">
                    <span className="flex flex-row gap-2 ">
                      <Image src={sms} alt="/"></Image>
                      <p className="font-bold text-primary4">ایمیل</p>
                    </span>
                    <p className=" font-normal text-primary4">info@sedrehgroup.ir</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 border-2 rounded-md md:flex-row gap-y-8 lg:gap-x-16 gap-x-12 text-primary4 lg:border-none lg:p-0 border-primary4/30 ">
                <div className="flex flex-col space-y-2 ">
                  <Link href="/solutions">
                    <a className="font-semibold underline underline-offset-8 decoration-primary4 decoration-2">
                      راه حل ها
                    </a>
                  </Link>
                  <Link href="/solutions/industrialCommercial">
                    <a>صنعتی و تجاری</a>
                  </Link>
                  <Link href="/solutions/services">
                    <a>سرویس ها و خدمات</a>
                  </Link>
                  <p>مدیریت شهری</p>
                  <p>رسانه</p>
                  <p>هواشناسی</p>
                  <p>حقوقی و قضایی</p>
                </div>
                <div className="flex flex-col space-y-2 ">
                  <p className="font-semibold underline underline-offset-8 decoration-primary4 decoration-2">
                    وبلاگ
                  </p>
                  <p>اخبار</p>
                  <p>دانش های کاربردی</p>
                  <p>داستان ها</p>
                  <p>تکنولوژی</p>
                </div>
                <div className="flex flex-col space-y-2 ">
                  <Link href="/aboutUs">
                    <a className="font-semibold underline underline-offset-8 decoration-primary4 decoration-2">
                      درباره شرکت
                    </a>
                  </Link>
                  <Link href="/aboutUs#aboutSedreh">
                    <a>درباره سدره</a>
                  </Link>
                  <p>معرفی تیم سدره</p>
                  <p>سدره در رسانه ها</p>
                </div>
                <div className="flex flex-col space-y-2 ">
                  <Link href="/ourPartners">
                    <a className="font-semibold underline underline-offset-8 decoration-primary4 decoration-2">
                      همکاران و شرکای سدره
                    </a>
                  </Link>
                  <Link href="/ourPartners#partners">
                    <a>همکاران سدره</a>
                  </Link>
                  <Link href="/ourPartners#cooperation">
                    <a>همکاری با سدره</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-2 mt-10 border-t-2 lg:mt-8 border-t-primary4/30">
              <p className="text-xs md:text-sm">
                کلیه حقوق این سایت متعلق به شرکت{" "}
                <span className="font-bold ">ویرا پردازان سدره</span> می باشد
              </p>
              <ul className="flex items-center gap-x-4">
                <li className=" hidden">
                  <a href="">
                    <Image src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/sedreh/">
                    {" "}
                    <Image src={linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/sedrehai?igshid=YmMyMTA2M2Y=">
                    <Image src={instagram} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
