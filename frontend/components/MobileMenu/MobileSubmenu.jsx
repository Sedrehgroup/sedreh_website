import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { handleClientScriptLoad } from "next/script";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const handleNav = () => {
//   setNav(!nav);
// };

const MobileSubmenu = (props) => {
  return (
    <div>
      <Menu.Item>
        {({ active }) => (
          <p
            href="#"
            className={classNames(
              active ? "bg-ED/90 text-black1" : "text-ED",
              `block px-4 py-2 text-sm rounded-md ${props.font}`
            )}
          >
            <Link href={`/${props.menuLink}`}>
              <a onClick={props.handleMobileSubmenu}>{props.submenuTitle}</a>
            </Link>
          </p>
        )}
      </Menu.Item>
    </div>
  );
};

export default MobileSubmenu;
