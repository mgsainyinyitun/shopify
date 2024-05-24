import { Typography, Paper, Box, Avatar, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react";
import { getImageFromDb } from "../../../utils/ImageUtils";
import TradeData from "./TradeData";

export default function MerchantData({ merchant,totalTasks,currentTask,finishedTasks }) {

    const [imageData, setImageData] = useState(null);
    const [progress, setProgress] = useState(0);

    if (merchant !== null) {
        getImageFromDb(merchant.imageUuid, setImageData)
    }

    useEffect(()=>{
        if(merchant){
            setProgress(((finishedTasks)/totalTasks) * 100);
        }
    })
    return (
        <Box>
            <Typography variant='h6' color={'gray'} mb={3}>
                Contracted Merchant Data
            </Typography>
            {
                merchant === null ?
                    (<Paper elevation={0} sx={{ background: 'rgba(250,218,221, 0.4)', color: 'rgb(255,0,0)' }} >
                        <Box sx={{ background: 'rgba(250,218,221, 1)', height: 10 }}>
                        </Box>
                        <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                            No signature information
                        </Box>
                    </Paper>) :
                    (<Box m={1} p={1} sx={{ borderRadius: 1.5, background: 'rgba(0,255,0,0.03)' }} display={'flex'}>
                        <Avatar sx={{ background: 'gray', width: 50, height: 50, border: '1px solid rgba(255,0,0,0.5)' }} src={imageData} />
                        <Box ml={2} width={'100%'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Typography variant="body1" color={'gray'}>
                                <b> {merchant.name} </b> — {merchant.description}
                            </Typography>
                            <LinearProgress variant="determinate" color="success" value={progress} />
                        </Box>
                    </Box>)
            }
            <TradeData 
             merchant = {merchant}
             totalTasks = {totalTasks}
             currentTask = {currentTask}
            />
        </Box>
    );
}