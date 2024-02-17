import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Servicies from "@/components/servicies/Servicies";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="bg-[#09292F]">
      <Hero />
      <About />
      <Servicies />
    </div>
  );
}
