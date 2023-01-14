import Button from "@/components/button";
import Image from "next/image";

export default function FourOhFour() {
  return (
    <div className="layout grid min-h-screen place-items-center gap-16 py-24">
      <Image
        width={480}
        height={300}
        alt="Page Not Found"
        src={"/images/404.svg"}
        priority={true}
      />
      <div className="flex flex-col gap-3 text-center md:items-center">
        <h1 className="font-poppins text-4xl font-bold text-brand-blue">
          Oops! Not Found
        </h1>
        <h3 className="font-poppins text-lg text-brand-blue">
          Halaman yang anda kunjungi sudah tidak tersedia pada sistem kami
        </h3>
        <Button className="mt-12">Home Page</Button>
      </div>
    </div>
  );
}
