import { Layout, Typography } from '../tokens'

type UnitValue = string

type SpacingOptions = {
    adjustByPx?: number
}

export function spacing(step: number, options: SpacingOptions = {}): UnitValue {
    return ((Layout.gridUnit * step + (options.adjustByPx || 0)) / Typography.baseFontSize) + 'rem'
}
