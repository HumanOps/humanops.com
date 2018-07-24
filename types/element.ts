import React from 'react'
import { BackgroundTheme } from './color'

export interface Themable {
    backgroundTheme?: BackgroundTheme;
}

export interface BaseElementProps {
    className?: string;
    title?: string;
}

export interface ElementWrapper {
    children: JSX.Element | JSX.Element[];
}

export interface StringWrapper {
    children: string | string[] | React.ReactText | React.ReactText[];
}

export interface LastItemTaggable {
    last?: boolean;
}

export enum LinkTarget {
    Self = '_self',
    Blank = '_blank',
    Parent = '_parent',
    Top = '_top'
}

export interface Hyperlinkable {
    href: string;
    target: LinkTarget;
    external?: boolean;
}
