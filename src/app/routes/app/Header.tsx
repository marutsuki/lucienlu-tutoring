"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { routeComponents } from "@/config/routing.config";
import { FC } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 flex justify-between px-4 lg:px-24 py-2 shadow-md bg-background">
      <section className="flex gap-4 items-center">
        <img className="size-12" src="/logo.png" alt="Logo" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-heading">Soft Eng. Tutoring</h1>
          <h2 className="text-sm font-heading text-right">By Lucien Lu</h2>
        </div>
      </section>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex gap-4">
          {routeComponents.map((c) => (
            <NavigationMenuItem key={"navbar-item-" + c.href}>
              <NavigationMenuLink
                className="text-lg cursor-pointer transition duration-200"
                onClick={() => navigate(c.href)}
                asChild
              >
                <a className="hover:underline! underline-offset-4 text-foreground font-heading">
                  {c.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <span className="mx-2">
          <ThemeToggle />
        </span>
      </NavigationMenu>
      <Drawer direction="right">
        <DrawerTrigger className="lg:hidden">
          <GiHamburgerMenu size="32" />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-end p-4">
          <DrawerHeader className="text-right">
            <DrawerTitle>Lucien's Tutoring Services</DrawerTitle>
            <DrawerDescription>
              Tutoring and coaching for aspiring software engineers
            </DrawerDescription>
          </DrawerHeader>
          <NavigationMenu className="items-start py-2">
            <NavigationMenuList className="flex flex-col gap-4 items-end">
              {routeComponents.map((c) => (
                <NavigationMenuItem key={"navbar-item-" + c.href}>
                  <NavigationMenuLink
                    className="text-lg cursor-pointer transition duration-200"
                    onClick={() => navigate(c.href)}
                    asChild
                  >
                    <a className="text-left underline-offset-4 text-foreground font-heading">
                      {c.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <DrawerFooter className="w-full">
            <div className="flex gap-4 justify-end items-center mb-4">
              <FaLinkedin
                className="cursor-pointer"
                size={24}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lucienlu7789/",
                    "_blank"
                  )
                }
              />
              <FaGithub
                className="cursor-pointer"
                size={24}
                onClick={() =>
                  window.open("https://github.com/marutsuki/", "_blank")
                }
              />
            </div>

            <div className="flex justify-between w-full">
              <span>
                <ThemeToggle />
              </span>
              <DrawerClose className="flex justify-end">
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
