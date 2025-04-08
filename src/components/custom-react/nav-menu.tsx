"use client";

import * as React from "react";

import { GitCompareArrowsIcon, Icon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "#/components/shadcn/navigation-menu";
import { cn } from "#/lib/utils";
import type { MenuItem } from "#/shared/types";
import { ThemeSwitcher } from "../shadcn/ThemeSwitcher";

export function DesktopMenu({ config }: { config: MenuItem[] }) {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              href="/"
              title="на главную"
              className={navigationMenuTriggerStyle()}
            >
              <GitCompareArrowsIcon size={24} />
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {config.map((item) => {
          if (!item.nested) {
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink asChild>
                  <a href={item.href} className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.nested?.map((nestedItem) => (
                    <ListItem
                      key={nestedItem.title}
                      title={nestedItem.title}
                      href={nestedItem.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}

        <ThemeSwitcher className="ml-auto" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
