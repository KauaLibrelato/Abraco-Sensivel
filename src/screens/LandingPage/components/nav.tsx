import "./nav.css";
import * as React from "react";
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
        <a ref={ref} className={`list-item ${className}`} {...props}>
          <div className="list-title">{title}</div>
          <p className="list-description">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Nav = () => {
  const { scrollY } = useScroll();
  const navLinks = [
    { name: "Sobre nós", url: "#hero", inView: scrollY <= 500 },
    { name: "Missão", url: "#mission", inView: scrollY > 500 && scrollY < 800 },
    { name: "Visão", url: "#vision", inView: scrollY >= 800 && scrollY < 1300 },
    {
      name: "Produtos",
      url: "#products",
      inView: scrollY >= 1300 && scrollY < 1800,
    },
    {
      name: "Serviços",
      url: "#services",
      inView: scrollY >= 1300 && scrollY < 1800,
    },
    { name: "Valores", url: "#values", inView: scrollY >= 1800 },
  ];

  return (
    <header className={`nav-header ${scrollY > 1 && "shadow-lg"}`}>
      <div className="nav-container md:flex">
        <nav className="nav-links">
          <div>Abraço Sensível</div>
          <ul className="list-links">
            {navLinks.map(({ name, url, inView }) => (
              <li key={url} className="nav-link">
                <a href={url} className={inView ? "active" : ""}>
                  {name}
                </a>
                <div
                  className={`nav-underline ${inView ? "visible" : "hidden"}`}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="nav-container-mobile nav-mobile-menu ">
        <NavigationMenu>
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
