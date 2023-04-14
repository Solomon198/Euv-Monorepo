import { type FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Icon } from '../../components/Icon'

const Playground: FC = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box>
                <Icon size={50} color="primary" name="Calender" />
                <Icon size={100} color="secondary" name="Calender" />
                <Icon size={150} color="primary" name="Calender" />
                <Icon size={200} color="secondary" name="Calender" />
                <Icon size={250} color="primary" name="Calender" />
            </Box>
        </Container>
    )
}

export default Playground
