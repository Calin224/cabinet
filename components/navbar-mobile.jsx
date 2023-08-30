"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { InfoIcon, HomeIcon, User2, BoxIcon, Banknote } from "lucide-react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";

const monserrat = Montserrat({ weight: ["700"], subsets: ["latin"] });

const routes = [
  {
    label: "Acasa",
    icon: HomeIcon,
    href: "/",
    color: "text-gray-500",
  },
  {
    label: "Despre Mine",
    icon: InfoIcon,
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
    label: "Contact",
    icon: User2,
    href: "/contact",
    color: "text-gray-500",
  },
];

const servicii = [
  {
    label: "Consiliere de dezvoltare personala",
    slug: "consiliere-de-dezvoltare-personala",
    href: "/consiliere-de-dezvoltare-personala",
    color: "text-gray-500",
  },
  {
    label: "Vindecare Spirituala",
    slug: "vindecare-spirituala",
    href: "/vindecare-spirituala",
    color: "text-gray-500",
  },
  {
    label: "Hipnoterapie",
    slug: "hipnoterapie",
    href: "/hipnoza",
    color: "text-gray-500",
  },
  {
    label: "Consiliere filozofica",
    slug: "consiliere-filozofica",
    href: "/consiliere-filozofica",
    color: "text-gray-500",
  },
  {
    label: "Weekend terapeutic in mijlocul naturii",
    slug: "weekend-terapeutic-in-mijlocul-naturii",
    href: "/weekend-terapeutic-in-mijlocul-naturii",
    color: "text-gray-500",
  },
];

export const NavbarMobile = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    // <Sheet>
    //   <SheetTrigger>
    //     <Button variant="ghost" size="icon" className="md:hidden">
    //       <Menu />
    //     </Button>
    //   </SheetTrigger>
    //   <SheetContent side="left" className="p-0">
    //     <div className="px-3 py-4">
    //       <Link href="/" className="flex items-center">
    //         <Image src="/logo.jpeg" width={40} height={40} />
    //         <span
    //           className={cn(
    //             "self-center text-md font-bold whitespace-nowrap dark:text-white",
    //             monserrat.className
    //           )}
    //         >
    //           Daniela Stanciulescu
    //         </span>
    //       </Link>
    //       <ul className="mt-12 font-medium flex flex-col gap-y-10 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
    //         {routes.map((route) =>
    //           route.label !== "Servicii" ? (
    //             <Link href={route.href} key={route.href} className="flex">
    //               <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
    //               {route.label}
    //             </Link>
    //           ) : (
    //             <DropdownMenu key={route.label}>
    //               <DropdownMenuTrigger className="flex">
    //                 <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
    //                 {route.label}
    //               </DropdownMenuTrigger>
    //               <DropdownMenuContent className="w-56">
    //                 {servicii.map((serviciu) => (
    //                   <DropdownMenuItem key={serviciu.href}>
    //                     <Link href={`/serviciu/${serviciu.slug}`}>
    //                       {serviciu.label}
    //                     </Link>
    //                   </DropdownMenuItem>
    //                 ))}
    //               </DropdownMenuContent>
    //             </DropdownMenu>
    //           )
    //         )}
    //       </ul>
    //     </div>
    //   </SheetContent>
    // </Sheet>
    <div>
        
    </div>
  );
};
