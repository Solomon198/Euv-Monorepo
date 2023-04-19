import { useContext, createContext, type FC } from 'react'
import { useTheme } from '@mui/material'

import type { IIconNames, TIconContext, TIconNames } from './type'

import { type ColorNames } from '../Theme'
import { getPalleteColor } from './utils'

export type { IIconNames, TIconContext, TIconNames }

export interface IBaseIconProps {
    /** Specify color as available in theme */
    color?: ColorNames | 'inherit'
    /** Specify size in pixel */
    size?: string | number
    /** Specify name of icon from icon pack */
    name: TIconNames
}

const IconContext = createContext<TIconContext | null>(null)
const useIcons = (): TIconContext => {
    const icons = useContext(IconContext)
    if (icons == null) {
        throw new Error(
            'icons is null. Please consider wrapping your application in an Iconprovider'
        )
    }
    return icons
}

const Icon = (props: IBaseIconProps): JSX.Element => {
    const theme = useTheme()
    const { name, size, color = 'primary' } = props
    const icons = useIcons()
    const SelectedIcon = icons[name]
    if (SelectedIcon === undefined || SelectedIcon === null) {
        throw new Error(`Icon ${name} does not exist in IconProvider `)
    }

    const $sizeBool = typeof size === 'number' || typeof size === 'string'

    return (
        <>
            <SelectedIcon
                color={getPalleteColor(theme, color)}
                {...($sizeBool ? { width: size, height: size } : {})}
            />
        </>
    )
}

interface IcreateIconContextProps {
    icons: TIconContext
}

interface contextReturnType {
    Provider: FC<{ children: JSX.Element }>
    Icon: (props: IBaseIconProps) => JSX.Element
}

export const createIconContext = ({
    icons,
}: IcreateIconContextProps): contextReturnType => {
    const Provider: FC<{ children: JSX.Element }> = ({
        children,
    }): JSX.Element => {
        return (
            <IconContext.Provider value={icons}>
                {children}
            </IconContext.Provider>
        )
    }

    return { Icon, Provider }
}
