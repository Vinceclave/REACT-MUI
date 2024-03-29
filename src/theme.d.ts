import { ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string
        }
    }

    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color']
        }
    }

    interface Palette {
        neutral?: PaletterColor
    }

    interface PaletteOptions {
        neutral?: PaletterColorOptions,
    }

    interface SimplePaletteColorOptions {
        darker? : string,
    }

    interface PaletteColor {
        darker?: string,
    }
} 