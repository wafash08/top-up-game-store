export default function StatItem({
  numbers,
  description,
}: {
  numbers: string;
  description: string;
}) {
  return (
    <li className="border-b-2 border-b-[#E7EAF5] py-8 text-center lg:border-b-0 lg:border-r-2 lg:border-r-[#E7EAF5] lg:py-0 lg:last:border-r-0">
      <h3 className="mb-4 font-poppins text-4xl font-bold text-brand-blue">
        {numbers}
      </h3>
      <p className="font-poppins text-lg font-normal capitalize text-brand-gray">
        {description}
      </p>
    </li>
  );
}
