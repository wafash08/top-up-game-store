import Image from "next/image";
import Button from "./button";

export default function Story() {
  return (
    <div className="grid items-center md:px-10 lg:grid-cols-2">
      <figure className="hidden lg:block">
        <Image
          src={"/images/story.png"}
          width={612}
          height={452}
          alt="Win the battle. Be the Champion."
        />
      </figure>
      <div className="w-full text-brand-blue lg:pl-24">
        <h2
          data-testid="test-story-title"
          className="mb-7 font-poppins text-4xl font-bold leading-relaxed"
        >
          Win the battle. <br /> Be the Champion.
        </h2>
        <p
          data-testid="test-story-paragraph"
          className="mb-7 font-poppins text-lg"
        >
          Kami menyediakan jutaan cara untuk membantu players menjadi pemenang
          sejati
        </p>
        <Button color="gray">Read Story</Button>
      </div>
    </div>
  );
}
