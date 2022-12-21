import FillIcon from "@/components/icons/fill-icon";
import StartIcon from "@/components/icons/start-icon";
import WinnerIcon from "@/components/icons/winner-icon";
import StepItem from "@/components/step-item";
import { StepItemTypes } from "./types";

export const STEP_ITEMS: StepItemTypes[] = [
  {
    description: "Pilih salah satu game yang ingin kamu top up",
    title: "1. Start",
    icon: <StartIcon />,
  },
  {
    description: "Top up sesuai dengan nominal yang sudah tersedia",
    title: "2. Fill Up",
    icon: <FillIcon />,
  },
  {
    description: "Siap digunakan untuk improve permainan kamu",
    title: "3. Be a Winner",
    icon: <WinnerIcon />,
  },
];

export default function StepList() {
  return (
    <ul
      role="list"
      aria-label="Langkah-langkah untuk melakukan top up"
      className="border-debug container grid gap-5 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      {STEP_ITEMS.map(({ description, icon, title }) => (
        <StepItem
          key={description}
          description={description}
          title={title}
          icon={icon}
        />
      ))}
    </ul>
  );
}
