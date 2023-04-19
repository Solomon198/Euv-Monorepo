import { type Theme } from '@mui/material'
import { type ColorNames } from '../Theme'

const getPalleteColor = (
    theme: Theme,
    color: ColorNames | 'inherit'
): string => {
    switch (color) {
        case 'secondary':
            return theme.palette.secondary.main
        default: {
            return theme.palette.primary.main
        }
    }
}

export { getPalleteColor }
