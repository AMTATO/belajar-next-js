import Link from "next/link";

type Props = {title: string, titleStyle:string, link: string, titleLink:string, data:any};

const CardList = async ({title, titleStyle, link, titleLink, data}: Props) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className={`${titleStyle} text-color-primary`}>{title}</h1>
        <Link
          href={link}
          className="md:text-xl text-md text-color-primary underline hover:text-color-accent transition-all"
        >
          {titleLink}
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-4">
        {data}
      </div>
    </>
  );
};

export default CardList;
