import React from "react";
import { Twitter, Linkedin, Envelope } from "./icons";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ data }: any) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col sm:h-screen content-between w-full h-auto sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          src="/images/a.png"
          alt="raffey.png"
          aria-label="raffey.png"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-5">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        <div className="text-white text-center mb-4 mt-4 ">
          <h3 className="mb-5">Contact Me</h3>
          <div className="flex flex-row justify-center gap-2">
            <Link
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </Link>
            <Link
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"twitter link"}
            >
              <Twitter />
            </Link>
            <Link
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"linkedin link"}
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
