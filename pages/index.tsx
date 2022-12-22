import Navbar from "@/components/navbar";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <header className="py-10">
        <Navbar />
      </header>
      <main className="py-14">
        <div className="layout">
          <Banner />
        </div>
      </main>
    </>
  );
}
