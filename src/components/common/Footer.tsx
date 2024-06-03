import Link from "next/link";
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail, MdOutlineEmail } from "react-icons/md";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { RiFeedbackLine } from "react-icons/ri";

const Footer = () => {
    return ( 
        <div className="bg-orange-600">
            <div className="flex lg:flex-row gap-6 items-center justify-between w-11/12 lg:max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
                <div className="border-b border-orange-400 w-[100%] flex flex-col flex-wrap sm:flex-row pb-5 items-start justify-center gap-6">
                    <div className="flex flex-col gap-3 justify-center items-start w-full lg:w-[30%]">
                        <Image
                            alt="ProElevate" 
                            width="10"
                            height="10" 
                            className="h-10 w-56"
                            src="https://www.proelevate.in/assets/Common/FooterLogo.svg"
                        />
                        <p className="text-base text-white font-normal">
                            Join Our Community: Connect with like-minded individuals and grow
                            your network.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between pl-3 lg:pl-5 gap-x-9 flex-wrap">
                        <div className="flex flex-col mb-7 lg:pl-0 gap-3">
                            <h1 className="text-white font-semibold text-[16px]">
                                ProElevate&apos;s
                            </h1>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="text-[14px] cursor-pointer text-white transition-all duration-200 hover:text-gray-200">
                                    <a href="/privacy-policy">Privacy Policy</a>
                                </div>
                                <div className="text-[14px] cursor-pointer text-white transition-all duration-200 hover:text-gray-200">
                                    <a href="/terms-of-service">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mb-7 lg:pl-0 gap-3">
                            <h1 className="text-white font-semibold text-[16px]">
                                Useful Links
                            </h1>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="text-[14px] cursor-pointer text-white transition-all duration-200 hover:text-gray-200">
                                    <a href="/dsa-practice">DSA Practice</a>
                                </div>
                                <div className="text-[14px] cursor-pointer text-white transition-all duration-200 hover:text-gray-200">
                                    <a href="/interviews">Interviews</a>
                                </div>
                                <div className="text-[14px] cursor-pointer text-white transition-all duration-200 hover:text-gray-200">
                                    <a href="/jobs">Jobs</a>
                                </div>
                                <div className="text-[14px] cursor-pointer text-white transition-all duration-200 hover:text-gray-200">
                                    <a href="/competitions">Competitions</a>
                                </div>
                                <div className="text-[14px] cursor-pointer text-white transition-all duration-200 hover:text-gray-200">
                                    <a href="/resources">Resources</a>
                                </div>
                            </div>
                        </div>
                        <div className="sm:pl-5 flex flex-col gap-y-8">
                            <div className="flex flex-col gap-3 justify-center items-start">
                                <p className="text-base font-bold text-gray-50">Follow us on</p>
                                <div className="flex items-start justify-center gap-3">
                                    <a
                                        target="_blank"
                                        className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer text-white "
                                        href="https://www.instagram.com/arshgoyalyt"
                                    >
                                         <FaInstagram size={22}/>
                                    </a>
                                    <a
                                        target="_blank"
                                        className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer text-white"
                                        href="https://www.youtube.com/@ArshGoyal"
                                    >
                                        <FaYoutube size={22} />
                                    </a>
                                    <a
                                        target="_blank"
                                        className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer text-white"
                                        href="https://twitter.com/arsh_goyal"
                                    >
                                        <FaXTwitter size={22}/>
                                    </a>
                                </div>
                            </div>
                            <div className="lg:pl-0 gap-3">
                                <h1 className="text-white font-semibold text-[16px]">
                                    Contact Us
                                </h1>
                                <div className="flex flex-col gap-2 mt-2">
                                    <div className="text-sm cursor-pointer text-white transition-all duration-200 flex gap-2 items-center">
                                         <MdOutlineEmail size={18}/>
                                        <a href="mailto:arshgoyal98@gmail.com">
                                            arshgoyal98@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <button className="mt-4 text-sm cursor-pointer text-white transition-all duration-200 flex gap-2 items-center group undefined">
                                    <RiFeedbackLine size={18}/> {" "}
                                    Feedback
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center w-11/12 max-w-maxContent mx-auto  pb-8 text-sm">
                <div className="text-center text-sm font-semibold text-white">
                    Copyright © 2024 ProElevate - All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
