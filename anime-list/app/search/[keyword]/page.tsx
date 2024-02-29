import AnimeCard from "@/app/components/AnimeCard";
import CardList from "@/app/components/CardList";
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
  const keyword = decodeURI(params.params.keyword);
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
      {resultAnime && (
        <CardList
          title={`Hasil pencarian dari ${keyword}`}
          titleStyle="text-xl"
          link={"/"}
          titleLink={"Beranda"}
          data={resultAnime.data.map((data: AnimeData) => {
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
      )}
    </>
  );
};

export default Page;
