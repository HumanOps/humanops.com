import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { BaseElementProps } from '../types/element'

import Image from './image'

type LogoVariation = 'full' | 'iconmark' | 'wordmark'

interface LogoProps extends BaseElementProps {
    variation?: LogoVariation;
}

const HumanOpsLogo: React.StatelessComponent<LogoProps> = (props) => {
    const variation: LogoVariation = props.variation || 'full'
    const source = '/static/images/humanops-logo-' + variation + '.svg'

    return (
        <Image 
            className={ classNames('humanops-logo', props.className) } 
            title='HumanOps Logo'
            alt='HumanOps Logo'
            source={ source } 
        />
    )
}

const StyledHumanOpsLogo = styled(HumanOpsLogo)`
    width: 100%;
`


export default StyledHumanOpsLogo
