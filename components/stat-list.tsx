import StatItem from "./stat-item";

export const STAT_ITEMS = [
  {
    numbers: "290M+",
    description: "Players Top Up",
  },
  {
    numbers: "12.500",
    description: "Games Available",
  },
  {
    numbers: "99,9%",
    description: "Happy Players",
  },
  {
    numbers: "4.7",
    description: "Rating Worldwide",
  },
];

export default function StatList() {
  return (
    <ul
      role="list"
      className="mx-auto grid w-5/6 md:grid-cols-2 md:gap-10 lg:w-full lg:grid-cols-4 lg:gap-0 lg:px-14"
    >
      {STAT_ITEMS.map(({ description, numbers }) => (
        <StatItem
          key={description}
          numbers={numbers}
          description={description}
        />
      ))}
    </ul>
  );
}
