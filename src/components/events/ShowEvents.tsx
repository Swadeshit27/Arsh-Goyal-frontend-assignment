import { formatDate } from '@/app/utils/FormatDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrLocation } from 'react-icons/gr'
import Event from "@/assets/calendar.png"

const ShowEvents = ({ events }: { events: eventsType[] }) => {
    return (
        <>
            {
                events.length > 0 ?
                    <>
                        {events.map((item) => (
                            <Link href={`/events/${item.event_id}`} key={item.event_id}>
                                <div className="w-full min-h-32 bg-gray-100 rounded-2xl mb-6 hover:shadow-lg border-gray-200 transition-all ease-in-out duration-500 cursor-pointer p-4">
                                    <div className="flex items-center text-sm">
                                        <p>Event</p>
                                        <span className="mx-2"> |  </span>
                                        <p>{formatDate(item.time)}</p>
                                    </div>
                                    <div className="flex space-x-3 my-4">
                                        <div className="w-12 min-w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                            <Image src={Event} alt={"event image"} className="w-6 h-6 rounded-  object-contain" />
                                        </div>
                                        <div>
                                            <h1 className="text-base sm:text-xl  font-semibold mt-1 mb-1.5">{item.event_name}</h1>
                                            <div className="flex items-center space-x-2 text-gray-600 max-sm:text-sm">
                                                <GrLocation size={18} />
                                                <p>Remote</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </>
                    : <section className='!w-full h-60 bg-gray-100 flex items-center justify-center rounded-xl'>
                        <h1 className='text-2xl font-semibold text-red-500'>Sorry, no event present!</h1>
                    </section>
            }
        </>
    )
}

export default ShowEvents
