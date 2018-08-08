import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { ContactLink } from '../constants'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'

import { BaseElementProps, LastItemTaggable } from '../types/element'
import { Event } from '../types/events'

import { EventProps } from './event'
import Text from './text'
import Link from './link'

type EventNode = React.ReactElement<EventProps>;

export interface EventLocationProps extends BaseElementProps, LastItemTaggable {
    name: string;
    previousEvents: Event[];
    children?: EventNode | EventNode[];
}

function pluralize(singular: string, plural: string, count: number): string {
    return (count == 1) ? singular : plural
}

const EventLocation: React.StatelessComponent<EventLocationProps> = (props) => {
    const hasUpcomingEvents = React.Children.count(props.children) > 0

    return (
        <div className={ classNames('event-location', props.className) }>
            <header className='event-location-name'>
                <div className='location-name-container'>
                    <Text tag='h1' weight={ hasUpcomingEvents ? 'bold' : 'regular' } scale={3} color={ Color.neutral('dark') }>{ props.name }</Text>
                </div>
            
                <div className='location-previous-events-container'>
                    <Text scale={-1} color={ Color.neutral('mid') }>{ props.previousEvents.length } past { pluralize('event', 'events', props.previousEvents.length) }</Text>
                </div>
            </header>

            { hasUpcomingEvents && <div className='event-location-events'>
                { props.children }
            </div> }

            { !hasUpcomingEvents && <div className='event-location-no-upcoming'>
                <Text tag='p' inline color={ Color.neutral('mid') }>There&apos;s nothing coming up – </Text>
                <Link href={ ContactLink.organizeMeetup } external inline title={'Contact us to talk about organizing a meetup in ' + props.name}>Organize an event</Link>
            </div> }
        </div>
    )
}

const StyledEventLocation = styled(EventLocation)`
    padding: ${ spacing(3) } 0 ${ props => spacing(3, { adjustByPx: (props.last ? 0 : -1) }) } 0;
    border-bottom: 1px solid ${ Color.neutral('light') };

    .event-location-name {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        margin-bottom: ${ spacing(1) };
    }

    .location-name-container {
    }

    .location-previous-events-container {
        display: none;
    }

    @media screen and (min-width: ${ spacing(47) }) {
        .location-previous-events-container {
            display: block;
            border-left: 1px solid ${ Color.neutral('light') };
            padding-left: ${ spacing(1) };
            padding-top: ${ spacing(1) };
            margin-left: ${ spacing(1) };
        }
    }
`

export default StyledEventLocation
