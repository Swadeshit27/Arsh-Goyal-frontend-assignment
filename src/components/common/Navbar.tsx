import Image from "next/image";
import React from "react";
import logo from "@/assets/Logo.svg";
import Link from "next/link";
import { MdExpandLess } from "react-icons/md";
import { navItems } from "@/data/NavItems"

const Navbar = () => {
    
    return ( 
        <div className="layout h-20">
            <div className="w-full h-full flex justify-between items-center">
                <Link href="/">
                    <Image
                        alt="logo_img"
                        width="20"
                        height="10"
                        className="w-[12rem] h-9"
                        src={logo}
                    />
                </Link>
                <nav
                    className="z-50 max-w-max items-center justify-center hidden lg:flex gap-1 flex-1 text-sm"
                >
                    <div className={"relative"}>
                        <ul
                            className=" flex-1 list-none items-center justify-center space-x-1"
                        >
                            {
                                navItems.map(item => (
                                    <button
                                        key={item.name}
                                        className="group inline-flex h-10 w-max items-center justify-center rounded-md hover:bg-gray-50 px-4 py-2 transition-all  text-sm text-center hover:text-orange-500 text-gray-500 ease-in-out duration-300"
                                    >
                                        <Link href={item.path}>{item.name}</Link>{" "}
                                        {item.isDropdown && <MdExpandLess className="rotate-180 group-hover:rotate-0" />}
                                    </button>
                                ))
                            } 
                        </ul>
                    </div>
                    <div className="absolute top-full flex justify-center z-20"></div>
                </nav>
                <div className="lg:flex gap-x-4 items-center hidden justify-center">
                    <div className="w-full items-start gap-2 hidden lg:flex">
                        <button className="customBtnStyle" >
                            Log in
                        </button>
                        <button
                            className="customBtnStyle bg-gray-50 text-black border border-gray-300 hover:bg-gray-200 "
                        >
                            Join Free
                        </button>
                    </div>
                </div>
                <div className="lg:hidden flex gap-4 justify-center items-center">
                    <button className="flex flex-col justify-center items-center relative z-50">
                        <span
                            className="bg-gray-600 block h-1 w-6 rounded-sm transition-all duration-300 ease-out -translate-y-0.5"
                        ></span>
                        <span
                            className="bg-gray-600 block h-1 w-6 rounded-sm my-0.5 transition-all duration-100 ease-out  opacity-100"
                        ></span>
                        <span
                            className="bg-gray-600 block h-1 w-6 rounded-sm transition-all duration-300 ease-out translate-y-0.5"
                        ></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
