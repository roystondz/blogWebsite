import Image from "next/image";
import AuthForm from "./auth/page";
import Header from "./components/Header";
import FeaturedSection from "./components/FeaturedCollection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
       <Header />
       <Hero />
       <FeaturedSection/>
       {/* <AuthForm /> */}

    </>
  );
}
