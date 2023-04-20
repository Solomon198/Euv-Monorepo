import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import {
    type ILoaderCircularProps,
    type ILoaderLinearProps,
    ELoader,
    type CircularProgressProps,
    type LinearProgressProps,
} from './types'

export const Loader = ({
    type,
    ...props
}: ILoaderCircularProps | ILoaderLinearProps): JSX.Element => {
    if (type === ELoader.Linear) {
        return <LinearProgress {...(props as LinearProgressProps)} />
    }
    return <CircularProgress {...(props as CircularProgressProps)} />
}
