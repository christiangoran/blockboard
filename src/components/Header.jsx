import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { blockboard_logo } from "../assets";
import { navigation } from "../constants";

import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { removeTokenTimestamp } from "../utils/utils";
import axios from "axios";
import Avatar from "./Avatar";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";

const Header = () => {
  //Current user contexts
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleLogout = async () => {
    //The user is asked to confirm the action
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;
    //That triggers the HTTP POST request using axios
    try {
      await axios.post("/dj-rest-auth/logout/");
      //If successful sets the current user context globally to "null"
      setCurrentUser(null);
      //And removes the token timestamp
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const loggedInIcons = (
    <>
      <NavLink
        to={"/blockboard/"}
        onClick={handleLogout}
        className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
      >
        <i className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"></i>
        Log out
      </NavLink>

      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
      >
        <i className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"></i>
        Dashboard
      </NavLink>

      <NavLink
        to={`#`}
        className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
      >
        <Avatar
          src={currentUser?.profile_image}
          alt="Profile"
          height={36}
          text={currentUser?.username}
        />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        to="#signup"
        className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
      >
        New account
      </NavLink>
      <NavLink to="/blockboard/login">
        <Button className="hidden lg:flex">Sign in</Button>
      </NavLink>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img
            className=""
            src={blockboard_logo}
            width={190}
            height={40}
            alt="Blockboard"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        {/* 
        <a
          href="#signup"
          className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button> */}

        <nav className="flex flex-row items-center justify-center align-middle">
          {currentUser ? loggedInIcons : loggedOutIcons}
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
