"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const ProjectTab = () => {
  const [active, setActive] = useState("All");
  const tab = [
    { title: "All" },
    { title: "Mobile" },
    { title: "Web Design" },
    { title: "Development" },
  ];

  return (
    <div className="flex justify-center  items-center">
      {tab.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${tab.length - 1 === index ? "mr-0" : "mr-12"} ${
              active === item.title
                ? "bg-blue-500 text-white rounded-full px-[35px] py-[10px] font-semibold"
                : "bg-white"
            }`}
            onClick={() => setActive(item.title)}
          >
            <Link href={"projects"}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTab;
