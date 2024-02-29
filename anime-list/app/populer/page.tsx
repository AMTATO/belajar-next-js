import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/Pagination";
import CardList from "../components/CardList";
import TopAnimeAll from "../models/TopAnimeAll";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <HeaderMenu />
      <CardList
        title={"Anime Populer"}
        titleStyle="text-2xl font-bold"
        link={"/"}
        titleLink={"Beranda"}
        data={<TopAnimeAll />}
      />
      <Pagination />
    </>
  );
};

export default Page;
