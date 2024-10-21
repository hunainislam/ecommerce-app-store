"use client";

import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./HeaderLinks";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";
import logo from "../../../public/image/logo.jpg"

export default function Header() {
  const cart = useAppSelector((state) => state.cart)
  return (
    <div>
      <div className="navbar bg-myWhite">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>Sanitary Items</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"/pipe"}>Pipes</Link>
                    </li>
                    <li>
                      <Link href={"/fitting"}>Fittings</Link>
                    </li>
                    <li>
                      <Link href={"bibcock"}>Bib Cock</Link>
                    </li>
                    <li>
                      <Link href={"solution"}>CPVC Solution</Link>
                    </li>
                  </ul>
                </details>
                <details>
                  <summary>Electric Items</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"coil"}>Coils</Link>
                    </li>
                    <li>
                      <Link href={"bulb"}>Bulbs</Link>
                    </li>
                    <li>
                      <Link href={"sheet"}>China Sheet</Link>
                    </li>
                    <li>
                      <Link href={"breaker"}>Breakers</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <div>
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image className="text-myWhite ml-4 " src={logo}
              alt="Z.H Sanitary & Electric Store"
              width={50}
              height={30}
              />
            <span className="ml-3 text-myBlackPara scroll-m-20 text-xs font-extrabold tracking-tight lg:text-2xl">Z.H Sanitary & Electric Store</span>
          </a>
      </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <Link href={"/cart"}>
            <div
              tabIndex={0}
              role="button"
              className="pr-4 cursor-pointer group "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 group-hover:text-myOrange duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div>
                {cart.length > 0 && (
                  <span className="badge badge-sm font-semibold indicator-item text-myBlackHead group-hover:text-myWhite group-hover:bg-myBlackPara">
                  {cart.length}
                </span>
                )}
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
  );
}
