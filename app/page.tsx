import Image from "next/image";
import Navbar from "./navbar/page";
import HeroSlider from "./fond/page";
import Choix from "./section/choix/page";
import Cars from "./section/cars/page";
import PageVideo from "./section/video/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <Choix />
      <Cars />
      <PageVideo />
    </div>
  );
}
