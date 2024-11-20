"use client";

import Link from "next/link";
import { DarkMode } from "./dark-mode";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname().replace(/\//, "");
  const authPath = ["sign-in", "sign-up"];
  return (
    <nav className="fixed w-full shadow-md">
      <div className="py-5 mx-auto w-full flex items-center justify-between max-w-[1280px]">
        <Link href="/" className="text-[2.5rem] font-light">
          a little anam.
        </Link>
        <div>
          <ul className="flex items-center">
            {!authPath.includes(pathname) && (
              <>
                <li>
                  <Link
                    href="/sign-in"
                    className="text-black bg-white mr-3 rounded-[25px] hover:bg-slate-50 px-4 py-2 border-solid border-[thin] border-black"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="text-white bg-black mr-3 rounded-[25px] hover:bg-slate-900 px-4 py-2"
                  >
                    Join Now
                  </Link>
                </li>
              </>
            )}
            <li>
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
