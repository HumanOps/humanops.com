import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { spacing } from '../design-system/utilities/layout'

import Text, { TextProps } from './text'

interface HeroSubtitleProps extends TextProps {
}

const HeroSubtitle: React.StatelessComponent<HeroSubtitleProps> = (props) => (
    <Text {...props } className={ classNames('hero-subtitle', props.className) } tag='h2' scale={5} weight='thin' align='center' compact>{ props.children }</Text>
)

const StyledHeroSubtitle = styled(HeroSubtitle)`
    margin-bottom: ${ spacing(4) };
    max-width: 26em;
    margin: 0 auto;
`

export default StyledHeroSubtitle
