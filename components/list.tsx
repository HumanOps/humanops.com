import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { assertUnreachable } from '../utilities/errors'

import { BaseElementProps, LastItemTaggable, Themable } from '../types/element'
import { BackgroundTheme } from '../types/color'

import * as Color from '../design-system/utilities/color'

import { ListItemProps } from './list-item'

type ListType = 'bullet' | 'number'
type ListElement = React.ReactElement<ListItemProps>

interface ListProps extends BaseElementProps, Themable {
    children: ListElement | ListElement[];
    type?: ListType;
}

function getTagForType(type: ListType) {
    switch (type) {
        case 'number':
            return 'ol'

        case 'bullet':
        default:
            return 'ul'
    }
}

const List: React.StatelessComponent<ListProps> = (props) => {
    const listType = props.type || 'bullet'
    const Tag = getTagForType(listType)

    const totalChildren = React.Children.count(props.children)
    const childrenWithLastItemTagged = React.Children.map(props.children, (child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement((child as React.ReactElement<LastItemTaggable>), { last: index == (totalChildren - 1) })   
        }

        return child
    })

    return (
        <Tag className={ classNames('list', `list--${listType}`, props.className) }>
            { childrenWithLastItemTagged }
        </Tag>
    )
}

function getColorForBackgroundTheme(theme: BackgroundTheme): string {
    switch (theme) {
        case 'brand':
            return Color.lightest
        case 'dark':
            return Color.lightest
        case 'light':
            return Color.neutral('dark')
    }

    return assertUnreachable(theme)
}

const StyledList = styled(List)`
    color: ${ props => getColorForBackgroundTheme(props.backgroundTheme || 'light') };
    list-style: none;
    list-style-position: inside;
`

export default StyledList
