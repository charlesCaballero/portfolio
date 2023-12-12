"use client";
import React from "react";
import Image from "next/image";
import { Button, Spacer } from "@nextui-org/react";
import MaximizeIcon from "./MaximizeIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Headers = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="absolute z-50 top-7 left-12">
        <Link href="/">
          <Image
            src={"/images/charles-logo-circle.png"}
            alt="logo"
            width={70}
            height={70}
          />
        </Link>
      </div>
      <div className="flex flex-row-reverse absolute top-12 right-16 z-50">
        <Button
          variant="bordered"
          className="border-cyan-400"
          endContent={<MaximizeIcon />}
        >
          Resume
        </Button>
        <Spacer />
        <Button variant={pathname === "/contact" ? "flat" : "light"}>
          Contact
        </Button>
        <Spacer />
        <Button variant={pathname === "/milestone" ? "flat" : "light"}>
          Milestones
        </Button>
        <Spacer />
        <Link href={"/about"}>
          <Button variant={pathname === "/about" ? "flat" : "light"}>
            About
          </Button>
        </Link>
        <Spacer />
        <Button variant={pathname === "/" ? "flat" : "light"}>Home</Button>
      </div>
    </div>
  );
};

export default Headers;
