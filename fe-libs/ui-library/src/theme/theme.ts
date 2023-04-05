import { type ThemeOptions } from '@mui/material'
import { amber, grey, deepOrange } from '@mui/material/colors'

declare module '@mui/material/styles' {
    interface Theme {
        toggle: () => void
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        toggle?: () => void
    }
}

export enum ThemeType {
    dark = 'dark',
    light = 'light',
}

export type Modes = keyof typeof ThemeType

export const themeDefination = (mode: Modes): ThemeOptions => {
    return {
        palette: {
            mode,
            ...(mode === ThemeType.light
                ? {
                      // palette values for light mode
                      primary: { main: '#000000' },
                      secondary: { main: amber['100'] },
                      divider: amber[200],
                      text: {
                          primary: '#000000',
                          secondary: grey[800],
                      },
                      background: {
                          default: '#ffffff',
                          paper: grey[100],
                      },
                  }
                : {
                      // palette values for dark mode
                      primary: { main: '#ffffff' },
                      secondary: { main: '#66aabb' },
                      divider: deepOrange[700],
                      background: {
                          default: '#000000',
                          paper: '#111111',
                      },
                      text: {
                          primary: '#fff',
                          secondary: grey[500],
                      },
                  }),
        },
    }
}
