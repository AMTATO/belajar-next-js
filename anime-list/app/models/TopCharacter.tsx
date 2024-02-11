import AnimeCard from "../components/AnimeCard";

const getTopChar = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=8`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

type Props = {};

const TopChar = async (props: Props) => {
  const topChar = await getTopChar();
  type Webp = {
    image_url: string;
  };
  type Images = {
    webp: Webp;
  };
  interface AnimeData {
    mal_id: number;
    name: string;
    images: Images;
  }
  return (
    <>
      {topChar.data.map((data: AnimeData) => {
        return (
          <AnimeCard
            key={data.mal_id}
            id={data.mal_id}
            title={data.name}
            images={data.images.webp.image_url}
          ></AnimeCard>
        );
      })}
    </>
  );
};

export default TopChar;
