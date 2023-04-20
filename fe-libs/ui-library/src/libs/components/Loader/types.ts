import { type LinearProgressProps as MUILinearProgressProps } from '@mui/material/LinearProgress'
import { type CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress'

export { type LinearProgressProps } from '@mui/material/LinearProgress'
export { type CircularProgressProps } from '@mui/material/CircularProgress'

export enum ELoader {
    Linear = 'Linear',
    Circular = 'Circular',
}
export type TLoader = 'Linear' | 'Circular'

export interface ILoaderCircularProps extends MUICircularProgressProps {
    type: TLoader
}

export interface ILoaderLinearProps extends MUILinearProgressProps {
    type: TLoader
}
