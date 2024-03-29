"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/constant";
import Link from "next/link";

export function Navigation() {
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.key}>
            <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-sm shadow-xl shadow-slate-800/10">
              <ul className="flex flex-col w-auto gap-3 p-4">
                {link.subLinks.map((subLink) => (
                  <Link
                    key={subLink.key}
                    href={subLink.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-[1.2] capitalize w-max">
                      {subLink.label}
                    </div>
                  </Link>
                  //   <ListItem
                  //     key={subLink.key}
                  //     title={subLink.label}
                  //     href={subLink.href}
                  //   />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
