import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Header from "./home/Header";
import MeetTeam from "./home/MeetTeam";
import Construction from "./home/Construction";
import Masonary from "./home/Masonary";

export default function Home() {
  return (
    <div>
      <Header />
      <MeetTeam />
      <Construction />
      <Masonary />
    </div>
  );
}
