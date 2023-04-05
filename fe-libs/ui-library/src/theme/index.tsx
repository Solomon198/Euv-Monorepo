import { useState } from 'react'
import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { ThemeType, themeDefination, type Modes } from './theme'

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

const ThemeProvider = ({ children }: Props): JSX.Element => {
    const [mode, setMode] = useState<Modes>(ThemeType.light)
    const toggle = (): void => {
        const nextMode =
            mode === ThemeType.light ? ThemeType.dark : ThemeType.light
        setMode(nextMode)
    }
    const theme = createTheme({
        ...themeDefination(mode),
        toggle,
    })
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
