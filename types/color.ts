// Brand
export type BrandColorKey   = 'primary' | 'cta' | 'cta-hover'
export type BrandColorMap   = { [I in BrandColorKey]: string }

// Gradients
interface GradientOptions {
    start: string;
    end: string;
    angle: number;
}

export type GradientKey     = 'primary' | 'cta'
export type GradientMap     = { [I in GradientKey]: GradientOptions }

// Neutrals
export type NeutralColorKey = 'darkest' | 'dark' | 'mid-dark' | 'mid' | 'mid-light' | 'light' | 'lightest'
export type NeutralColorMap = { [I in NeutralColorKey]: string }

// Background colors (used in <Section />)
export type BackgroundTheme = 'light' | 'dark' | 'brand'
