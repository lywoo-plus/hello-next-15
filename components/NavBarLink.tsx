'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Register",
    href: "/register",
  }
]

export default function NavBarLink() {
  const pathname = usePathname()

  return (
    <div className="p-4 flex-1 flex gap-4 bg-blue-500">
      {navLink.map((item) => {
        const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');

        return (
          <Link key={item.name} href={item.href} className={isActive ? 'bg-green-500':undefined}>
            {item.name}
          </Link>
        )
      })}
    </div>
  );
}