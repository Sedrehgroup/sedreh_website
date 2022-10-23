import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MobileMainMenu = (props) => {
  return (
    <div>
      <Menu.Button className="flex gap-x-3 w-fit justify-center rounded-md py-2 font-medium text-ED shadow-sm">
        {props.mainMenuTitle}
        <ChevronDownIcon
          className="-mr-1 ml-2 h-4 w-4 mt-1"
          aria-hidden="true"
        />
      </Menu.Button>
    </div>
  );
};

export default MobileMainMenu;
