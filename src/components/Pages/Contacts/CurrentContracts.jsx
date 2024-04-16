import { Paper, Typography, Box } from "@mui/material";

export default function CurrentContracts() {
    return (
        <>
            <Typography variant='h6' color={'gray'}>
                Current Contracts
            </Typography>
            <Paper elevation={0} sx={{ background: 'rgba(250,218,221, 0.4)', color: 'rgb(255,0,0)' }} >
                <Box sx={{ background: 'rgba(250,218,221, 1)',height:10 }}>
                </Box>
                <Box sx={{padding:2,display:'flex',justifyContent:'center'}}>
                    No signature information
                </Box>
            </Paper>
        </>
    );
}