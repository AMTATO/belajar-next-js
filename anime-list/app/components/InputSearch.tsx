"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();

  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const keyword = e.target.value;
      if (keyword) {
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari anime..."
        className="w-full p-2 rounded"
        onChange={(e) => {
          handleSearch(e);
        }}
        onKeyDown={handleSearch}
      />
      <MagnifyingGlass
        size={24}
        className="absolute top-2 end-2 text-gray-500 peer-focus:text-gray-900"
      />
    </div>
  );
};

export default InputSearch;
