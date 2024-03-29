import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Navigation } from "./Navigation";

function NavBar() {
  return (
    <nav className="navbar flex items-center justify-between w-full py-5 px-8 bg-[#09101c] z-30">
      <Link href={"/"} className="flex justify-center items-center gap-4">
        <Image
          src="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1080,q_auto/Brand/Logo%20Section/Mark/Mark_01"
          alt={"logo"}
          width={480}
          height={480}
          className="w-8 h-8"
        />
        <p className="flex font-bold text-xl text-white">WOW3</p>
      </Link>

      <Navigation />

      <Button
        type="button"
        title="Sign up for early access"
        variant="hidden xl:block text-white bg-slate-800"
      />
    </nav>
  );
}

export default NavBar;
