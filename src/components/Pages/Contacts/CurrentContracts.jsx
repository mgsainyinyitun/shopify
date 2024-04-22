import { Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_HOST } from "../../../constant";
import CurrentContractItem from "./CurrentContractItem";

export default function CurrentContracts() {
    const [contracts, setContracts] = useState([]);
    useEffect(() => {
        const url = `${API_HOST}/contract/all`;
        const token = localStorage.getItem('accessToken');
        axios.get(url, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then(response => {
            console.log(response.data);
            setContracts(response.data.contracts);
        }).catch(error => {
            console.log(error);
        })
    }, []);


    return (
        <>
            <Typography variant='h6' color={'gray'}>
                Current Contracts
            </Typography>

            {(
                contracts.length === 0 ?
                    <Paper elevation={0} sx={{ background: 'rgba(250,218,221, 0.3)', color: 'rgb(255,0,0)' }} >
                        <Box sx={{ background: 'rgba(250,218,221, 1)', height: 10 }}>
                        </Box>
                        <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                            No signature information
                        </Box>
                    </Paper> :
                    <>{
                        contracts.map(contract => {
                            return (
                                <CurrentContractItem
                                    key={contract.id}
                                    status={contract.status}
                                    merchant={contract.merchant}
                                />
                            );
                        })
                    }
                    </>
            )}

        </>
    );
}