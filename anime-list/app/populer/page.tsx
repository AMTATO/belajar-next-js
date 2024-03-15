"use client";

import { useState, useEffect } from "react";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/Pagination";
import AnimeCard from "../components/AnimeCard";

type Props = {};

const Page = (props: Props) => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const getTopAnime = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    };

    const data = await getTopAnime();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  type Webp = {
    image_url: string;
  };
  type Images = {
    webp: Webp;
  };
  interface AnimeData {
    mal_id: number;
    title: string;
    images: Images;
  }
  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-4">
        {topAnime.data?.map((data: AnimeData) => {
          return (
            <AnimeCard
              key={data.mal_id}
              id={data.mal_id}
              title={data.title}
              images={data.images.webp.image_url}
            ></AnimeCard>
          );
        })}
      </div>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </>
  );
};

export default Page;
