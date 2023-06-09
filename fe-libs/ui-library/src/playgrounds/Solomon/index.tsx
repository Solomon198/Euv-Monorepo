import { type FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Loader } from '../../libs/components/Loader'

const Playground: FC = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ width: '100%' }}>
                <Loader
                    thickness={10}
                    type="Linear"
                    variant="indeterminate"
                    color="primary"
                />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Loader
                    type="Linear"
                    variant="determinate"
                    color="secondary"
                    value={50}
                />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Loader
                    size={50}
                    type="Circular"
                    variant="determinate"
                    color="primary"
                    value={50}
                />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Loader
                    type="Circular"
                    variant="indeterminate"
                    color="success"
                />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Loader
                    size={50}
                    type="Circular"
                    variant="indeterminate"
                    color="secondary"
                    value={50}
                />
            </Box>
        </Container>
    )
}

export default Playground
