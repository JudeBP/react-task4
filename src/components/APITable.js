import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const APITable = ({data}) => {
    return (
        <>
        <Box>
            
            <TableContainer component={Paper} style={{ marginTop: '40px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                onClick={() => showEmployeeModal(row)}
                                className="table-row"
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>
                                    { `${row.address.street} - ${row.address.suite}, ${row.address.city}` }
                                </TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.website}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </>
    )
}

export default APITable