import Image from "next/image";
import Navbar from "./navbar/page";
import HeroSlider from "./fond/page";
import Choix from "./section/choix/page";
import Cars from "./section/cars/page";
import PageVideo from "./section/video/page";
import PageDiscover from "./section/discover/page";
import PageConclusion from "./section/conclusion/page";
import PageFooter from "./section/footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <Choix />
      <Cars />
      <PageVideo />
      <PageDiscover/>
      <PageConclusion/>
      <PageFooter/>
    </div>
  );
}
