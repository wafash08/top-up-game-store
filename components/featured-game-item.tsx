import Link from "next/link";
import Image from "next/image";
import Console from "./icons/console";

type FeaturedGameItemProps = {
  name: string;
  category: string;
  thumbnail: string;
};

// TODO
// test apakah tiap featured game memiliki href yang sesuai

export default function FeaturedGameItem({
  name,
  category,
  thumbnail,
}: FeaturedGameItemProps) {
  return (
    <li className="group relative h-[270px] w-[205px] flex-shrink-0 overflow-hidden rounded-3xl transition-all hover:border-4 hover:border-brand-blue">
      <Link href={"game/gameSlug"}>
        <div className="transition-all group-hover:blur-2xl">
          <Image
            src={`/images/${thumbnail}.png`}
            alt={name}
            width={205}
            height={270}
            style={{
              width: "205px",
              height: "270px",
            }}
          />
        </div>
        <div className="absolute inset-0 rounded-3xl p-6 opacity-0 group-hover:border-[12px] group-hover:border-white group-hover:opacity-100">
          <div className="flex h-full flex-col justify-between">
            <div className="mt-5 self-center">
              <Console />
            </div>
            <div>
              <h5 className="font-poppins text-xl font-medium text-white">
                {name}
              </h5>
              <p className="font-poppins text-base font-light text-white">
                {category}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
