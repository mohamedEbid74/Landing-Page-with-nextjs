import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="my-24">
      <div className="max-container padding-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center md:flex-row gap-[10%]">
          <Link href='/' className='mb-10'>
            <Image src='hilink-logo.svg' alt='logo' width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-20 sm:justify-center md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title}>
                <ul className="regular-14 flex flex-col text-gray-30 gap-4">
                  {col.links.map((li) => (
                    <Link href='/' key={li}>
                      {li}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col ga-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((li) => (
                  <Link href='/' key={li.label} className="flex md:flex-col lg:flex-row gap-4">
                    <p className="whitespace-nowrap">{li.label}:</p>
                    <p className="medium-14 text-blue-70 whitespace-nowrap">{li.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4 text-gray-30 regular-14">
                  {SOCIALS.links.map((li) => (
                    <Link href='/' key={li}>
                      <Image src={li} alt='social' width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='border bg-gray-20' />
        <p className="regular-14 w-full text-center text-gray-30 capitalize">12/24 Ebid | all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
