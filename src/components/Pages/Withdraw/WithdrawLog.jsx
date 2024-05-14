import { Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { API_HOST } from "../../../constant";
import axios from "axios";

export default function WithdrawLog() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const url = `${API_HOST}/withdraw/all`;

        axios.get(url, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setLogs(response.data.withdraws);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <TableContainer component={Paper} heigh="100%">
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>No.</b></TableCell>
                        <TableCell align="right"><b>Username</b></TableCell>
                        <TableCell align="right"><b>Bank Username</b></TableCell>
                        <TableCell align="right"><b>Bank</b></TableCell>
                        <TableCell align="right"><b>E-mail</b></TableCell>
                        <TableCell align="right"><b>Phone</b></TableCell>
                        <TableCell align="right"><b>CPF Number</b></TableCell>
                        <TableCell align="right"><b>Status</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((row,i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {i+1}
                            </TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.bankUsername}</TableCell>
                            <TableCell align="right">{row.bankInfo.name} Rs</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.identification}</TableCell>
                            <TableCell align="right">{
                                row.status === 'PENDING' ?
                                    <Chip label='PENDING' size="small" /> :
                                    row.status === 'ACCEPT' ?
                                        <Chip color="success" label='ACCEPTED' size="small" /> :
                                        <Chip label='NOT START' size='small' />
                            }</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    )
}