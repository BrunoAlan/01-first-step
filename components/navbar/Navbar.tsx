// const temporalAsyncFunction = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 1000);
//   });
// }

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Pricing', href: '/pricing' },
]

export const Navbar = async() => {
  // const text = await temporalAsyncFunction();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>
      
      <div className="flex flex-1"/>
      {navItems.map((item) => (
        <Link key={item.label} href = {item.href} className="mr-2">
          <span>{item.label}</span>
        </Link>
      ))}

    </nav>
  )
}