import Image from "next/image";
import { Header } from "./components/header";
import First from "./components/home/first";
import { HomePage } from "./components/home";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
