import { EventList } from '@/data/EventsItems'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
    name: 'events',
    initialState: EventList,
    reducers: {
        addEvent: (state, action: PayloadAction<eventsType>) => {
            state.push(action.payload)
        },
        filterEvents: (state, action: PayloadAction<eventsType[]>) => {
            state = action.payload;
        }
    },
})

export const { addEvent, filterEvents } = eventSlice.actions

export default eventSlice.reducer