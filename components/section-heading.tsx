import React from 'react'
import classNames from 'classnames'
import styled, { css }  from 'styled-components'

import { assertUnreachable } from '../utilities/errors'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'

import { BackgroundTheme } from '../types/color'

import Text, { TextProps } from './text'

interface SectionHeadingProps extends TextProps {
    decoration?: boolean;
}

const SectionHeading: React.StatelessComponent<SectionHeadingProps> = (props) => (
    <header className={ classNames('section-heading', props.className) }>
        <Text {...props } scale={6} weight='bold' tag='h1' className='section-heading-text'>{ props.children }</Text>
    </header>
)

function getColorForBackgroundTheme(backgroundTheme: BackgroundTheme): string {
    switch (backgroundTheme) {
        case 'brand':
            return Color.lightest
        case 'dark':
            return Color.lightest
        case 'light':
            return Color.darkest
    }

    return assertUnreachable(backgroundTheme)
}

function getDecorativeBorderColorForBackgroundTheme(backgroundTheme: BackgroundTheme): string {
    switch (backgroundTheme) {
        case 'brand':
            return Color.lightest
        case 'dark':
        case 'light': 
            return Color.gradient('primary')

    }

    return assertUnreachable(backgroundTheme)
}

const StyledSectionHeading = styled(SectionHeading)`
    display: flex;
    justify-content: center;
    margin-bottom: ${ spacing(3) };

    .section-heading-text {
        position: relative;
        display: flex;
        justify-content: center;
        padding-top: ${ spacing(2) };
        color: ${ props => getColorForBackgroundTheme(props.backgroundTheme || 'light') };
    }

    ${ props => (props.decoration != false) && css`
        .section-heading-text::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: ${ spacing(0.5) };
            border-radius: ${ spacing(1) };
            width: 60%;
            margin: 0 auto;
            background: ${ props => getDecorativeBorderColorForBackgroundTheme(props.backgroundTheme || 'light') };
        }` }
`

export default StyledSectionHeading
