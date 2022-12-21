export type StepItemProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export default function StepItem({ description, title, icon }: StepItemProps) {
  return (
    <li className="list-none rounded-3xl bg-gray-100 p-8">
      <div className="flex flex-col gap-8">
        {icon}
        <div className="flex max-w-[90%] flex-col gap-2">
          <h3 className="font-poppins text-2xl font-semibold">{title}</h3>
          <p className="font-poppins text-lg font-normal">{description}</p>
        </div>
      </div>
    </li>
  );
}
