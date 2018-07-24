import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import * as _ from 'lodash'

import { ms, lh } from '../design-system/utilities/typography'

import { BaseElementProps, StringWrapper, Themable, Hyperlinkable } from '../types/element'

export type TextAlignment   = 'left' | 'center' | 'right'
export type TextWeight      = 'thin' | 'regular' | 'bold' 

enum TextWeightConversion {
    Thin    = 300,
    Regular = 400,
    Bold    = 700
}

export interface TextProps extends BaseElementProps, StringWrapper, Themable, Partial<Hyperlinkable> {
    tag?: string;
    align?: TextAlignment;
    weight?: TextWeight;
    scale?: number;
    inline?: boolean;
    color?: string;
    compact?: boolean;
}

// TODO: Figure out a cleaner way to handle these props
// List of attributes that we need to whitelist
// to be placed onto the HTMLElement
// i.e If a parent component uses <Text tag='a' target='_blank'...
// then we need to pass that through, even though the Text component
// isn't a link
const whitelistedHTMLAttributes = [
    'target',
    'href'
]

const Text: React.StatelessComponent<TextProps> = (props) => {
    const Tag = props.tag || 'span'

    const htmlAttrs = _.pick(props, whitelistedHTMLAttributes)

    return (
        <Tag { ...htmlAttrs } className={ classNames('text', props.className) }>{ props.children }</Tag>
    )
}

function convertTextWeight(weight: TextWeight): TextWeightConversion {
    switch (weight) {
        case 'thin':
            return TextWeightConversion.Thin;
        case 'bold':
            return TextWeightConversion.Bold;
        case 'regular':
        default:
            return TextWeightConversion.Regular;
    }
}

const StyledText = styled(Text)`
    display: ${ props => props.inline ? 'inline' : 'block' };
    font-size: ${ props => ms(props.scale || 0) };
    font-weight: ${ props => convertTextWeight(props.weight || 'regular') };
    line-height: ${ props => lh(props.compact ? ((props.scale || 0) - 1) : props.scale || 0) };
    text-align: ${ props => props.align || 'left' };
    color: ${ props => props.color || 'currentColor' };
`

export default StyledText
