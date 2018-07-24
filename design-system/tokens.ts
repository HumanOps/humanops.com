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
        'primary': '#79BD9A',
        'cta': '#BD799C',
        'cta-hover': '#CE8AAD'
    }

    static readonly gradient: GradientMap = {
        'primary': {
            'start': '#83D0A0',
            'end': '#D7E2AA',
            'angle': 90
        },
        'cta': {
            'start': '#BD799C',
            'end': '#CE8AAD',
            'angle': 0
        }
    }

    static readonly neutrals: NeutralColorMap = {
        'lightest':     '#fff',
        'light':        '#ddd',
        'mid-light':    '#bbb',
        'mid':          '#999',
        'mid-dark':     '#666',
        'dark':         '#333',
        'darkest':      '#18173A'
    }
}
