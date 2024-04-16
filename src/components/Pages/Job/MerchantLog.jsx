import {Paper, Box, Typography,Table,TableContainer,TableHead,TableCell,TableRow,TableBody } from "@mui/material";

export default function MerchantLog() {
    function createData(
        No,
        merchant,
        task_number,
        order_price,
        commission,
        working_time,
        state
    ) {
        return { No, merchant, task_number, order_price, commission,working_time,state };
    }

    const rows = [
        createData(1, 159, 6.0, 24, 4.0,'5:20','A'),
        createData(2, 237, 9.0, 37, 4.3,'17:20','B'),
        createData(3, 262, 16.0, 24, 6.0,'5:20','A'),
        createData(4, 305, 3.7, 67, 4.3,'6:20','A'),
        createData(5, 356, 16.0, 49, 3.9,'8:20','A'),
    ];

    return (
        <Box mt={5}>
            <Typography mb={3}>
                Trader Task Logs (0)
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Number of order</TableCell>
                            <TableCell align="right">Merchant</TableCell>
                            <TableCell align="right">Task number</TableCell>
                            <TableCell align="right">Order price</TableCell>
                            <TableCell align="right">Commission</TableCell>
                            <TableCell align="right">Working time</TableCell>
                            <TableCell align="right">State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.No}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.No}
                                </TableCell>
                                <TableCell align="right">{row.merchant}</TableCell>
                                <TableCell align="right">{row.task_number}</TableCell>
                                <TableCell align="right">{row.order_price}</TableCell>
                                <TableCell align="right">{row.commission}</TableCell>
                                <TableCell align="right">{row.working_time}</TableCell>
                                <TableCell align="right">{row.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}

