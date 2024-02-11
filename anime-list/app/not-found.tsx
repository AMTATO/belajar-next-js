"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center flex-col items-center gap-8">
      <div className="flex justify-center items-center gap-4">
        <FileSearch size={40} className="text-color-accent"/>
        <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/" className="text-color-primary hover:text-color-accent text-xl transition-all">Kembali</Link>
      </div>
    </div>
  );
};

export default Page;
