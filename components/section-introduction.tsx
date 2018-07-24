import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { assertUnreachable } from '../utilities/errors'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'
import { BackgroundTheme } from '../types/color'

import Text, { TextProps } from './text'

interface SectionIntroductionProps extends TextProps {
}

const SectionIntroduction: React.StatelessComponent<SectionIntroductionProps> = (props) => (
    <div className={ classNames('section-introduction', props.className) }>
        <Text align='center' { ...props } scale={3} weight='thin' compact>{ props.children }</Text>
    </div>
)

function getColorForBackgroundTheme(theme: BackgroundTheme): string {
    switch (theme) {
        case 'brand':
            return Color.neutral('lightest')
        case 'dark':
            return Color.neutral('light')
        case 'light':
            return Color.neutral('dark')
    }

    return assertUnreachable(theme)
}

const StyledSectionIntroduction = styled(SectionIntroduction)`
    color: ${ props => getColorForBackgroundTheme(props.backgroundTheme || 'light') };
    margin-bottom: ${ spacing(4) };
`

export default StyledSectionIntroduction
