export const filterStatus = (events: eventsType[], status: StatusType): eventsType[] => {
    const currDate = new Date().toISOString();

    return events.filter(event => {
        const eventDate = new Date(event.time).toISOString();

        if (status.showCompleted && status.showUpcoming) {
            return event;
        }
        if (status.showCompleted) {
            return eventDate <= currDate;
        }
        if (status.showUpcoming) {
            return eventDate > currDate;
        }
        return event;
    });
};

export const filterEventType = (events: eventsType[], type: eventDestinationType): eventsType[] => {

    return events.filter(event => {
        const eventType = event.place;
        if (type.showOffline && type.showRemote) return event;
        if (type.showOffline) {
            return eventType?.toLocaleLowerCase() === "offline";
        }

        if (type.showRemote) {
            return eventType?.toLocaleLowerCase() === "remote";
        }

        return event;
    });
};
