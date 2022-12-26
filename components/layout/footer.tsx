import Link from "next/link";
import Logo from "../logo";

const COMPANY_ITEMS = [
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "Press Release",
    href: "/",
  },
  {
    label: "Terms of Use",
    href: "/about",
  },
  {
    label: "Privacy and Policy",
    href: "/",
  },
];

const SUPPORT_ITEMS = [
  {
    label: "Refund Policy",
    href: "/",
  },
  {
    label: "Unlock Rewards",
    href: "/",
  },
  {
    label: "Live Chatting",
    href: "/",
  },
];

const CONNECT_ITEMS = [
  {
    label: "hi@store.gg",
    href: "/",
  },
  {
    label: "team@store.gg",
    href: "/",
  },
  {
    label: "Pasific 12, Jakarta Selatan",
    href: "/",
  },
  {
    label: "021 - 1122 - 9090",
    href: "/",
  },
];

export const FOOTER_ITEMS = [
  {
    category_item: "company",
    data: COMPANY_ITEMS,
  },
  {
    category_item: "support",
    data: SUPPORT_ITEMS,
  },
  {
    category_item: "connect",
    data: CONNECT_ITEMS,
  },
];

export function FooterItem({ label, href }: { label: string; href: string }) {
  return (
    <li className="font-poppins text-lg font-normal text-brand-blue">
      <Link href={`${href}`}>{label}</Link>
    </li>
  );
}

export function FooterList({
  category,
}: {
  category: "company" | "support" | "connect";
}) {
  return (
    <ul role="list" aria-label={`${category}`} className="grid gap-2">
      {FOOTER_ITEMS.map(({ category_item, data }) => {
        return (
          category_item === category &&
          data.map(({ href, label }) => (
            <FooterItem key={label} href={href} label={label} />
          ))
        );
      })}
    </ul>
  );
}

export default function Footer() {
  return (
    <div className="layout grid lg:grid-cols-5 lg:gap-20">
      <div className="col-span-2 grid gap-8">
        <Link href="/">
          <Logo />
        </Link>
        <p className="font-poppins text-lg font-normal text-brand-blue">
          StoreGG membantu gamers untuk menjadi pemenang sejati
        </p>
        <p className="font-poppins text-lg font-normal text-brand-blue">
          Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="font-poppins text-lg font-semibold text-brand-blue">
          Company
        </h4>
        <FooterList category="company" />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="font-poppins text-lg font-semibold text-brand-blue">
          Support
        </h4>
        <FooterList category="support" />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="font-poppins text-lg font-semibold text-brand-blue">
          Connect
        </h4>
        <FooterList category="connect" />
      </div>
    </div>
  );
}
