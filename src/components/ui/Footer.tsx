import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
import logo from "../../../public/image/logo.jpg"

export default function Footer() {
  return (
    <div><footer className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
          Company
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Home</Link>
          </li>
          <li>
            <Link href={"/about"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">About Us</Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Contact Us</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
          Services
        </h2>
        <nav className="list-none mb-10">
        <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Branding</Link>
          </li>
        <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Design</Link>
          </li>
        <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Marketing</Link>
          </li>
        <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Advertisement</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
          Legal
        </h2>
        <nav className="list-none mb-10">
        <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Terms of Use</Link>
          </li>
        <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Privacy Policy</Link>
          </li>
        <li>
            <Link href={"/"} className="text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">Cookie Policy</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
          Follow
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="text-xs font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70"
            >
              Your Email Here
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-myOrange focus:border-black outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-myBlackPara border-0 py-2 px-6 focus:outline-none hover:bg-myOrange rounded mt-2">
            Get Notified
          </button>
        </div>
        <p className="font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70 text-sm mt-2 md:text-left text-center">
          Please provide us you Email
          <br className="lg:block hidden" />
          to get notified dor exciting promos
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image className="text-myWhite" src={logo}
              alt="Z.H Sanitary & Electric Store"
              width={50}
              height={30}
              />
            <span className="ml-3 text-xl">Z.H Sanitary & Electric Store</span>
          </a>
      <p className="text-xs font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70 sm:ml-6 sm:mt-0 mt-4 cursor-pointer">
        © 2024 Z.H Sanitary & Electric Store —
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          hunainislam09@gmail.com
        </a>
      </p>
       <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="_blank" href= {"https://www.linkedin.com/in/hunain-islam-2057832b7/"}className="text-gray-500">
      <IoLogoLinkedin  className="text-2xl hover:text-blue-600"/>
      </Link>
      <Link target="_blank" href= {"https://github.com/hunainislam?tab=repositories"} className="ml-3 text-gray-500">
      <FaSquareGithub  className="text-2xl hover:text-black"/>
      </Link>
      <a target="_blank" href={"https://vercel.com/malik-hunains-projects"} className="ml-3 text-gray-500">
      <SiVercel className="text-2xl hover:text-black"/>
      </a>
      <a target="_blank" href={"https://www.npmjs.com/~malikhunain"} className="ml-3 text-gray-500">
      <FaNpm className="text-2xl hover:text-red-600" />
      </a>
    </span>
    </div>
  </div>
</footer>
</div>
  )
}
