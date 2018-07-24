import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { BaseElementProps  } from '../types/element'
import { MantraProps } from './mantra'

interface MantrasProps extends BaseElementProps {
    children: React.ReactElement<MantraProps>[]
}

const Mantras: React.StatelessComponent<MantrasProps> = (props) => (
    <div className={ classNames('mantras', props.className) }>
    { React.Children.map(props.children, (child, index) => {
        return React.cloneElement((child as React.ReactElement<MantraProps>), { number: index + 1 })    
    }) }
    </div>
)

const StyledMantras = styled(Mantras)`
`

export default StyledMantras

