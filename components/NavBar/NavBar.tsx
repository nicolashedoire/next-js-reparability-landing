import React, { FC, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
// import useConnectedUser from "../../utils/useConnectedUser";
import Spinner from "../Spinner";
import NavLink from "./NavLink";
import { links } from "./links";
import { NavBarProps } from "./types";

const NavBar: FC<NavBarProps> = ({
  registerUrl = "/register",
  loginUrl = "/login",
}) => {
  const router = useRouter();
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  // const { user, isLoading } = useConnectedUser({});

  const user = false;
  const isLoading = false;

  const onClickMenu = () => {
    setBurgerOpen((value) => !value);
  };

  return (
    <div
      className={clsx("fixed z-50 w-full bg-white shadow-xl", {
        "h-full nav:h-auto": burgerOpen === true,
      })}
    >
      <div className="container max-w-5xl px-3 mx-auto lg:px-0">
        <div className="flex flex-row items-center">
          <div className="mr-4">
            <Link href="/">
              <a>
                <img
                  src={`https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg`}
                  alt="Logo Repair"
                  width={40}
                  height={25}
                />
              </a>
            </Link>
          </div>
          {/* Desktop only */}
          <div className="hidden mr-auto md:flex flex-row ">
            {links.map(({ text, path }) => (
              <NavLink key={path} href={path} active={router.pathname === path}>
                {text}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex md:flex-row">
            {isLoading && (
              <div className="flex flex-row items-center">
                <Spinner className="text-blue-800" />
              </div>
            )}
            {!isLoading && !user && (
              <>
                <NavLink href={loginUrl} active={router.pathname === "/login"}>
                  Se connecter
                </NavLink>
                <Link href={registerUrl}>
                  <a className="my-auto ml-5">
                    <button
                      type="button"
                      className="text-white flex flex-row items-center text-md px-3 py-3 font-bold rounded-md outline-none focus:outline-none bg-purple-700"
                    >
                      <img src={`/icons/user-account.svg`} alt="" />
                      <span className="pl-3">Créer mon compte</span>
                    </button>
                  </a>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Only */}
          <div className="flex items-center ml-auto md:hidden">
            {!isLoading && !user && (
              <NavLink href={loginUrl} active={router.pathname === "/login"}>
                <span className="text-blue-dark">Se connecter</span>
              </NavLink>
            )}
            <div className="ml-2 mr-3">
              <button
                className={clsx(
                  "focus:outline-none",
                  styles.hamburger,
                  styles.hamburgerSlider,
                  {
                    [styles.isActive]: burgerOpen,
                  }
                )}
                type="button"
                onClick={onClickMenu}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Ouvre le menu principal</span>

                <span className={styles.hamburgerBox}>
                  <span className={styles.hamburgerInner} />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile - Menu */}
        <div
          className={clsx({
            hidden: burgerOpen === false,
          })}
        >
          <div className="flex flex-col text-center nav:hidden">
            {links.map(({ text, path }) => (
              <NavLink
                key={path}
                href={path}
                active={router.pathname === path}
                className="border-b-0"
              >
                {text}
              </NavLink>
            ))}
            <div className="w-full mx-auto my-2 rounded-lg bg-purple-600 opacity-20 h-[1px] max-w-[160px]" />
            {!isLoading && !user && (
              <>
                <NavLink
                  href={loginUrl}
                  active={router.pathname === "/login"}
                  className="border-b-0"
                >
                  Se connecter
                </NavLink>
                <Link href={registerUrl}>
                  <a className="my-auto ">
                    <button
                      type="button"
                      className="flex flex-row items-center pl-3 mx-auto text-sm"
                    >
                      <Image
                        src={`/icons/user-account.svg`}
                        width={135}
                        height={43}
                        alt=""
                      />
                      <span className="inline-block ml-3">
                        Créer mon compte
                      </span>
                    </button>
                  </a>
                </Link>
              </>
            )}
            {!isLoading && user && (
              <>
                <NavLink
                  href="/logout"
                  active={router.pathname === "/logout"}
                  className="border-b-0"
                >
                  <span className="text-blue-dark">Se déconnecter</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
