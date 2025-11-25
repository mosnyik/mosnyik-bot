import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Settings", href: "/settings" },
  ];
  return (
    <div>
      {/* Navbar */}
      <header className="w-full border-b border-border h-16 flex items-center justify-between px-6">
        <div className="font-semibold text-lg">AI Chat Assistant</div>
        <button className="p-2 rounded-lg border border-border hover:bg-accent/10 transition">
          ⚙️
        </button>
      </header>
    </div>
    // <div className="flex justify-between">
    //   {navLinks.map((navEle, i) => (
    //     <Link key={i} href={navEle.href}>
    //       {navEle.label}
    //     </Link>
    //   ))}
    // </div>
  );
};

export default Navbar;
