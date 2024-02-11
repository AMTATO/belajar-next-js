import Link from "next/link";

type Props = {title: string, link: string, data:any};

const CardList = async ({title, link, data}: Props) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link
          href={link}
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-4">
        {data}
      </div>
    </>
  );
};

export default CardList;
