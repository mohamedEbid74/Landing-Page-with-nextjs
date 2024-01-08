import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=' py-3 shadow-sm'>
      <div className='lg:max-container flex justify-between items-center m-auto xs:max-w-[90%]'>
        <Link href='/'>
          <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              className='regular-16 text-gray-50 transition-all duration-200 hover:font-bold'
              key={link.key}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <Button type="button" title="Login" icone="/user.svg" variant="btn_dark_green"/>
        </div>
        <div className="lg:hidden inline-block cursor-pointer">
          <Image src="/menu.svg" alt="menu" width={24} height={24}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
