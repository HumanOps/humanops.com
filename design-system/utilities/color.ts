import { Color } from '../tokens'
import { NeutralColorKey, BrandColorKey, GradientKey } from '../../types/color'

// Brand
export function brand(key: BrandColorKey): string {
    return Color.brand[key]
}

export function gradient(key: GradientKey): string {
    const options = Color.gradient[key]

    return `linear-gradient(${ options.angle || 0}deg, ${ options.start }, ${ options.end })`
}

// Neutrals
export function neutral(key: NeutralColorKey): string {
    return Color.neutrals[key]
}


// Convenience
export const lightest = neutral('lightest')
export const darkest = neutral('darkest')
