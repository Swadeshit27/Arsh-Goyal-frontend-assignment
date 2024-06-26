"use client"

import { useAppSelector } from "@/redux/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { filterEventType, filterStatus } from "@/app/utils/FilterEvents";
import { FaCheck } from "react-icons/fa";
import ShowEvents from "./ShowEvents";
import { FiFilter } from "react-icons/fi";
import { Modal } from "flowbite-react";
import { motion } from "framer-motion"

const AllEvents = () => {
    const events = useAppSelector((state) => state);
    const [openModal, setOpenModal] = useState(false);
    const [filterEvents, setFilterEvents] = useState(events)
    const [status, setStatus] = useState<StatusType>({
        showCompleted: false,
        showUpcoming: false,
    })
    const [place, setPlace] = useState<eventDestinationType>({
        showOffline: false,
        showRemote: false
    })
    const [isEventOpen, setIsEventOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isPlaceOpen, setIsPlaceOpen] = useState(false);


    const resetDate = () => {
        setStatus({
            showCompleted: false,
            showUpcoming: false,
        });
        setPlace(
            {
                showOffline: false,
                showRemote: false
            }
        )
        setOpenModal(false);
    }
    const StatusFilter = () => {
        // const res = filterStatus(events, status);   
        setFilterEvents(filterStatus(events, status));
    }
    const placeFilter = () => {
        setFilterEvents(filterEventType(events, place));
    }

    const searchEvent = (e: ChangeEvent<HTMLInputElement>) => {
        const searchEventResult = events.filter(event => event.event_name.toLowerCase().includes(e.target.value));
        setFilterEvents(searchEventResult)
    }

    useEffect(() => {
        StatusFilter();
    }, [status])
    useEffect(() => {
        placeFilter();
    }, [place])

    return (
        <section className="layout my-6 sm:my-12 flex gap-x-8">
            <motion.div className="w-96 min-w-[24rem] max-lg:hidden h-auto space-y-6">
                <motion.div
                    animate={{ height: isEventOpen ? 55 : 140 }}
                    transition={{ duration: 0.5 }}
                    className="w-full border rounded-2xl overflow-hidden">
                    <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center" onClick={() => setIsEventOpen(!isEventOpen)}>
                        <h1 className="text-lg">Event</h1>
                        <MdExpandLess className={` ${!isEventOpen ? "rotate-0 " : "rotate-180"} transition-all ease-in-out duration-300`} size={24} />
                    </button>
                    {
                        !isEventOpen && <div className="p-4">
                            <input
                                type="text"
                                placeholder="Search event"
                                className="w-full bg-gray-100 py-3 px-4 rounded-full border-none outline-none focus:!ring-orange-500"
                                onChange={searchEvent}
                            />
                        </div>
                    }
                </motion.div>
                <motion.div
                    animate={{ height: isStatusOpen ? 55 : 130 }}
                    transition={{ duration: 0.5 }}
                    className="w-full  border rounded-2xl overflow-hidden">
                    <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center"
                        onClick={() => setIsStatusOpen(!isStatusOpen)}
                    >
                        <h1 className="text-lg">Status</h1>
                        <MdExpandLess className={` ${!isStatusOpen ? "rotate-0 " : "rotate-180"} transition-all ease-in-out duration-300`} size={24} />
                    </button>
                    {!isStatusOpen && <div className="flex flex-wrap !p-4 gap-3 items-start self-stretch content-start">
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
                    </div>}
                </motion.div>
                <motion.div
                    animate={{ height: isPlaceOpen ? 55 : 130 }}
                    transition={{ duration: 0.5 }}
                    className="w-full border rounded-2xl overflow-hidden">
                    <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center"
                        onClick={() => setIsPlaceOpen(!isPlaceOpen)}
                    >
                        <h1 className="text-lg">Event Type</h1>
                        <MdExpandLess className={` ${!isPlaceOpen ? "rotate-0 " : "rotate-180"} transition-all ease-in-out duration-300`} size={24} />
                    </button>
                    {!isPlaceOpen && <div className="flex flex-wrap !p-4 gap-3 items-start self-stretch content-start">
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
                            Offline
                            {place.showOffline && <FaCheck size={12} />}
                        </button>
                    </div>}
                </motion.div>
            </motion.div>
            <Modal show={openModal} size={"lg"} onClose={() => setOpenModal(false)} >
                <Modal.Header>Filters</Modal.Header>
                <Modal.Body>
                    <motion.div className="w-full h-auto space-y-6">
                        <motion.div
                            animate={{ height: isEventOpen ? 55 : 140 }}
                            transition={{ duration: 0.5 }}
                            className="w-full border rounded-2xl overflow-hidden">
                            <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center" onClick={() => setIsEventOpen(!isEventOpen)}>
                                <h1 className="text-lg">Event</h1>
                                <MdExpandLess className={` ${!isEventOpen ? "rotate-0 " : "rotate-180"} transition-all ease-in-out duration-300`} size={24} />
                            </button>
                            {
                                !isEventOpen && <div className="p-4">
                                    <input
                                        type="text"
                                        placeholder="Search event"
                                        className="w-full bg-gray-100 py-3 px-4 rounded-full border-none outline-none focus:!ring-orange-500"
                                        onChange={searchEvent}
                                    />
                                </div>
                            }
                        </motion.div>
                        <motion.div
                            animate={{ height: isStatusOpen ? 55 : 130 }}
                            transition={{ duration: 0.5 }}
                            className="w-full  border rounded-2xl overflow-hidden">
                            <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center"
                                onClick={() => setIsStatusOpen(!isStatusOpen)}
                            >
                                <h1 className="text-lg">Status</h1>
                                <MdExpandLess className={` ${!isStatusOpen ? "rotate-0 " : "rotate-180"} transition-all ease-in-out duration-300`} size={24} />
                            </button>
                            {!isStatusOpen && <div className="flex flex-wrap !p-4 gap-3 items-start self-stretch content-start">
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
                            </div>}
                        </motion.div>
                        <motion.div
                            animate={{ height: isPlaceOpen ? 55 : 130 }}
                            transition={{ duration: 0.5 }}
                            className="w-full border rounded-2xl overflow-hidden">
                            <button className="w-full h-14 px-4 bg-gray-200 flex justify-between items-center"
                                onClick={() => setIsPlaceOpen(!isPlaceOpen)}
                            >
                                <h1 className="text-lg">Event Type</h1>
                                <MdExpandLess className={` ${!isPlaceOpen ? "rotate-0 " : "rotate-180"} transition-all ease-in-out duration-300`} size={24} />
                            </button>
                            {!isPlaceOpen && <div className="flex flex-wrap !p-4 gap-3 items-start self-stretch content-start">
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
                                    Offline
                                    {place.showOffline && <FaCheck size={12} />}
                                </button>
                            </div>}
                        </motion.div>
                    </motion.div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex justify-end items-center w-full gap-x-4">
                        <button className="customBtnStyle  bg-gray-50 text-black border border-gray-300 hover:bg-gray-200" onClick={resetDate}>Cancel</button>
                        <button className="customBtnStyle" onClick={() => setOpenModal(false)}>Save</button>
                    </div>
                </Modal.Footer>
            </Modal>
            <div className="!w-full">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-lg font-medium mb">
                        All Events {`(${filterEvents.length})`}
                    </h1>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="flex items-center px-4 py-2 gap-x-2 rounded-full bg-gray-200 lg:hidden"
                    >
                        <span>Filters</span>
                        <FiFilter />
                    </button>
                </div>
                <ShowEvents events={filterEvents} />
            </div>
        </section>
    );
};

export default AllEvents;
