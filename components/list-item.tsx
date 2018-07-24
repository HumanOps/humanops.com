import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { spacing } from '../design-system/utilities/layout'

import { BaseElementProps, StringWrapper, LastItemTaggable } from '../types/element'

import Text from './text'

export interface ListItemProps extends BaseElementProps, LastItemTaggable {
    children: any;
}

const ListItem: React.StatelessComponent<ListItemProps> = props => {
    function wrapString(str: string): React.ReactElement<StringWrapper> {
        return <Text inline>{str}</Text>
    }

    return (
        <li className={classNames('list-item', props.className)}>
            {typeof props.children == 'string'
                ? wrapString(props.children)
                : props.children}
        </li>
    )
}

const StyledListItem = styled(ListItem)`
    margin-bottom: ${ props => spacing(props.last ? 0 : 2)};
    position: relative;
    padding-left: ${ spacing(2) };
`

export default StyledListItem
