"use client";

import { useState } from "react";

type Props = { page: number; lastPage: number; setPage: any };

const Pagination = ({ page, lastPage, setPage }: Props) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };
  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        id="prev"
        className="transition-all hover:text-color-accent disabled:opacity-50 disabled:hover:text-color-primary"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        id="next"
        className="transition-all hover:text-color-accent disabled:opacity-50 disabled:hover:text-color-primary"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
