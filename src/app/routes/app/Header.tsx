"use client";

import { routeComponents } from "@/app/routes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="relative z-50 flex justify-between px-24 py-2 shadow-md">
      <section className="flex gap-4 items-center">
        <img className="size-12" src="/logo.png" alt="Logo" />
        <h1 className="text-2xl">Lucien's Tutoring Services</h1>
      </section>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          {routeComponents.map((c) => (
            <NavigationMenuItem key={"navbar-item-" + c.href}>
              <NavigationMenuLink
                className="text-base cursor-pointer transition duration-200"
                href={c.href}
                asChild
              >
                <a className="text-black! hover:underline! underline-offset-4">
                  {c.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
