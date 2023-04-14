import { type Theme } from '@mui/material'

// TODO
// . This will be moved to the generic theme definition.
export const colorNames = [
    'primary',
    'secondary',
    'text',
    'background',
    'divider',
] as const
export type ColorNames = (typeof colorNames)[number]

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
