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
    { props.number && <div className='number-container'>
        <Text inline weight='bold' color={ Color.lightest }>{ props.number }</Text>
    </div> }

        <div className='description-container'>
            <Text scale={1} color={ Color.neutral('dark') } inline>{ props.children }</Text>
        </div>
    </div>
)

const StyledMantra = styled(Mantra)`
    padding: ${ spacing(2) };
    display: flex;
    flex-flow: row no-wrap;
    align-items: baseline;

    .number-container {
        margin-right: ${ spacing(2) };
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border-radius: 40px;
        padding: ${ spacing(2) };
        background: ${ Color.brand('primary') };
    }
`

export default StyledMantra
