"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FC } from "react";

const components: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    href: "/aboutme",
  },
];

const Header: FC = () => {
  return (
    <header className="flex justify-end px-24 py-6">
      <NavigationMenu>
        <NavigationMenuList>
          {components.map((c) => (
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-lg cursor-pointer"
                href={c.href}
              >
                {c.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
