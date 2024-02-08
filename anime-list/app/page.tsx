import Link from "next/link";
import AnimeCard from "./components/AnimeCard";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const anime = await getData();
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
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
          {anime.data.map((data: AnimeData) => {
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
    </div>
  );
};

export default Home;
