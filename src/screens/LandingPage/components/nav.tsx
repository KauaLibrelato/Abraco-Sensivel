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
import { List } from "@phosphor-icons/react";
import { useScroll } from "@/hooks";

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

export const Nav = () => {
  const { scrollY } = useScroll();

  console.log(scrollY);

  const navLinks = [
    {
      name: "Sobre nós",
      url: "#hero",
      inView: scrollY <= 500,
    },
    {
      name: "Missão",
      url: "#mission",
      inView: scrollY > 500 && scrollY < 800,
    },
    {
      name: "Visão",
      url: "#vision",
      inView: scrollY >= 800 && scrollY < 1300,
    },
    {
      name: "Testes e Dispositivos",
      url: "#testsAndDevices",
      inView: scrollY >= 1300 && scrollY < 1800,
    },
    {
      name: "Valores",
      url: "#values",
      inView: scrollY >= 1800,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-10 rounded-b-md bg-white transition ${scrollY > 1 && "shadow-lg"} `}
    >
      <div
        x-init={true}
        className="mx-auto hidden max-w-6xl items-center justify-between p-4 md:flex"
      >
        <nav className="flex items-center gap-6">
          <div>Abraço Sensível</div>
          <ul className="flex items-center gap-6 font-semibold">
            {navLinks.map(({ name, url, inView }) => (
              <li
                className={`transition hover:text-[#7ed957] ${inView && "text-[#7ed957]"} `}
              >
                <a href={url}>{name}</a>

                <div
                  className={`h-[2px] transition-[width] ${!inView ? "w-0" : "w-full"} bg-[#7ed957]`}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between p-4 md:hidden">
        <NavigationMenu className="flex md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <List size={24} />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  {navLinks.map(({ name, url }) => (
                    <ListItem key={url} href={url} title={name} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>Abraço Sensível</div>
      </div>
    </header>
  );
};
