import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Header from "./home/Header";
import MeetTeam from "./home/MeetTeam";
import Construction from "./home/Construction";
import Masonary from "./home/Masonary";
import ContactUs from "./home/ContactUs";
import Vision from "./home/Vision";

export default function Home() {
  return (
    <div>
      <Header />
      <MeetTeam />
      <Construction />
      <Masonary />
      <ContactUs />
      <Vision />
    </div>
  );
}
