import Link from "next/link";
import AnimeCard from "./AnimeCard";
import getTopAnime from "../models/TopAnime";

type Props = {};

const CardList = async ({}: Props) => {
  const topAnime = await getTopAnime();
  type Webp = {
    image_url: string;
  };
  type Images = {
    webp: Webp;
  };
  interface TopAnime {
    mal_id: number;
    title: string;
    images: Images;
  }
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link
          href="/populer"
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {topAnime.data.map((data: TopAnime) => {
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
    </>
  );
};

export default CardList;
