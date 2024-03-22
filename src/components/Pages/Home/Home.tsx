import Header from "@/components/Reusable/Header/Header";
import { FC } from "react";
import sample from "../../../assets/Orangeslow.mp4";

const Home: FC = () => {
  return (
    <>
      <Header />
      <main>
        <video
          id="background-video"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src={sample} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50  bg-black"></div>
        <div className="pl-4 relative flex flex-col justify-center items-start py-40 gap-4 w-1/2 h-full">
          <h1 className="text-8xl font-black uppercase text-white leading-[80px]	">
            Start Fellowship
          </h1>
          <h1 className="text-5xl font-black uppercase text-[#FF6100] leading-[40px]">
            CREATING EQUAL OPPORTUNITIES FOR ENTREPRENEURS FROM ALL BACKGROUNDS.
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
