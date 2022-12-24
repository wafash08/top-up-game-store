import FeaturedGameItem from "./featured-game-item";

export const FEATURED_GAMES = [
  {
    name: "Call Of Duty",
    category: "PC",
    thumbnail: "thumbnail-1",
  },
  {
    name: "Mobile Legend",
    category: "Mobile",
    thumbnail: "thumbnail-2",
  },
  {
    name: "PUBG",
    category: "PC",
    thumbnail: "thumbnail-3",
  },
  {
    name: "Point Blank",
    category: "PC",
    thumbnail: "thumbnail-4",
  },
  {
    name: "FIFA 2022",
    category: "PC",
    thumbnail: "thumbnail-5",
  },
];

export default function FeaturedGameList() {
  return (
    <ul
      role="list"
      aria-label="Featured Games"
      className="scrollable flex gap-11 overflow-x-auto overflow-y-hidden pb-5"
    >
      {FEATURED_GAMES.map(({ category, name, thumbnail }) => {
        return (
          <FeaturedGameItem
            key={name}
            name={name}
            category={category}
            thumbnail={thumbnail}
          />
        );
      })}
    </ul>
  );
}
