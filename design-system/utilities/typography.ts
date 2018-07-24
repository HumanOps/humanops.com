import { Typography, Layout } from '../tokens'

function modularScale(baseFontSize: number, ratio: number, step: number) {
    return (baseFontSize * (Math.pow(ratio, step)) / baseFontSize)
}

export function ms(step: number) {
    return modularScale(Typography.baseFontSize, Typography.typeScaleRatio, step) + 'rem'
}

function lineHeight(baseFontSize: number, ratio: number, gridUnit: number, step: number) {
    const fontSize              = parseFloat(ms(step)) * baseFontSize
    const flexibility           = 0.25 // 0 - 1. How much give we should allow when rounding
    const basicLineHeight       = fontSize * ratio
    const lineHeightWithFlex    = basicLineHeight + (gridUnit * flexibility)
    const roundedFlex           = Math.round(lineHeightWithFlex / gridUnit)
    const finalLineHeight       = roundedFlex * gridUnit
    const finalLineHeightRem    = finalLineHeight / baseFontSize

    return finalLineHeightRem + 'rem'
}

export function lh(step: number) {
    return lineHeight(Typography.baseFontSize, Typography.lineHeightRatio, Layout.gridUnit, step)
}
