import FacebookIcon from "@/app/icons/FacebookIcon";
import GithubIcon from "@/app/icons/GithubIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import { Button } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute flex bottom-14 right-16">
      <Button isIconOnly variant="light" className="rounded-full mr-5">
        <FacebookIcon />
      </Button>
      <Button isIconOnly variant="light" className="rounded-full mr-5">
        <GithubIcon />
      </Button>
      <Button isIconOnly variant="light" className="rounded-full mr-5">
        <LinkedinIcon />
      </Button>
      <p className="p-2">&copy; 2023 Charles Caballero</p>
    </div>
  );
};

export default Footer;
