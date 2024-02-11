import CardList from "./components/CardList";
import TopAnime from "./models/TopAnime";
import TopChar from "./models/TopCharacter";

const Page = async () => {
  return (
    <div>
      <CardList
        title={"Anime Populer"}
        titleStyle="text-2xl font-bold"
        link={"/populer"}
        titleLink={"Lihat Semua"}
        data={<TopAnime />}
      />
      <CardList
        title={"Karakter Populer"}
        titleStyle="text-2xl font-bold"
        link={"/populer"}
        titleLink={"Lihat Semua"}
        data={<TopChar />}
      />
    </div>
  );
};

export default Page;
