import { NeutralColorMap, BrandColorMap, GradientMap } from '../types/color'

// Layout
export class Layout {
    static readonly gridUnit = 8;
}

// Typography
export class Typography {
    static readonly baseFontSize    = 16;
    static readonly typeScaleRatio  = 1.125;
    static readonly lineHeightRatio = 1.5;

    static readonly fontStack = '"Nunito", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
}

// Color
export class Color {
    static readonly brand: BrandColorMap = {
        'primary': '#83D0A0',
        'cta': '#bb5188',
        'cta-hover': '#bb5188'
    }

    static readonly gradient: GradientMap = {
        'primary': {
            'start': '#83D0A0',
            'end': '#6ac1c5',
            'angle': 90
        },
        'cta': {
            'start': '#bb5188',
            'end': '#dd73aa',
            'angle': 0
        }
    }

    static readonly neutrals: NeutralColorMap = {
        'lightest':     '#fff',
        'light':        '#ddd',
        'mid-light':    '#bbb',
        'mid':          '#767676',
        'mid-dark':     '#555',
        'dark':         '#333',
        'darkest':      '#18173A'
    }
}
