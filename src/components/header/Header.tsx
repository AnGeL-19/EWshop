import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrincialCategories } from "./PrincialCategories";
import { Search } from "./Search";
import { ButtonIcon } from "../button/ButtonIcon";
import { LinkCart } from "./LinkCart";
import { SideBar } from "../sideBar/SideBar";
import { MenuAuth } from "./MenuAuth";

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuAuth, setShowMenuAuth] = useState(false);

  return (
    <header className="w-full py-3 bg-white fixed top-0">

      <div className="flex px-2 flex-row max-w-screen-xl mx-auto justify-between items-center">

        <div className="w-44 h-16 sm:w-36 sm:h-12">
          <Link to="/">
            <img
              className="w-full h-full object-cover "
              src="https://res.cloudinary.com/dl9e7nlbu/image/upload/v1681727315/textEW-small_lyr3bo.png"
              alt="LogoEW"
            />
          </Link>
        </div>

        <Search key={"lg-screen"} className="md:hidden" />

        <div className="flex flex-row gap-3">
          <div className="relative">
            <ButtonIcon
              key="user"
              className="md:hidden"
              iconBtn="faUser"
              onClick={() => setShowMenuAuth(!showMenuAuth)}
            />

            {showMenuAuth && <MenuAuth />}
          </div>

          <LinkCart />

          <ButtonIcon
            key="menu"
            className="hidden md:flex"
            iconBtn="faBars"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </div>

      <PrincialCategories className="flex-row" />

      <Search key={"md-screen"} className="hidden md:flex" fullWidth />

      {showSidebar && (
        <>
          <div
            className="transition-opacity fixed top-0 left-0 w-full min-h-screen bg-black/20 backdrop-blur-sm opacity-80"
            onClick={() => setShowSidebar(false)}
          ></div>
        </>
      )}
      <SideBar showMenu={showSidebar} setShowMenu={setShowSidebar} />
    </header>
  );
};
