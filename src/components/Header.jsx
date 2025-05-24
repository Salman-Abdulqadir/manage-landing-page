import React, { useState } from "react";
import logoSrc from "@images/logo.svg";
import Button from "./ui/Button";
import HumburgerIcon from "@images/icon-hamburger.svg";
import CloseIcon from "@images/icon-close.svg";
import clsx from "clsx";

const Menu = ({ menuProps, menuItemsProps }) => {
  const menu = ["Pricing", "Product", "About Us", "Careers", "Community"];
  return (
    <menu {...menuProps}>
      <ul className="flex items-center gap-4" {...menuItemsProps}>
        {menu.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </menu>
  );
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between h-[15vh]">
      <img src={logoSrc} alt="logo" />
      <Menu menuProps={{ className: "hidden md:block" }} />
      <Button className="hidden md:block">Get Started</Button>
      {!isMenuOpen && (
        <button
          className="block md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={HumburgerIcon} alt="toggle menu" />
        </button>
      )}
      {/* Mobile nav bar */}
      {isMenuOpen && (
        <div
          className={
            "bg-black/25 fixed h-screen w-screen top-0 left-0 px-4 py-14 flex flex-col gap-4"
          }
        >
          <button
            className="cursor-pointer self-end"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={CloseIcon} alt="toggle menu" />
          </button>
          <Menu
            menuProps={{
              className: clsx(
                "bg-white p-6 rounded-lg transition-all duration-300 transform",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              ),
            }}
            menuItemsProps={{ className: "space-y-4 text-center" }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
