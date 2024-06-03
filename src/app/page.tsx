import { CreateEvent } from "@/components/home/CreateEvent";
import Image from "next/image"; 
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 overflow-hidden relative   ">
      <div className="layout max-w-2xl flex flex-col justify-center items-center h-[380px]  ">
        <h1 className="text-3xl font-bold text-center mb-6">
          <span className="text-orange-500 font-bold text-[1.75rem] sm:text-3xl undefined z-10">
            Level Up Your Career:{" "}
          </span>
          Jobs, Internships &amp; Challenges Await!
        </h1>
        <p className="text-base text-center">
          Don&apos;t just dream it, achieve it! Join our vibrant community and
          embark on your career adventure today. Remember, the only limit is
          your ambition. So, what are you waiting for? Go claim your future!
        </p>
        <CreateEvent />
      </div>
      <Image
        alt="background1"
        width="1560"
        height="1438"
        className="absolute w-full h-full inset-0 opacity-30"
        src="https://www.proelevate.in/assets/Common/web.svg"
      />
      <Image alt="background1" width="1000" height="1000" className="w-full h-full absolute top-0 left-0" src="https://www.proelevate.in/assets/Common/green.svg" />
    </div >
  );
};

export default Home;
