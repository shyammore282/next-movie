import Link from "next/link";
import React from "react";

const link = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "About", path: "/about" },
  { id: 3, text: "Sign In", path: "/sign-in" },
];

export const Header = () => {
  return (
    <header className="p-5 bg-gray-400 sticky z-30 top-0 right-0">
      <nav className="flex-between">
        <img src="" alt="logo" />

        <ul className="flex gap-6">
          {link.map((link) => (
            <li key={link.id} className="text-white font-medium ">
              <Link href={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
