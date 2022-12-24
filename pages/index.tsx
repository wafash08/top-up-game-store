import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import StepList from "@/components/step-list";
import FeaturedGameList from "@/components/featured-game-list";

// TODO
// 1. bikin dan test featured games component

export default function Home() {
  return (
    <>
      <header className="py-10">
        <Navbar />
      </header>
      <main className="py-14">
        <div className="layout">
          <Banner />
          <section className="mt-24 flex flex-col gap-8">
            <h2 className="text-center font-poppins text-[32px] font-bold text-brand-blue">
              It’s Really That <br /> Easy to Win the Game
            </h2>
            <StepList />
          </section>
          <section className="mt-24 flex flex-col gap-8">
            <h2 className="font-poppins text-[32px] font-bold text-brand-blue">
              Our Featured <br /> Games This Year
            </h2>
            <FeaturedGameList />
          </section>
        </div>
      </main>
    </>
  );
}
