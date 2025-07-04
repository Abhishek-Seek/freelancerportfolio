"use client";

import { Button } from "antd";
import Image from "next/image";
import React from "react";
import NavImage from "@/assets/images/logo.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-6 px-6 text-center bg-gray-900">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-sm brightness-75"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      <div className="relative z-10">

        <div className="flex justify-between items-center px-6 sm:px-20 mb-10 text-white">
          <Image src={NavImage} alt="Logo" height={80} width={80} className=""/>
          <ul className="hidden md:flex justify-center items-center gap-10 text-lg font-medium">
            <a href="#home"><li>Home</li></a>
            <a href="#services"><li>Service</li></a>
            <a href="#team"><li>Team</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
          <Button className="!py-5 !px-4 !bg-blue-500 !text-white hover:!bg-blue-600 transition">
            Get Started
          </Button>
        </div>

        <div className="max-w-4xl mx-auto text-white pt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
            🎯 Freelance Digital Marketing Expert in Bangalore
          </h1>
          <p className="text-lg sm:text-xl mb-8 drop-shadow-md">
            Your one-stop solution for SEO, PPC, Google Ads, Social Media Marketing, Web Design &amp; More.{" "}
            <br className="hidden sm:block" />
            No agencies. Just real results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Get Free Audit
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
              Let’s Talk Growth
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
