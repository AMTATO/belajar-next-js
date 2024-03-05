"use client";

import { useState, useEffect } from "react";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/Pagination";
import AnimeCard from "../components/AnimeCard";
import CardList from "../components/CardList";

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
      <HeaderMenu />
      <CardList
        title={"Anime Populer"}
        titleStyle="text-2xl font-bold"
        link={"/"}
        titleLink={"Beranda"}
        data={topAnime.data?.map((data: AnimeData) => {
          return (
            <AnimeCard
              key={data.mal_id}
              id={data.mal_id}
              title={data.title}
              images={data.images.webp.image_url}
            ></AnimeCard>
          );
        })}
      />
      <Pagination />
    </>
  );
};

export default Page;
