import Hero from "../components/Hero";
import AboutPelingku from "../components/AboutPelingku";
import ArtikelPelingku from "../components/ArtikelPelingku";
import { Gallery } from "../components/Gallery";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <ArtikelPelingku/>
      <Gallery />
      <AboutPelingku />
    </div>
  );
}
