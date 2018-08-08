import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'

import { BaseElementProps } from '../types/element'

import Text from './text'
import Link, { LinkProps } from './link'
import LocationIcon from './location-icon'
import CalendarIcon from './calendar-icon'

export interface EventProps extends BaseElementProps {
    date: string;
    host: string;
    detailsLink?: string;
    hostLink?: string;
}

function wrapWithLink(text: string, href: string): React.ReactElement<LinkProps> {
    return (
        <Link href={ href } external>{ text }</Link>
    )
}

const Event: React.StatelessComponent<EventProps> = (props) => (
    <div className={ classNames('event', props.className) }>
        <div className='date-container'>
            <div className='date-icon-container'>
                <CalendarIcon color={ Color.neutral('light') } />
            </div>

            { props.detailsLink ? wrapWithLink(props.date, props.detailsLink) : <Text color={ Color.neutral('dark') }>{ props.date }</Text> }
        </div>

        <div className='location-container'>
            <div className='location-icon-container'>
                <LocationIcon color={ Color.neutral('light') } />
            </div>

            { props.hostLink ? wrapWithLink(props.host, props.hostLink) : <Text color={ Color.neutral('mid-dark') }>{ props.host }</Text> }
        </div>
    </div>
)

const StyledEvent = styled(Event)`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: ${ spacing(.5) } 0 0;

    .location-container,
    .date-container {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        margin-bottom: ${ spacing(.5) };
    }

    .date-container {
        flex: ${ spacing(16) } 1 0;
    }

    .date-icon-container,
    .location-icon-container {
        width: ${ spacing(2) };
        margin-right: ${ spacing(.5) };
    }
`

export default StyledEvent
