import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { spacing } from '../design-system/utilities/layout'

import { BaseElementProps, LastItemTaggable } from '../types/element'

import { EventProps } from './event'

type EventNode = React.ReactElement<EventProps>

interface EventsProps extends BaseElementProps {
    children: EventNode | EventNode[];
}

function tagLastChild(children) {
    const totalChildren = React.Children.count(children)

    return React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement((child as React.ReactElement<LastItemTaggable>), { last: index == (totalChildren - 1) })
        }

        return child
    })
}

const Events: React.StatelessComponent<EventsProps> = (props) => (
    <div className={ classNames('events', props.className) }>
        { tagLastChild(props.children) }
    </div>
)

const StyledEvents = styled(Events)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${ spacing(32) }, 1fr));
    grid-column-gap: ${ spacing(8) };
`

export default StyledEvents
