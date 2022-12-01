import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import sedrehLogo from "../img/logo/sedrehLogo.svg";
import menu from "../img/icon/menu.svg";
import closeSquare from "../img/icon/close-square.svg";
import bottomArrow from "../img/icon/bottom-arrow.svg";
import bottomArrowPrimary from "../img/icon/bottom-arrow-primary.svg";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);

  const onMouseEnter1 = () => setHovering1(true);
  const onMouseLeave1 = () => setHovering1(false);
  const onMouseEnter2 = () => setHovering2(true);
  const onMouseLeave2 = () => setHovering2(false);
  const onMouseEnter3 = () => setHovering3(true);
  const onMouseLeave3 = () => setHovering3(false);
  const onMouseEnter4 = () => setHovering4(true);
  const onMouseLeave4 = () => setHovering4(false);

  const [navColor, setNavColor] = useState("flex justify-center");

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 90) {
        setNavColor("flex justify-center backdrop-blur-lg bg-black1/90");
      } else {
        setNavColor("flex justify-center");
      }
    };
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <>
      {/* nav */}
      <div className="fixed top-0 left-0 z-30 w-full duration-300 ease-in">
        <div className={navColor}>
          {/* menu */}
          <div className="container flex items-center justify-between pt-0 pb-0 border-b-2 lg:pt-4 lg:pb-1 text-white1 border-primary3/20 h-24 lg:h-auto">
            <div className="flex items-center xl:gap-x-14 gap-x-7">
              <span className="px-4 cursor-pointer sm:px-0">
                <Link href="/">
                  <Image src={sedrehLogo} alt="" />
                </Link>
              </span>
              <ul className="hidden lg:flex xl:gap-x-6 gap-x-4 ">
                <li className=" hover:text-primary3/80">
                  <Link href="/">صفحه اصلی</Link>
                </li>
                <li
                  className="relative cursor-pointer group hover:text-primary3/80"
                  onMouseEnter={onMouseEnter1}
                  onMouseLeave={onMouseLeave1}
                >
                  <Link href="/solutions">راه حل ها</Link>
                  <span className="px-2 ">
                    {isHovering1 ? (
                      <Image src={bottomArrowPrimary} alt="/" />
                    ) : (
                      <Image src={bottomArrow} alt="/" />
                    )}
                  </span>
                  <div className="absolute flex-col hidden px-4 py-4 border-2 rounded-lg top-6 w-72 group-hover:flex gap-y-4 backdrop-blur-lg bg-black1/80 border-primary3/20 ">
                    <div className="flex flex-col gap-y-4">
                      <p className="font-semibold cursor-default text-primary">
                        راه حل هایی متناسب با صنعت شما
                      </p>
                      <ul className="flex flex-col gap-y-2 text-ED">
                        <Link href="/">
                          <a className="hover:text-primary3/80">مدیریت شهری</a>
                        </Link>
                        <Link href="/">
                          <a className="hover:text-primary3/80">رسانه</a>
                        </Link>
                        <Link href="/">
                          <a className="hover:text-primary3/80">
                            منابع طبیعی و محیط زیست
                          </a>
                        </Link>
                        <Link href="/solutions/industrialCommercial">
                          <a className="hover:text-primary3/80">
                            صنعتی و تجاری{" "}
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="hover:text-primary3/80">هواشناسی </a>
                        </Link>
                        <Link href="/">
                          <a className="hover:text-primary3/80">انرژی </a>
                        </Link>
                        <Link href="/">
                          <a className="hover:text-primary3/80">
                            حقوقی و قضایی
                          </a>
                        </Link>
                      </ul>
                    </div>
                    <hr className="cursor-default border-primary3/20" />
                    <div className="flex flex-col gap-y-4">
                      <Link href="/solutions/services">
                        <a className="font-semibold hover:text-primary3/80 text-primary">
                          سرویس ها و خدمات
                        </a>
                      </Link>
                      <ul className="flex flex-col gap-y-2 text-ED">
                        <Link href="/solutions/services#specializedSystems">
                          <a className="hover:text-primary3/80">
                            سامانه های تخصصی مکان محور
                          </a>
                        </Link>
                        <Link href="/solutions/services#counseling">
                          <a className="hover:text-primary3/80">
                            مشاوره و پشتیبانی فنی{" "}
                          </a>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className="relative cursor-pointer group hover:text-primary3/80"
                  onMouseEnter={onMouseEnter2}
                  onMouseLeave={onMouseLeave2}
                >
                  <Link href="/">وبلاگ</Link>
                  <span className="px-2 ">
                    {isHovering2 ? (
                      <Image src={bottomArrowPrimary} alt="/" />
                    ) : (
                      <Image src={bottomArrow} alt="/" />
                    )}
                  </span>
                  <div className="absolute flex-col hidden w-40 px-4 py-4 border-2 rounded-lg top-6 group-hover:flex gap-y-4 backdrop-blur-lg bg-black1/80 border-primary3/20 ">
                    <p className="font-semibold cursor-default text-primary">
                      مقالات سدره
                    </p>
                    <ul className="flex flex-col gap-y-2 text-ED">
                      <Link href="/">
                        <a className="hover:text-primary3/80">اخبار</a>
                      </Link>
                      <Link href="/">
                        <a className="hover:text-primary3/80">
                          دانش های کاربردی
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="hover:text-primary3/80">داستان ها</a>
                      </Link>
                      <Link href="/">
                        <a className="hover:text-primary3/80">تکنولوژی</a>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li
                  className="relative cursor-pointer group hover:text-primary3/80"
                  onMouseEnter={onMouseEnter3}
                  onMouseLeave={onMouseLeave3}
                >
                  <Link href="/aboutUs">درباره شرکت</Link>
                  <span className="px-2 ">
                    {isHovering3 ? (
                      <Image src={bottomArrowPrimary} alt="/" />
                    ) : (
                      <Image src={bottomArrow} alt="/" />
                    )}
                  </span>
                  <div className="absolute flex-col hidden px-4 py-4 border-2 rounded-lg top-6 w-52 group-hover:flex gap-y-4 backdrop-blur-lg bg-black1/80 border-primary3/20 ">
                    <p className="font-semibold cursor-default text-primary">
                      اطلاعات مربوط به سدره
                    </p>
                    <ul className="flex flex-col gap-y-2 text-ED">
                      <Link href="/aboutUs#aboutSedreh">
                        <a className="hover:text-primary3/80">درباره سدره</a>
                      </Link>
                      <Link href="/aboutUs#team-sedreh">
                        <a className="hover:text-primary3/80">معرفی تیم سدره</a>
                      </Link>
                      <Link href="/aboutUs#sedreh-resane">
                        <a className="hover:text-primary3/80">
                          سدره در رسانه ها
                        </a>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li className=" hover:text-primary3/80">
                  <Link href="/">گالری</Link>
                </li>
                <li
                  className="relative cursor-pointer group hover:text-primary3/80"
                  onMouseEnter={onMouseEnter4}
                  onMouseLeave={onMouseLeave4}
                >
                  <Link href="/ourPartners">همکاران ما</Link>
                  <span className="px-2 ">
                    {isHovering4 ? (
                      <Image src={bottomArrowPrimary} alt="/" />
                    ) : (
                      <Image src={bottomArrow} alt="/" />
                    )}
                  </span>

                  <div className="absolute flex-col hidden px-4 py-4 border-2 rounded-lg top-6 w-52 group-hover:flex gap-y-4 backdrop-blur-lg bg-black1/80 border-primary3/20 ">
                    <p className="font-semibold cursor-default text-primary">
                      همکاران و شرکای سدره
                    </p>
                    <ul className="flex flex-col gap-y-2 text-ED">
                      <Link href="/ourPartners#partners">
                        <a className="hover:text-primary3/80">همکاران سدره</a>
                      </Link>
                      <Link href="/ourPartners#cooperation">
                        <a className="hover:text-primary3/80">همکاری با سدره</a>
                      </Link>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="items-center hidden lg:flex xl:gap-x-4 gap-x-2 text-white1">
              <Link href="/system">
                <button className="px-5 py-3 font-bold rounded-lg bg-primary3 text-primary4 hover:bg-primary3/80">
                  ورود به سامانه
                </button>
              </Link>
              <Link href="/contactUs">
                <button className="px-4 py-3 font-bold text-primary3 hover:text-primary3/80">
                  ارتباط با ما
                </button>
              </Link>
            </div>

            {/* mobile menu icon */}
            <div onClick={handleClick} className="z-10 p-8 lg:hidden">
              {nav ? (
                <Image src={closeSquare} width={40} height={40} alt="/" />
              ) : (
                <Image src={menu} width={40} height={40} alt="/" />
              )}
            </div>

            {/* mobile menu */}
            <div
              className={
                nav
                  ? "lg:hidden absolute top-0 left-0 right-0  bottom-0 flex flex-col gap-y-10 text-xl font-medium items-center justify-center w-full h-screen bg-black1 text-center ease-in-out duration-500"
                  : "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-y-10 text-xl font-medium items-center justify-center w-full h-screen bg-black1 text-center -translate-x-[100%] ease-in-out duration-500"
              }
            >
              <div onClick={handleClick} className="mb-4 font-bold">
                <Link href="/">صفحه اصلی</Link>
              </div>
              <MobileMenu handleMobileMenu={handleClick} />

              {/* <ul className="space-y-6 text-2xl">
                <li onClick={handleClick} className="hover:text-gray-500">
                  <Link href="/">صفحه اصلی</Link>
                </li>
                <li onClick={handleClick} className="hover:text-gray-500">
                  <Link href="/">راه حل ها</Link>
                </li>
                <li onClick={handleClick} className="hover:text-gray-500">
                  <Link href="/">وبلاگ</Link>
                </li>
                <li onClick={handleClick} className="hover:text-gray-500">
                  <Link href="/aboutUs">درباره شرکت</Link>
                </li>
                <li onClick={handleClick} className="hover:text-gray-500">
                  <Link href="/">گالری</Link>
                </li>
                <li onClick={handleClick} className="hover:text-gray-500">
                  <Link href="/ourPartners">همکاران ما</Link>
                </li>
              </ul> */}
              <div className="flex flex-col items-center mt-4 gap-y-2 text-white1 text-base">
                <button
                  onClick={handleClick}
                  className="px-5 py-3 font-bold rounded-lg bg-primary3 text-primary4 hover:bg-primary3/50"
                >
                  ورود به سامانه
                </button>
                <Link href="/contactUs">
                  <button
                    onClick={handleClick}
                    className="px-4 py-3 font-bold text-primary3"
                  >
                    ارتباط با ما
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
