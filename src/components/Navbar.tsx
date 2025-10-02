import { Link } from "react-router";

import logo from "../assets/fgp-img.png";

// Components
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

// Constants and Interfaces
import { navLinks } from "@/constants";
import type { NavLink } from "@/interfaces";

const Navbar = () => {
  return (
    <div className="container h-[5rem] flex justify-between items-center">
      {/* Logo */}
      <div className="w-20 h-20">
        <img
          src={logo}
          alt="fpg-logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-1 justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-10">
            {navLinks &&
              navLinks.map((link: NavLink) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink
                    asChild
                    className="font-medium tracking-wide text-sm"
                  >
                    <Link to={link.path}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTC */}
      <div>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default Navbar;
