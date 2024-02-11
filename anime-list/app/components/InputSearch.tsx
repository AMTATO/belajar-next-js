"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const InputSearch = () => {
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((keyword) => {
    if (keyword) {
      replace(`/search/${keyword}`);
    } else {
      replace(`/`);
    }
  }, 300);

  return (
    <div className="relative">
      <input
        placeholder="Cari anime..."
        className="w-full p-2 rounded"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlass
        size={24}
        className="absolute top-2 end-2 text-gray-500 peer-focus:text-gray-900"
      />
    </div>
  );
};

export default InputSearch;
