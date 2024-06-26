import { Paper, Box, Typography, Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Chip } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_HOST } from "../../../constant";

export default function MerchantLog() {
    const [logs, setLog] = useState([]);
    useEffect(() => {
        const url = `${API_HOST}/trade/log`;
        const token = localStorage.getItem('accessToken');
        axios.get(url, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then(response => {
            console.log(response.data);
            if (response.data) {
                setLog(response.data.tradeLogs)
            }
        }).catch(error => {
            console.log(error);
        })
    }, [])

    if (logs.length !== 0) {
        logs.sort((a, b) => {
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);

            return dateB - dateA;
        });
    }

    return (
        <Box mt={5} display='flex' flexDirection='column' alignItems='center'>
            <Typography mb={3}>
                Trader Task Logs ({logs.length})
            </Typography>
            <Box sx={{ width: '100%', overflow: 'auto' }}>
                <TableContainer component={Paper} sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell align="right">Merchant</TableCell>
                                <TableCell align="right">Task number</TableCell>
                                <TableCell align="right">Order price</TableCell>
                                <TableCell align="right">Commission</TableCell>
                                <TableCell align="right">Working time</TableCell>
                                <TableCell align="right">State</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {logs.map((row) => (
                                <TableRow
                                    key={row.No}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.orderId}
                                    </TableCell>
                                    <TableCell align="right">{row.merchant}</TableCell>
                                    <TableCell align="right">{row.taskNumber}</TableCell>
                                    <TableCell align="right">{row.orderPrice} Rs</TableCell>
                                    <TableCell align="right">{row.commission} %</TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="right">{
                                        row.state === 'PENDING' ?
                                            <Chip label='PENDING' size="small" /> :
                                            row.state === 'FINISHED' ?
                                                <Chip color="success" label='FINISHED' size="small" /> :
                                                <Chip label='NOT START' size='small' />
                                    }</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

