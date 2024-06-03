"use client"

import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { filterEventType, filterStatus } from "@/app/utils/FilterEvents";
import { FaCheck } from "react-icons/fa";
import { filterEvents } from "@/redux/Slices/EventsSlice";

const FilterEvents = () => {
    const events = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    // const [filterEvents, setFilterEvents] = useState(events)
    const [status, setStatus] = useState<StatusType>({
        showCompleted: false,
        showUpcoming: false,
    })
    const [place, setPlace] = useState<eventDestinationType>({
        showOffline: false,
        showRemote: false
    })
    const StatusFilter = () => {
        const res = filterStatus(events, status);
        dispatch(filterEvents(res));
    }
    const placeFilter = () => {
        const res = filterEventType(events, place);
        dispatch(filterEvents(res));
    }

    const searchEvent = (e: ChangeEvent<HTMLInputElement>) => {
        const searchEventResult = events.filter(event => event.event_name.toLowerCase().includes(e.target.value));
        console.log(searchEventResult);
        dispatch(filterEvents(searchEventResult));
    }

    useEffect(() => {
        StatusFilter();
        placeFilter();
    }, [status, place])
    return (
        <>
            <div className="w-full min-h-32 border rounded-2xl overflow-hidden">
                <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center">
                    <h1 className="text-lg">Event</h1>
                    <MdExpandLess className="rotate-180" size={24} />
                </button>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Search event"
                        className="w-full bg-gray-100 py-3 px-4 rounded-full border-none outline-none focus:!ring-orange-500"
                        onChange={searchEvent}
                    />
                </div>
            </div>
            <div className="w-full min-h-32 border rounded-2xl overflow-hidden">
                <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center">
                    <h1 className="text-lg">Status</h1>
                    <MdExpandLess className="rotate-180" size={24} />
                </button>
                <div className="flex flex-wrap !p-4 gap-3 items-start self-stretch content-start">
                    <button
                        className={`filterBtn ${status.showUpcoming ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-400 hover:text-white"}`}
                        onClick={() => setStatus({ ...status, showUpcoming: !status.showUpcoming })}
                    >
                        Upcoming
                        {status.showUpcoming && <FaCheck size={12} />}
                    </button>
                    <button
                        className={`filterBtn ${status.showCompleted ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-400 hover:text-white"}`}
                        onClick={() => setStatus({ ...status, showCompleted: !status.showCompleted })}
                    >
                        Completed
                        {status.showCompleted && <FaCheck size={12} />}
                    </button>
                </div>
            </div>
            <div className="w-full min-h-32 border rounded-2xl overflow-hidden">
                <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center">
                    <h1 className="text-lg">Event Type</h1>
                    <MdExpandLess className="rotate-180" size={24} />
                </button>
                <div className="flex flex-wrap !p-4 gap-3 items-start self-stretch content-start">
                    <button
                        className={`filterBtn ${place.showRemote ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-400 hover:text-white"}`}
                        onClick={() => setPlace({ ...place, showRemote: !place.showRemote })}
                    >
                        Remote
                        {place.showRemote && <FaCheck size={12} />}
                    </button>
                    <button
                        className={`filterBtn ${place.showOffline ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-400 hover:text-white"}`}
                        onClick={() => setPlace({ ...place, showOffline: !place.showOffline })}
                    >
                        Completed
                        {place.showOffline && <FaCheck size={12} />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default FilterEvents
