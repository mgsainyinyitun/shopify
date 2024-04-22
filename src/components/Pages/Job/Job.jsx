import { Box } from "@mui/material";
import MerchantData from "./MerchantData";
import MerchantLog from "./MerchantLog";
import { useEffect, useState } from "react";
import { API_HOST } from "../../../constant";
import axios from "axios";

function Job() {

    const [contractMerchant, setContractMerchant] = useState(null);
    const [totalTasks, setTotalTasks] = useState(0);
    const [currentTask,setCurrentTask] = useState(0);

    useEffect(() => {
        const url = `${API_HOST}/contract/current`;
        const token = localStorage.getItem('accessToken');
        axios.get(url, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then(response => {
            console.log(response.data);
            setContractMerchant(response.data.merchant);
            if(response.data.totalTasks)setTotalTasks(response.data.totalTasks);
            if(response.data.currentTask)setCurrentTask(response.data.currentTask);
            
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <Box mt={10}>
            <MerchantData 
                merchant={contractMerchant}
                totalTasks={totalTasks}
                currentTask={currentTask}
            />
            <MerchantLog />
        </Box>
    );
}

export default Job; 