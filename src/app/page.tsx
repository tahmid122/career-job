import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Career Job</h1>
      <div className="h-500"></div>
      <div className="h-60 w-full relative">
        <Image src={"/image.png"} fill alt="" />
      </div>
      <div className="h-60 w-full relative">
        <Image src={"/image copy.png"} fill alt="" className="object-contain" />
      </div>
    </div>
  );
}
