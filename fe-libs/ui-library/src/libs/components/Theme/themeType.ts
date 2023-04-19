export const colorNames = [
    'primary',
    'secondary',
    'text',
    'background',
    'divider',
] as const
export type ColorNames = (typeof colorNames)[number]
