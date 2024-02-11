import AnimeCard from "@/app/components/AnimeCard";
import { Suspense } from "react";

const getAnime = async (keyword: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

type Params = {
  keyword: string;
};

type Props = {
  params: Params;
};

const Page = async (params: Props) => {
  const keyword = params.params.keyword;
  const resultAnime = await getAnime(keyword);
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
      <Suspense fallback={<div className="text-2xl">Loading...</div>}>
        {resultAnime && (
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 my-4">
            {resultAnime.data.map((data: AnimeData) => {
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
        )}
        <div className="text-xl text-center">
          Anime {keyword} tidak ditemukan
        </div>
      </Suspense>
    </>
  );
};

export default Page;
