import * as React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="py-10">
        <Navbar />
      </header>
      {children}
      <footer className="py-20">
        <Footer />
      </footer>
    </>
  );
}
