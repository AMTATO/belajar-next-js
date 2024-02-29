import AnimeCard from "../components/AnimeCard";

const getTopAnime = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

type Props = {};

const TopAnimeAll = async (props: Props) => {
  const topAnime = await getTopAnime();
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
      {topAnime.data.map((data: AnimeData) => {
          return (
            <AnimeCard
              key={data.mal_id}
              id={data.mal_id}
              title={data.title}
              images={data.images.webp.image_url}
            ></AnimeCard>
          );
        })}
    </>
  )
}

export default TopAnimeAll;