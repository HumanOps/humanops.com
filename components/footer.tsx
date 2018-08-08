import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { BaseElementProps } from '../types/element'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'

import HumanOpsLogo from './humanops-logo2'

interface FooterProps extends BaseElementProps {
}

const Footer: React.StatelessComponent<FooterProps> = (props) => (
    <div className={ classNames('footer', props.className) }>
        <div className='logo-container'>
            <HumanOpsLogo variation='iconmark' />
        </div>
    </div>
)

const StyledFooter = styled(Footer)`
    padding: ${ spacing(4) };
    background: ${ Color.brand('primary') };

    .logo-container {
        width: ${ spacing(6) };
        margin: ${ spacing(6) } auto ${ spacing(10) };
    }
`

export default StyledFooter
