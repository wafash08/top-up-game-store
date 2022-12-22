import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./button";
import Logo from "./logo";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Rewards", href: "/rewards" },
  { label: "Discover", href: "/discover" },
  { label: "Global Rank", href: "/global-rank" },
];

type NavItemProps = {
  href: string;
  label: string;
};

export function NavItem({ href, label }: NavItemProps) {
  const router = useRouter();
  const arrOfRoute = router.route.split("/");
  const baseRoute = "/" + arrOfRoute[1];

  let active = href === baseRoute;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "font-poppins text-lg transition-colors hover:text-brand-blue",
          active ? "font-medium text-brand-blue" : "font-normal text-brand-gray"
        )}
        data-testid={`next-link-${label}`}
      >
        {label}
      </Link>
    </li>
  );
}

// TODO
// Membuat component button sign in
// kalo user login, tampilkan avatar user
// kalo user belum login tampilkan tombol sign in

// bikin spesifikasi komponen di kertas dulu baru ngoding

export default function Navbar() {
  return (
    <div className="container flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <div className="border-debug hidden lg:flex lg:items-center lg:gap-10">
        <ul
          role="list"
          aria-label="Navigation Menu"
          className="flex items-center gap-10"
        >
          {NAV_ITEMS.map(({ href, label }) => (
            <NavItem key={label} href={href} label={label} />
          ))}
        </ul>
        <Button color="gray">Sign In</Button>
      </div>
    </div>
  );
}
