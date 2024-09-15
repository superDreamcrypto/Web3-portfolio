import Image from "next/image";
import Link from "next/link";
import React from "react";
import nexImg from "../public/assets/projects/nexgen.png";
import digitalImg from "../public/assets/projects/digital.png";
import pmgImg from "../public/assets/projects/pmg.png";
import rapidImg from "../public/assets/projects/rapid.png";
import actilist from "../public/assets/projects/actilist.png";
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
          <ProjectItem
            title="NexGen BLOCKS"
            backgroundImg={nexImg}
            projectUrl="https://nexgenblock.com/"
          />
          <ProjectItem
            title="DIGITAL NODE"
            backgroundImg={digitalImg}
            projectUrl="https://digital-node.com/"
          />
          <ProjectItem
            title="RAPID BLOCKCHAIN"
            backgroundImg={rapidImg}
            projectUrl="https://www.rapidinnovation.io/"
          />
          <ProjectItem
            title="PMG GLOBAL SOLUTIONS"
            backgroundImg={pmgImg}
            projectUrl="https://www.pmgglobal.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
