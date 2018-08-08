import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import * as Color from '../design-system/utilities/color'
import { spacing } from '../design-system/utilities/layout'

import { BaseElementProps, StringWrapper } from '../types/element'

import Text from './text'

export interface MantraProps extends BaseElementProps, StringWrapper {
    number?: number
}


const Mantra: React.StatelessComponent<MantraProps> = (props) => (
    <div className={ classNames('mantra', props.className) }>
    { props.number && <div className='mantra-number-container'>
        <Text inline weight='bold' color={ Color.lightest }>{ props.number }</Text>
    </div> }

        <div className='mantra-description-container'>
            <Text scale={1} color={ Color.neutral('dark') } inline>{ props.children }</Text>
        </div>
    </div>
)

const StyledMantra = styled(Mantra)`
    padding: ${ spacing(3) } ${ spacing(0) };
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (min-width: ${ spacing(75) }) {
        flex-flow: row nowrap;
        text-align: left;
        align-items: baseline;
    }

    .mantra-number-container {
        margin-bottom: ${ spacing(2) };
        padding: ${ spacing(2) };

        display: flex;
        justify-content: center;
        align-items: center;

        height: 40px;
        width: 40px;

        border-radius: 50%;

        background: ${ Color.brand('primary') };
    }

    .mantra-description-container {
        margin: 0 ${ spacing(2) };
    }
`

export default StyledMantra
