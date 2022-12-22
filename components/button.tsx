import clsx from "clsx";

type ButtonColors = "blue" | "gray";

interface ButtonBaseProps {
  /** Make the button expand the width of the container. */
  fullwidth?: boolean;
  /** The base colour of the button. */
  color?: ButtonColors;
}

type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function getButtonColor(color: ButtonColors) {
  if (color === "gray") {
    return "bg-[#E7EAF5] text-brand-blue";
  }

  return "bg-[#4D17E2] text-white";
}

export default function Button({
  children,
  fullwidth = false,
  color = "blue",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        getButtonColor(color),
        fullwidth && "w-full",
        "inline-block rounded-full py-3 px-8 text-center font-poppins text-lg font-medium"
      )}
      type="button"
    >
      {children}
    </button>
  );
}
