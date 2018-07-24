import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { assertUnreachable } from '../utilities/errors'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'

import { BackgroundTheme } from '../types/color'

import Text, { TextProps } from './text'

interface ParagraphProps extends TextProps {
    last?: boolean;
}

const Paragraph: React.StatelessComponent<ParagraphProps> = (props) => (
    <Text tag='p' className={ classNames('paragraph', props.className) } scale={0} {...props}>{ props.children }</Text>
)

function getColorForBackgroundTheme(theme: BackgroundTheme): string {
    switch (theme) {
        case 'brand':
            return Color.neutral('lightest')
        case 'dark':
            return Color.neutral('mid-light')
        case 'light':
            return Color.neutral('mid')
    }

    return assertUnreachable(theme)
}

const StyledParagraph = styled(Paragraph)`
    color: ${ props => getColorForBackgroundTheme(props.backgroundTheme || 'light') };
    margin-bottom: ${ props => spacing(props.last ? 0 : 3) };
`

export default StyledParagraph
