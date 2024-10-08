import { anton, poppins, silka } from "@/lib/fonts/index";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavVBanner from "./PageTransitions/NavVBanner";
import Spanner from "./Spanner";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { paths } from "@/lib/routes";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(pathname);
  }, []);

  return (
    <>
      <>
        <div className={`absolute top-3 left-3 text-2xl ${silka.className}`}>
          JG
        </div>
        <HamMenuBtn setIsOpen={setIsOpen} />
      </>
      <NavVBanner isOpen={isOpen}>
        <div className="uppercase text-9xl tracking-tight">
          {paths.map((path, i) => (
            <Link
              key={i}
              href={path.url}
              className={cn("", {
                "text-stone-700": activePath === path.url,
              })}
            >
              <Spanner text={path.name} animation className={anton.className} />
            </Link>
          ))}
        </div>

        <div className={`absolute bottom-10 right-10 ${poppins.className}`}>
          Code by Jay
        </div>
      </NavVBanner>
    </>
  );
}

function HamMenuBtn({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="z-40 fixed  top-1 right-1 h-10 w-10 p-2 flex items-center justify-center rounded-sm  text-red-500 "
      onClick={() => setIsOpen((a) => !a)}
    >
      <Menu />
    </button>
  );
}

export default Navigation;
