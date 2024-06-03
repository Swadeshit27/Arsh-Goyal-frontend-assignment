
"use client";

import { Modal } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form } from "formik"
import * as yup from "yup"
import { useAppDispatch } from "@/redux/store";
import { addEvent } from "@/redux/Slices/EventsSlice";


export function CreateEvent() {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useAppDispatch();

    const validate = yup.object({
        event_name: yup.string().required("Event name is required"),
        description: yup.string().required("Event description is required").min(100, "Event description must be at least 100 characters"),
        time: yup.date().required("Event time is required"),
    })

    const saveEvent = (values: eventsType) => {
        dispatch(addEvent(values));
        setOpenModal(false)
    }

    return (
        <>
            <div className="z-50 mt-8 space-x-4">
                <button
                    className="customBtnStyle"
                    onClick={() => setOpenModal(true)}
                >Create Events</button>
                <Link href={'/events'}>
                    <button className="customBtnStyle bg-gray-50 text-black border border-gray-300 hover:bg-gray-200 ">View Events</button>
                </Link>
            </div>
            <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)}>
                <Modal.Header >
                    Create Event
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            event_id: Math.floor(Math.random() * 1000),
                            event_name: "",
                            description: "",
                            time: "",
                        }}
                        onSubmit={(value: eventsType) => saveEvent(value)}
                        validationSchema={validate}
                    >{
                            ({ handleChange, values, errors, touched }) => (
                                <Form>
                                    <div className="space-y-1 mb-3">
                                        <label htmlFor="name" className="font-medium">Event Name</label>
                                        <input
                                            type="text"
                                            placeholder="Event Name"
                                            name="event_name"
                                            onChange={handleChange}
                                            className="w-full rounded-md"
                                        />
                                        {
                                            (errors.event_name && touched.event_name) &&
                                            <p className="text-red-500 text-xs">{errors.event_name}</p>
                                        }
                                    </div>
                                    <div className="space-y-1.5 mb-4">
                                        <label htmlFor="name" className="font-medium">Event Description</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Event Description"
                                            name="description"
                                            onChange={handleChange}
                                            className="w-full rounded-md"
                                        />
                                        {
                                            (errors.description && touched.description) &&
                                            <p className="text-red-500 text-xs">{errors.description}</p>
                                        }
                                    </div>
                                    <div className="space-y-1.5 mb-4">
                                        <label htmlFor="date" className="font-medium">Event Date</label>
                                        <input
                                            type="date"
                                            placeholder="Event Name"
                                            name="time"
                                            onChange={handleChange}
                                            className="w-full rounded-md"
                                        />
                                        {
                                            (errors.time && touched.time) &&
                                            <p className="text-red-500 text-xs">{errors.time}</p>
                                        }
                                    </div>
                                    <button type="submit" className="customBtnStyle">Add Event</button>
                                </Form>
                            )
                        }

                    </Formik>
                </Modal.Body>
            </Modal >
        </>
    );
}

