import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Nate | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Ashley Vines</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/ashley-2289/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/ashleyviens725"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>senior Blockchain Engineer</p>
          </div>
        </div>
        <p>
          An elegant, reliable, and innovative Senior Full Stack Engineer with
          12+ years of experience in high-performance web applications and
          blockchain technology. Skilled in designing and implementing smart
          contracts on EVM, Solana, and TON using Solidity, Rust, Func, and
          Tact, and integrating these with
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>MERN
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>RESTAPI
            <span className="px-2">|</span>AWS
            <span className="px-2">|</span>Solidity
            <span className="px-2">|</span>Rust
            <span className="px-2">|</span>TypeScript
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              BLOCKCHAIN INNOVATIONS, LLC
            </span>
            <span className="px-2">|</span>Brooklyn, NY
          </p>
          <p className="py-1 italic">
            SENIOR BLOCKCHAIN ENGINEER (SEPTEMBER 2023 – MAY 2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Led the development of decentralized applications (dApps) using
              React, TypeScript, and Fluent UI integrated with smart contracts
              on Ethereum and Solana.
            </li>
            <li>
              Designed and deployed secure and efficient smart contracts using
              Solidity and Rust.
            </li>
            <li>
              Utilized AWS Lambda and AWS S3 for serverless applications,
              optimizing performance and reducing costs.
            </li>
            <li>
              Implemented CI/CD pipelines for automated smart contract
              deployment and testing.
            </li>
            <li>
              Collaborated with UX/UI designers to create intuitive and
              user-friendly interfaces for dApps
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">NEXGEN BLOCKS</span>
            <span className="px-2">|</span>San Francisco, CA
          </p>
          <p className="py-1 italic">
            SENIOR BLOCKCHAIN DEVELOPER (OCTOBER 2022 – AUGUST 2023)
          </p>
          {/* <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul> */}
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">DIGITAL NODE SOLUTIONS</span>
            <span className="px-2">|</span>San Francisco, CA
          </p>
          <p className="py-1 italic">
            FULL STACK BLOCKCHAIN ENGINEER (MAY 2019 – SEPTEMBER 2022)
          </p>
          {/* <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul> */}
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">RAPID BLOCKCHAIN INC.</span>
            <span className="px-2">|</span>San Francisco, CA
          </p>
          <p className="py-1 italic">
            BLOCKCHAIN DEVELOPER (FEBRUARY 2015 – MARCH 2019)
          </p>
          {/* <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul> */}
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">PMG GLOBAL SOLUTIONS</span>
            <span className="px-2">|</span>Fort Worth, Texas
          </p>
          <p className="py-1 italic">
            FULL STACK ENGINEER (DEC 2012 – JAN 2015)
          </p>
          {/* <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul> */}
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">PMG GLOBAL SOLUTIONS</span>
            <span className="px-2">|</span>Fort Worth, Texas
          </p>
          <p className="py-1 italic">
            SOFTWARE ENGINEER INTERN (APR 2012 – NOV 2012)
          </p>
          {/* <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default resume;
