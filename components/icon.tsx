import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { BaseElementProps } from '../types/element'

export interface IconProps extends BaseElementProps {
    color?: string;
}

const Icon: React.StatelessComponent<IconProps> = (props) => (
    <svg className={ classNames('icon', props.className) } xmlns="http://wwww3.org/2000/svg" viewBox="0 0 400 400">
        { props.children }
    </svg>
)

const StyledIcon = styled(Icon)`
    height: 100%;
    width: 100%;

    * {
        fill: none;
    }

    .fill {
        fill: ${ props => props.color };
    }
`

export default StyledIcon
