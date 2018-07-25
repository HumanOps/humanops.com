import React from 'react'
import classNames from 'classnames'
import styled, { css } from 'styled-components'
import * as _ from 'lodash'
import Link from 'next/link'

import * as Color from '../design-system/utilities/color'

import { LinkTarget } from '../types/element'

import Text, { TextProps } from './text'

export interface LinkProps extends Partial<TextProps> {
    children: any;
    invertHover?: boolean;
    hover?: boolean;
    hoverColor?: string;
}

function getTarget(external: boolean): LinkTarget {
    if (external) {
        return LinkTarget.Blank
    }

    return LinkTarget.Self
}

function wrapString(str: string, props: TextProps): JSX.Element {
    const textProps = _.omit(props, [
        'className',
        'href'
    ])

    return (
        <Text {...textProps }>{ str }</Text>
    )
}


const CustomLink: React.StatelessComponent<LinkProps> = (props) => {
    return (
    <Link href={ props.href }>
        <a className={ classNames('link', props.className) } title={ props.title } target={ getTarget(props.external || false) } rel={ props.external ? 'noopener' : undefined }>
            { typeof props.children == 'string' ? wrapString(props.children, props) : props.children }
        </a>
    </Link>
    )
}

function getDecoration(isHovering: boolean, disableHover: boolean = false, invertHover: boolean = false): string {
    if (disableHover || isHovering && !invertHover || !isHovering && invertHover) {
        return 'none'
    }

    return 'underline'
}

const StyledCustomLink = styled(CustomLink)`
    color: ${ props => props.color || Color.brand('cta') };
    text-decoration: ${ props => getDecoration(false, props.hover == false, props.invertHover) };

    ${ props => (props.hover != false) && css`
        &:hover {
            color: ${ props => props.hoverColor || Color.brand('cta-hover') };
            text-decoration: ${ props => getDecoration(true, false, props.invertHover) };
        }
    `}
`

export default StyledCustomLink
