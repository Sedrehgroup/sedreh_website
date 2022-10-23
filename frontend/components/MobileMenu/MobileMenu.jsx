import React, { useState } from "react";
import MobileMainMenu from "./MobileMainMenu";
import MobileSubmenu from "./MobileSubmenu";

import Link from "next/link";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MobileMenu = (props) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex flex-col justify-center items-start gap-y-4">
      {/* menu : rahe hal */}
      <Menu as="div" className="relative inline-block text-right">
        <MobileMainMenu mainMenuTitle="راه حل ها" />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md w-60 py-4 px-3 bg-black1 border border-ED/10 shadow-lg focus:outline-none text-right">
            <div className="">
              <MobileSubmenu
                font="font-black text-base"
                submenuTitle="راه حل ها"
                menuLink="/solutions"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu submenuTitle="مدیریت شهری" />
              <MobileSubmenu submenuTitle="رسانه" />
              <MobileSubmenu submenuTitle="منابع طبیعی و محیط زیست" />
              <MobileSubmenu
                submenuTitle="صنعتی و تجاری"
                menuLink="/solutions/industrialCommercial"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu submenuTitle="هواشناسی" />
              <MobileSubmenu submenuTitle="انرژی" />
              <MobileSubmenu submenuTitle="حقوقی و قضایی" />
              <MobileSubmenu
                font="font-black text-base"
                submenuTitle="سرویس ها و خدمات"
                menuLink="/solutions/services"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu
                submenuTitle="سامانه های تخصصی مکان محور"
                menuLink="/solutions/services#specializedSystems"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu
                submenuTitle="مشاوره و پشتیبانی فنی"
                menuLink="/solutions/services#counseling"
                handleMobileSubmenu={props.handleMobileMenu}
              />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* menu : weblog */}
      <Menu as="div" className="relative inline-block text-right">
        <MobileMainMenu mainMenuTitle="وبلاگ" />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md w-48 py-4 px-3 bg-black1 border border-ED/10 shadow-lg  focus:outline-none text-right">
            <div className="">
              <MobileSubmenu
                font="font-black text-base"
                submenuTitle="وبلاگ"
                menuLink="/"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu submenuTitle="اخبار" />
              <MobileSubmenu submenuTitle="دانش های کاربردی" />
              <MobileSubmenu submenuTitle="داستان ها" />
              <MobileSubmenu submenuTitle="تکنولوژی" />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* menu : darbare sherkat */}
      <Menu as="div" className="relative inline-block text-right">
        <MobileMainMenu mainMenuTitle="درباره شرکت" />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md w-52 py-4 px-3 bg-black1 border border-ED/10 shadow-lg  focus:outline-none text-right">
            <div className="">
              <MobileSubmenu
                font="font-black text-base"
                submenuTitle="درباره شرکت"
                menuLink="/aboutUs"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu
                submenuTitle="درباره سدره"
                menuLink="/aboutUs#aboutSedreh"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu
                submenuTitle="معرف تیم سدره"
                menuLink="/aboutUs#team-sedreh"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu
                submenuTitle="سدره در رسانه ها"
                menuLink="/aboutUs#sedreh-resane"
                handleMobileSubmenu={props.handleMobileMenu}
              />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Link href="/">گالری</Link>

      {/* menu : hamkarane ma */}
      <Menu as="div" className="relative inline-block text-right">
        <MobileMainMenu mainMenuTitle="همکاران ما" />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md w-52 py-4 px-3 bg-black1 border border-ED/10 shadow-lg  focus:outline-none text-right">
            <div className="">
              <MobileSubmenu
                font="font-black text-base"
                submenuTitle="همکاران ما"
                menuLink="/ourPartners"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu
                submenuTitle="همکاران سدره"
                menuLink="/ourPartners#partners"
                handleMobileSubmenu={props.handleMobileMenu}
              />
              <MobileSubmenu
                submenuTitle="همکاری با سدره"
                menuLink="/ourPartners#cooperation"
                handleMobileSubmenu={props.handleMobileMenu}
              />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MobileMenu;

/* This example requires Tailwind CSS v2.0+ */
