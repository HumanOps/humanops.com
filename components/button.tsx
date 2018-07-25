import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import chroma from 'chroma-js'

import { Typography } from '../design-system/tokens'

import { spacing } from '../design-system/utilities/layout'
import * as Color from '../design-system/utilities/color'

import { BaseElementProps, Hyperlinkable } from '../types/element'

import Text from './text'
import Link from './link'

type ButtonType = 'button' | 'link'

interface ButtonProps extends BaseElementProps, Partial<Hyperlinkable> {
    children: string;
    type?: ButtonType;
}

function renderElementForType(type: ButtonType, props: ButtonProps): JSX.Element {
    switch (type) {
        case 'button':
            return (
                <button className={ classNames('button', props.className) }>
                    <Text weight='bold' align='center'>{ props.children }</Text>
                </button>
            )

        case 'link':
            return (
                <Link hover={ false } {...props } className={ classNames('button', 'button--link', props.className) } color={ Color.lightest }>
                    <Text weight='bold' align='center'>{ props.children }</Text>
                </Link>
            )
    }
}

const Button: React.StatelessComponent<ButtonProps> = (props) => {
    const buttonType = props.type || 'button'

    return renderElementForType(buttonType, props)
}

const StyledButton = styled(Button)`
    font-family: ${ Typography.fontStack };
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    height: ${ spacing(5) };
    color: ${ Color.lightest };
    width: 100%;
    padding: 0 ${ spacing(2) };
    border-radius: 4px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    background: ${ Color.gradient('cta') };

    &:hover {
        background: ${ chroma(Color.brand('cta')).brighten(0.5).hex() };
    }

    &:active {
        box-shadow: none;
        background: ${ chroma(Color.brand('cta')).darken(0.5).hex() };
    }

    .button--link {
        display: flex;
        align-items:center;
        justify-content: center;
    }

`

export default StyledButton
