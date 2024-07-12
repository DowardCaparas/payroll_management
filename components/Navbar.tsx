"use client";

import { navlinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col p-5 max-md:hidden bg-white md:w-1/4 h-screen">
      {navlinks.map((link, index) => (
        <Link key={index} href={link.pageURL} className="border-b border-gray-300 p-5 hover:text-slate-500">
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
