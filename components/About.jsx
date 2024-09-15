import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="text-xl py-2 text-gray-600">
            I am a senior Blockchain Engineer.
          </p>
          <p className="text-xl py-2 text-gray-600">
            A hands-on, goal-oriented, versatile and innovative Senior Web3 Full
            Stack Engineer with 12+ years of professional experience in
            high-performance web3 full stack applications and blockchain
            technology. Skilled in building and integrating decentralized
            applications and smart contracts with expertise in Solidity, Rust,
            and various blockchain platforms like Ethereum, Solana, and Polygon
            and integrating these with frontend frameworks.
          </p>
          <Link href="/#projects">
            <p className="text-xl py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/about.png"
            alt="/"
            width="650"
            height="650"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
