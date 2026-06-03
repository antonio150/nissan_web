import Image from "next/image";
import Navbar from "./navbar/page";
import HeroSlider from "./fond/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
    </div>
  );
}
