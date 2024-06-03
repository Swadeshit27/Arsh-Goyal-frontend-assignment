"use client"

import { formatDate } from '@/app/utils/FormatDate';
import { useAppSelector } from '@/redux/store';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GrLocation } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';
import Event from "@/assets/calendar.png"
import Image from 'next/image';


const ParticularEvent = () => {
    const { eventId } = useParams();
    const eventList = useAppSelector(state => state); 
    const [eventDetails, setEventDetails] = useState<eventsType>();
    const getEventData = () => {
        const event = eventList.find(ele => String(ele.event_id) === eventId);
        setEventDetails(event);
    }
    useEffect(() => {
        getEventData();
    })

    return (
        <>
            {eventDetails ?
                <section className='layout sm:px-12 min-h-60  my-8'>
                    <div className="text-sm text-gray-600 hidden sm:flex justify-start items-center flex-wrap gap-1 z-[1]">
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
                        <Link className="cursor-pointer" href="/events">
                            Events
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
                            {eventDetails?.event_name}
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-3xl sm:text-4xl font-bold capitalize'>{eventDetails?.event_name}</h1>
                        <div className='w-full flex max-lg:flex-col max-lg:gap-y-8 lg:gap-x-8 mt-6'>
                            <div className='w-full lg:w-[65%] min-h-40 border border-gray-100 rounded-xl p-4 xs:p-6 order-2 lg:order-1'>
                                <h3 className='text-lg font-semibold mb-3'>Description</h3>
                                <p className='max-xs:text-sm text-gray-600'>{eventDetails?.description}</p>
                            </div>
                            <div className='w-full lg:w-[32%] h-72 bg-gray-50 border border-gray-100 rounded-xl  p-4 xs:p-6  order-1 lg:order-2 '>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <Image src={Event} alt={"event image"} className="w-6 h-6 rounded-  object-contain" />
                                </div>
                                <h1 className='sm:text-lg capitalize'>{eventDetails?.event_name}</h1>
                                <div className='flex items-center space-x-2 my-4 text-base text-gray-800 font-medium'>
                                    <span><MdOutlineDateRange size={20} /></span>
                                    <p>{formatDate(eventDetails?.time!)}</p>
                                </div>
                                <div className='flex items-center space-x-2 my-4 text-base text-gray-800 font-medium'>
                                    <span><GrLocation size={20} /></span>
                                    <p>{eventDetails.place}</p>
                                </div>
                                <button className='customBtnStyle'>Register</button>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className='layout min-h-80 flex items-center justify-center'>
                    <h1 className='text-3xl font-semibold text-red-500 text-center'>Sorry event is not exist</h1>
                </section>
            }
        </>
    )
}

export default ParticularEvent
