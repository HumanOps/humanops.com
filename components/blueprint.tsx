import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { Layout } from '../design-system/tokens'

interface BlueprintProps {
    className?: string
}

const Blueprint: React.StatelessComponent<BlueprintProps> = props => (
    <div className={classNames('blueprint', props.className)} />
)

const StyledBlueprint = styled(Blueprint)`
display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    pointer-events: none;

    opacity: 0.3;

    background-image: linear-gradient(#00EEFF, #00EEFF 1px, transparent 1px),
        linear-gradient(90deg, #00eeff 1px, transparent 1px);
    background-size: ${ Layout.gridUnit }px ${ Layout.gridUnit }px, ${ Layout.gridUnit }px ${ Layout.gridUnit }px;
    background-position: -1px -1px, -1px -1px;
`

export default StyledBlueprint
