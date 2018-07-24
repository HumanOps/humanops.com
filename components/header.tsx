import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components' 

import { spacing } from '../design-system/utilities/layout'

import SocialLinks from './social-links'

interface HeaderProps {
    className?: string
}

const Header: React.StatelessComponent<HeaderProps> = (props) => (
    <header className={ classNames('header', props.className) }>
        <div className='social-links-container'>
            <SocialLinks />
        </div>
    </header>
)

const StyledHeader = styled(Header)`
    padding: ${ spacing(2) } 0;
    display: flex;
    justify-content: flex-end;

    .social-links-container {
        margin-right: ${ spacing(2) };
    }
`

export default StyledHeader
