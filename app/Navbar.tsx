"use client";

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { Box } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 items-center p-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  "text-gray-900": link.href === currentPath,
                  "text-gray-500": link.href !== currentPath,
                  "hover:text-gray-800 transition-colors": true,
                })}
              >
                {link.lable}
              </Link>
            </li>
          );
        })}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Logout</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
