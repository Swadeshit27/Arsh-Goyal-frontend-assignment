"use client";

import AllEvents from "@/components/events/AllEvents";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Events = () => {
    const pathname = usePathname();
    return (
        <>
            <div className="bg-gray-50 overflow-hidden relative">
                <div className="layout flex items-center justify-center  min-h-[380px] flex-col relative py-12">
                    <div className="text-sm text-gray-600 hidden sm:flex justify-start items-center flex-wrap gap-1 z-[1] absolute top-8 left-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 stroke-gray-600 stroke-2 "
                        >
                            <path d="M5 10v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V10M3 12l9-9 9 9"></path>
                        </svg>
                        <Link className="underline cursor-pointer" href="/">
                            Home
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 22 22"
                            className="w-5 h-5 stroke-gray-900 stroke-2"
                        >
                            <path d="m13.762 10.066.06.057a1.25 1.25 0 0 1 .24 1.364c-.07.158-.171.3-.298.417l-.003.002-5.214 4.883-.009.008a.414.414 0 0 1-.665-.477.4.4 0 0 1 .1-.132l.008-.008 5.16-4.83.39-.366-.39-.365-5.154-4.825a.418.418 0 0 1 .275-.71.41.41 0 0 1 .29.101z"></path>
                        </svg>
                        <p className="text-gray-900 font-medium capitalize">
                            {pathname.slice(1)}
                        </p>
                    </div>
                    <div className="max-w-2xl flex flex-col justify-center items-center space-y-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-1">
                                Mark Your Calendar:
                            </h1>
                            <span className="text-2xl sm:text-3xl text-orange-500 font-bold text-center">
                                Events You Can&apos;t Miss
                            </span>
                        </div>
                        <p className="text-center text-sm sm:text-base">
                            Feel free to adjust these headings based on the type and style of
                            events you are promoting. Combining creativity with clarity will
                            help ensure your event page captures the interest of your
                            audience.
                        </p>
                    </div>
                </div>
                <Image
                    alt="background1"
                    loading="lazy"
                    width="1560"
                    height="1438"
                    decoding="async"
                    data-nimg="1"
                    className="absolute inset-0 opacity-30"
                    src="https://www.proelevate.in/assets/Common/web.svg"
                />
                <Image
                    alt="background1"
                    width="1000"
                    height="328"
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.proelevate.in/assets/Common/green.svg"
                />
            </div>
            <AllEvents/>
        </>
    );
};

export default Events;
