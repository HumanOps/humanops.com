import _ from 'lodash'

import { Event, LocationName, EventID } from '../types/events'

export function extractLocationsFromEvents(events: Event[]): LocationName[] {
    return ([...new Set(events.map(e => e.location))] as LocationName[])
}

function filterEventsForLocation(events: Event[], location: LocationName): Event[] {
    return events
                .filter(e => e.location == location)
}

export function getUpcomingEventsForLocation(events: Event[], location: LocationName, dateNow: Date): Event[] {
    return _(filterEventsForLocation(events, location))
                .filter(e => (new Date(e.date)).getTime() > dateNow.getTime())
                .sortBy(e => new Date(e.date).getTime())
                .value()
}

export function getPreviousEventsForLocation(events: Event[], location: LocationName, dateNow: Date): Event[] {
    return _(filterEventsForLocation(events, location))
                .filter(e => (new Date(e.date)).getTime() < dateNow.getTime())
                .sortBy(e => new Date(e.date).getTime())
                .value()
}

export function getEventID(event: Event): EventID {
    return event.date + event.location
}
