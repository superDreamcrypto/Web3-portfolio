import Image from "next/image";
import Link from "next/link";
import React from "react";
import neonImg from "../public/assets/projects/neon.png";
import tatumImg from "../public/assets/projects/tatum.png";
import mintbaseImg from "../public/assets/projects/mintbase.png";
import connectNodeImg from "../public/assets/projects/connectnode.png";
import actilist from "../public/assets/projects/actilist.png";
import pmgImg from "../public/assets/projects/pmgworld.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Actilist NFT auction"
            backgroundImg={actilist}
            projectUrl="http://test.actilist.io/"
          />
          {/* <ProjectItem
            title="Neon Labs"
            backgroundImg={neonImg}
            projectUrl="https://www.neonlabs.org/"
          /> */}
          <ProjectItem
            title="Tatum"
            backgroundImg={tatumImg}
            projectUrl="https://tatum.io/nfts"
          />
          <ProjectItem
            title="Blockdaemon"
            backgroundImg={mintbaseImg}
            projectUrl="https://www.blockdaemon.com/"
          />
          <ProjectItem
            title="Mintbase"
            backgroundImg={connectNodeImg}
            projectUrl="https://www.mintbase.io/"
          />
          <ProjectItem
            title="PMG"
            backgroundImg={pmgImg}
            projectUrl="https://www.pmg.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
