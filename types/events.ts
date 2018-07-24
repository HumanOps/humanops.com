export type LocationName = string;
export type EventID = string;

export interface Event {
    location: LocationName;
    date: string;
    host: string;
    hostLink?: string;
}
