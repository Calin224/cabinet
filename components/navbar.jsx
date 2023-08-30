"use client";

import { cn } from "@/lib/utils";
import {
  InfoIcon,
  HomeIcon,
  User2,
  BoxIcon,
  Menu,
  Banknote,
} from "lucide-react";
import Link from "next/link";

import { Montserrat } from "next/font/google";
import { NavbarMobile } from "./navbar-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const monserrat = Montserrat({ weight: ["700"], subsets: ["latin"] });

const routes = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/despre",
    color: "text-gray-500",
  },
  {
    label: "Servicii",
    icon: BoxIcon,
    href: "/servicii",
    color: "text-gray-500",
  },
  {
    label: "Tarife",
    icon: Banknote,
    href: "/tarife",
    color: "text-gray-500",
  },
  {
    label: "Inrebari frecvente",
    icon: Banknote,
    href: "/intrebari",
    color: "text-gray-500",
  },
  {
    label: "Contact",
    icon: User2,
    href: "/contact",
    color: "text-gray-500",
  },
];

const servicii = [
  {
    label: "Vindecare spirituala prin tehnici stravechi",
    slug: "vindecare-spirituala",
    href: "/vindecare-spirituala",
    color: "text-gray-500",
  },
  // {
  //   label: "Hipnoza",
  //   slug: "hipnoza",
  //   href: "/hipnoza",
  //   color: "text-gray-500",
  // },
  {
    label: "Hipnoterapie",
    slug: "hipnoterapie",
    href: "/hipnoterapie",
    color: "text-gray-500",
  },
  {
    label: "Consiliere filozofica",
    slug: "consiliere-filozofica",
    href: "/consiliere-filozofica",
    color: "text-gray-500",
  },
  {
    label: "Consiliere de dezvoltare persoanla si vocationala",
    slug: "consiliere-de-dezvoltare-personala-si-vocationala",
    href: "/consiliere-de-dezvoltare-personala-si-vocationala",
    color: "text-gray-500",
  },
  {
    label: "Weekend terapeutic in mijlocul naturii",
    slug: "weekend-terapeutic-in-mijlocul-naturii",
    href: "/weekend-terapeutic-in-mijlocul-naturii",
    color: "text-gray-500",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 mx-2 md:mx-12 flex-col gap-y-4">
      <Link href='/' className="flex gap-x-2 items-center justify-center">
        <Image src={"/logo.jpeg"} alt="image"  width={30} height={30} />
        <h1 className="text-xl font-bold">Aurelia - Daniela Stanciulescu</h1>
      </Link>
      <div>
        <ul className="flex gap-x-4">
          {routes.map((route) => (
            <li key={route.href}>
              {route.label !== "Servicii" ? (
                <Link href={route.href}>{route.label}</Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <p className="flex items-center gap-x-2">{route.label}</p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <ul className="flex flex-col gap-y-2">
                      {servicii.map((serviciu) => (
                        <li key={serviciu.slug}>
                          <Link href={`/serviciu/${serviciu.href}`}>
                            {serviciu.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
