import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { BaseElementProps } from '../types/element'

interface ImageProps extends BaseElementProps {
    source: string;
    alt: string;
    title: string;
}

const Image: React.StatelessComponent<ImageProps> = (props) => (
    <img className={ classNames('image', props.className) } src={ props.source } alt={ props.alt } title={ props.title } />
)

const StyledImage = styled(Image)`
`

export default StyledImage
