"use client"

import React from 'react'
import hunain2 from "../../../public/image/hunain2.jpg"
import Typewriter from "typewriter-effect";
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div>
       <div id="about">
            <section className="text-gray-600 body-font bg-myWhite">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        width={720}
        height={600}
        src={hunain2}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl capitalize">
        <Typewriter
                options={{
                  strings: ["About Me"],
                  autoStart: true,
                  loop: true,
                }}
              />
      </h1>
      <p className="mb-5 leading-relaxed mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-myBlackPara">
              I am a passionate web developer with a deep interest in creating
              engaging, user-friendly, and efficient websites. My journey in web
              development began with learning the fundamentals of HTML, CSS, and
              JavaScript, which laid a solid foundation for my skills. Over
              time, I have mastered modern frameworks and technologies such as
              Next.js, and Tailwind CSS to build dynamic and responsive web
              applications.
              
              < br />
              <br />
              I enjoy solving complex problems and turning
              creative ideas into reality through code. From front-end design to
              back-end logic, I take pride in delivering websites that not only
              look great but also provide seamless functionality. I am always
              eager to learn new tools and technologies that can enhance my
              development process and help me grow as a developer.
              
              <br />
              <br />
              Whether it's
              creating small business websites or working on large-scale
              projects, I am committed to continuous learning and improvement to
              stay ahead in the ever-evolving world of web development.
      </p>
    </div>
  </div>
</section>

    </div>
    </div>
  )
}
