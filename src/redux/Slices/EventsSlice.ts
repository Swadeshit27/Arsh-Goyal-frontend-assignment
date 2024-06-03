import { EventList } from '@/data/EventsItems'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const eventSlice = createSlice({
    name: 'events',
    initialState: EventList,
    reducers: {
        addEvent: (state, action: PayloadAction<eventsType>) => {
            state.push(action.payload);
            toast.success("Event is added");
        }
    },
})

export const { addEvent } = eventSlice.actions

export default eventSlice.reducer