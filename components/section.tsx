import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'

import { BaseElementProps, ElementWrapper, Themable } from '../types/element'
import { BackgroundTheme } from '../types/color'

interface SectionProps extends BaseElementProps, ElementWrapper, Themable {
    id?: string;
    name: string;
}

//export const BackgroundThemeContext = React.createContext('light')
//
//export function withBackgroundTheme(Component) {
//    return function ComponentWithTheme(props) {
//        return (
//            <BackgroundThemeContext.Consumer>
//                { backgroundTheme => <Component {...props} backgroundTheme={ backgroundTheme } /> }
//            </BackgroundThemeContext.Consumer>
//        )
//    }
//}

const Section: React.StatelessComponent<SectionProps> = props => {
    const classes = classNames(
        'section',
        props.className,
        `section--${props.name}`
    )

    return (
        <section className={ classes }>{ props.children }</section>
    )
}

function getBackgroundColorForBackgroundTheme(
    backgroundTheme?: BackgroundTheme
): string {
    switch (backgroundTheme) {
        case 'brand':
            return Color.gradient('primary', 180)
        case 'dark':
            return Color.neutral('darkest')
        case 'light':
            return Color.neutral('lightest')
    }

    return 'transparent'
}

const StyledSection = styled(Section)`
    position: relative;
    z-index: 1;

    padding: ${spacing(8)} ${spacing(4)};
    background: ${props =>
        getBackgroundColorForBackgroundTheme(props.backgroundTheme)};

    @media (min-width: 500px) {
        padding ${ spacing(8) } ${ spacing(8) };
    }
`

export default StyledSection
