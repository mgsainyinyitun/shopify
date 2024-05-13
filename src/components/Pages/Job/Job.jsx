import { Box } from "@mui/material";
import MerchantData from "./MerchantData";
import MerchantLog from "./MerchantLog";
import { useEffect, useState } from "react";
import { API_HOST } from "../../../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";

function Job() {

    const [contractMerchant, setContractMerchant] = useState(null);
    const [totalTasks, setTotalTasks] = useState(0);
    const [currentTask, setCurrentTask] = useState(0);
    const [finishedTasks,setFinishedTasks] = useState(0);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `${API_HOST}/contract/current`;
        const token = localStorage.getItem('accessToken');

        axios.get(url, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then(response => {
            console.log('response:', response.data);
            if (response.data) {
                setContractMerchant(response.data.merchant);
                if (response.data.totalTasks) setTotalTasks(response.data.totalTasks);
                if (response.data.currentTask) setCurrentTask(response.data.currentTask);
                if(response.data.finishedTasks) setFinishedTasks(response.data.finishedTasks);
            }
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            console.log(error);
            navigate("/signin");
        })
    }, []);

    return (
        <>
            {
                loading ? <Loading /> : <Box mt={10}>
                    <MerchantData
                        merchant={contractMerchant}
                        totalTasks={totalTasks}
                        currentTask={currentTask}
                        finishedTasks={finishedTasks}
                    />
                    <MerchantLog />
                </Box>
            }
        </>
    );
}

export default Job; 