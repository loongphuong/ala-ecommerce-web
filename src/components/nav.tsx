"use client";

import Link from "next/link";
import { DarkMode } from "./dark-mode";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

export function Nav() {
  const pathname = usePathname().replace(/\//, "");
  const authPath = ["sign-in", "sign-up"];
  return (
    <nav className="fixed w-full shadow-md">
      <div className="py-5 px-16 w-full flex items-center justify-between">
        <Link href="/" className="text-[2.5rem] font-light">
          a little anam.
        </Link>
        {!authPath.includes(pathname) && (
          <div>
            <FaRegUser />
          </div>
        )}
        <DarkMode />
      </div>
    </nav>
  );
}
