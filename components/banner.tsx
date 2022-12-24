import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import StarIcon from "./icons/star-icon";

export default function Banner() {
  return (
    <section className="grid items-center lg:grid-cols-2">
      <div>
        <h3 className="font-poppins text-lg font-normal text-brand-gray">
          Halo gamers,
        </h3>
        <h1 className="font-poppins text-[42px] font-bold text-brand-blue">
          Topup & Get a <span>New Experience</span> in Gaming
        </h1>
        <h3 className="mt-7 max-w-md font-poppins text-lg font-normal text-brand-blue">
          Kami menyediakan jutaan cara untuk membantu players menjadi pemenang
          sejati
        </h3>
        <div className="mt-10 flex flex-col justify-start gap-5 lg:flex-row lg:items-center">
          <Button>Get Started</Button>
          <Link
            href="/learn-more"
            className="text-center font-poppins text-lg font-normal underline"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="relative px-14">
          <Image
            src="/images/illustration.png"
            alt="Illustration"
            width={490}
            height={484}
            style={{ width: "100%", height: "auto" }}
            priority={true}
          />
          <div className="absolute -left-4 top-16 flex flex-col gap-4 rounded-2xl bg-white py-7 px-7 shadow-md">
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar.png"
                width={40}
                height={40}
                alt="Shayna Anne"
              />
              <div>
                <p className="font-poppins text-sm font-medium text-brand-blue">
                  Shayna Anne
                </p>
                <p className="font-poppins text-xs font-light text-brand-gray">
                  Professional Gamer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <div className="absolute -right-1 bottom-16 flex flex-col gap-4 rounded-2xl bg-white py-7 px-7 shadow-md">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/avatar-2.png"
                width={40}
                height={40}
                alt="Shayna Anne"
              />
              <div className="text-center">
                <p className="font-poppins text-sm font-medium text-brand-blue">
                  Lann Knight
                </p>
                <p className="font-poppins text-xs font-light text-brand-gray">
                  Dota 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
