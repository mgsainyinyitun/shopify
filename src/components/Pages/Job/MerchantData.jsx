import { Typography, Paper, Box, Chip, Rating } from "@mui/material"
import LightButton from "../../common/LightButton";

export default function MerchantData() {

    return (
        <>
            <Typography variant='h6' color={'gray'} mb={3}>
                contracted merchant data
            </Typography>
            <Paper elevation={0} sx={{ background: 'rgba(250,218,221, 0.4)', color: 'rgb(255,0,0)' }} >
                <Box sx={{ background: 'rgba(250,218,221, 1)', height: 10 }}>
                </Box>
                <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                    No signature information
                </Box>
            </Paper>

            <Typography variant='h6' color={'gray'} mb={3} mt={5}>
                Trader tasks
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection:'column',alignItems:'center'}}>
                        <Typography variant='body1' color={'gray'}>
                            Number of tasks
                        </Typography>
                        <Typography variant='body1' color={'gray'}>
                            <Chip label="0/0" variant="outlined" />
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection:'column',alignItems:'center'}}>
                        <Typography variant='body1' color={'gray'}>
                            Commission on this occasion
                        </Typography>
                        <Typography variant='body1' color={'gray'}>
                            ≈ 0Bs
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box sx={{ display: 'flex', flexDirection:'column',alignItems:'center'}}>
                        <Typography variant='body1' color={'gray'}>
                            Orde r price
                        </Typography>
                        <Typography variant='body1' color={'gray'}>
                            ≈ 0Bs
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection:'column',alignItems:'center'}}>
                        <Typography variant='body1' color={'gray'}>
                            Qualification requirements
                        </Typography>
                        <Typography variant='body1' color={'gray'}>
                            <Rating value={0} />
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <LightButton
                text = {'COMENZAR TRABAJO'}
            />
        </>
    );

}