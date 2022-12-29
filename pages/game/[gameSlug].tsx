import Layout from "@/components/layout";
import Image from "next/image";

// TODO
// BUAT SETIAP NOMINAL ITEM MENJADI KOMPONEN TERSENDIRI

export default function GameSlugPage() {
  return (
    <Layout>
      <main className="py-14">
        <div className="layout flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <h2 className="font-poppins text-[32px] font-bold text-brand-blue">
              Top Up
            </h2>
            <p className="font-poppins text-lg font-normal text-brand-blue">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="flex flex-col items-center gap-14 text-center lg:flex-row lg:text-left">
            <figure className="overflow-hidden rounded-3xl">
              <Image
                src="/images/thumbnail-1.png"
                alt="Mobile Legends: The New Battle 2021"
                width={280}
                height={380}
                priority={true}
              />
            </figure>
            <div className="flex flex-col gap-3">
              <h2 className="max-w-md font-poppins text-4xl font-bold leading-normal tracking-wide text-brand-blue md:leading-relaxed lg:text-5xl">
                Mobile Legends: The New Battle 2021
              </h2>
              <p className="font-poppins text-lg font-normal text-brand-gray">
                Category: Mobile
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
              <label
                htmlFor="verifyId"
                className="font-poppins text-lg font-medium text-brand-blue"
              >
                Verify ID
              </label>
              <input
                type="text"
                name="verifyId"
                id="verifyId"
                className="rounded-full border border-brand-blue px-6 py-2 text-lg text-brand-blue placeholder:text-[#CCD0DD] focus:outline-1 focus:outline-brand-blue lg:w-1/3"
                placeholder="Enter Your ID"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-poppins text-lg font-medium text-brand-blue">
                Nominal Top Up
              </h4>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <label htmlFor="coin" className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="top up item"
                    id="coin"
                    className="peer sr-only"
                  />
                  <div className="rounded-3xl border-2 border-brand-gray p-7 transition-all peer-checked:border-[#00BAFF] peer-checked:bg-[#00BAFF] peer-checked:bg-opacity-5">
                    <p className="font-poppins text-3xl font-light text-brand-blue">
                      <span className="font-semibold">125</span> Gold
                    </p>
                    <p className="font-poppins text-lg text-brand-blue">
                      Rp 3.250.000
                    </p>
                  </div>
                  <svg
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-8 right-8 opacity-0 transition-all peer-checked:opacity-100"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <label htmlFor="coin2" className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="top up item"
                    id="coin2"
                    className="peer sr-only"
                  />
                  <div className="rounded-3xl border-2 border-brand-gray p-7 transition-all peer-checked:border-[#00BAFF] peer-checked:bg-[#00BAFF] peer-checked:bg-opacity-5">
                    <p className="font-poppins text-3xl font-light text-brand-blue">
                      <span className="font-semibold">125</span> Gold
                    </p>
                    <p className="font-poppins text-lg text-brand-blue">
                      Rp 3.250.000
                    </p>
                  </div>
                  <svg
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-8 right-8 opacity-0 transition-all peer-checked:opacity-100"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <label htmlFor="coin3" className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="top up item"
                    id="coin3"
                    className="peer sr-only"
                  />
                  <div className="rounded-3xl border-2 border-brand-gray p-7 transition-all peer-checked:border-[#00BAFF] peer-checked:bg-[#00BAFF] peer-checked:bg-opacity-5">
                    <p className="font-poppins text-3xl font-light text-brand-blue">
                      <span className="font-semibold">125</span> Gold
                    </p>
                    <p className="font-poppins text-lg text-brand-blue">
                      Rp 3.250.000
                    </p>
                  </div>
                  <svg
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-8 right-8 opacity-0 transition-all peer-checked:opacity-100"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <label htmlFor="coin4" className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="top up item"
                    id="coin4"
                    className="peer sr-only"
                  />
                  <div className="rounded-3xl border-2 border-brand-gray p-7 transition-all peer-checked:border-[#00BAFF] peer-checked:bg-[#00BAFF] peer-checked:bg-opacity-5">
                    <p className="font-poppins text-3xl font-light text-brand-blue">
                      <span className="font-semibold">125</span> Gold
                    </p>
                    <p className="font-poppins text-lg text-brand-blue">
                      Rp 3.250.000
                    </p>
                  </div>
                  <svg
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-8 right-8 opacity-0 transition-all peer-checked:opacity-100"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <label htmlFor="coin5" className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="top up item"
                    id="coin5"
                    className="peer sr-only"
                  />
                  <div className="rounded-3xl border-2 border-brand-gray p-7 transition-all peer-checked:border-[#00BAFF] peer-checked:bg-[#00BAFF] peer-checked:bg-opacity-5">
                    <p className="font-poppins text-3xl font-light text-brand-blue">
                      <span className="font-semibold">125</span> Gold
                    </p>
                    <p className="font-poppins text-lg text-brand-blue">
                      Rp 3.250.000
                    </p>
                  </div>
                  <svg
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-8 right-8 opacity-0 transition-all peer-checked:opacity-100"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
