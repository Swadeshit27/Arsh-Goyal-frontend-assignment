declare interface navItemsType {
    name: string,
    path: string,
    isDropdown: boolean,
    items?: {
        name: string
        path: string
    }[]
}

declare interface eventsType {
    event_id: number | string,
    event_name: string;
    description: string;
    time: string;
    place?: string;
}

declare interface StatusType{
    showCompleted: boolean,
    showUpcoming: boolean
}

declare interface eventDestinationType {
    showOffline: boolean,
    showRemote: boolean
}