import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4">
        <Link href="/" className="font-bold text-white text-2xl">ANIMELIST</Link>
        <input placeholder="Cari anime..."/>
      </div>
    </header>
  );
}

export default Navbar;
