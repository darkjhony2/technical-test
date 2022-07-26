import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CustomizableButton from '../CustomizableButton';
import * as api from '../../api/orderApi'

const CustomizableTableOrders = (props) => {


    async function deleteOrder(id) {
        await api.deleteOrder(id)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            {props.tableHeaders.map((h, idx) => {
                                return (
                                    <TableCell>{h}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((d, idx) => {
                                return (
                                    <TableRow>
                                        <TableCell align='left'>{d.id}</TableCell>
                                        <TableCell align='left'>{d.orderNumber}</TableCell>
                                        <TableCell align='left'>{d.date}</TableCell>
                                        <TableCell align='left'>{d.products}</TableCell>
                                        <TableCell align='left'>{d.finalPrice}</TableCell>
                                        <TableCell align='left'>
                                            <CustomizableButton marginRight={8} variant={'contained'} text='Edit' />
                                            <CustomizableButton variant={'contained'} text='Delete' executeFunction={e => deleteOrder(d.id)} />
                                        </TableCell>
                                    </TableRow>);
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

CustomizableTableOrders.propTypes = {
    tableHeaders: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default CustomizableTableOrders