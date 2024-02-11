import CardList from "./components/CardList";
import TopAnime from "./models/TopAnime";
import TopChar from "./models/TopCharacter";

const Page = async () => {
  return (
    <div>
      <CardList title={"Anime Populer"} link={"/populer"} data={<TopAnime />} />
      <CardList
        title={"Karakter Populer"}
        link={"/populer"}
        data={<TopChar />}
      />
    </div>
  );
};

export default Page;
