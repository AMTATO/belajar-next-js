import Link from "next/link";
import InputSearch from "../InputSearch";

function Navbar() {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4">
        <Link href="/" className="font-bold text-2xl">ANIMELIST</Link>
        <InputSearch />
      </div>
    </header>
  );
}

export default Navbar;
