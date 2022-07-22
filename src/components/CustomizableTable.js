import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CustomizableButton from './CustomizableButton';

const CustomizableTable = (props) => {
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
                                        <TableCell align='left'>{d.Order}</TableCell>
                                        <TableCell align='left'>{d.date}</TableCell>
                                        <TableCell align='left'>{d.Products}</TableCell>
                                        <TableCell align='left'>{d.FinalPrice}</TableCell>
                                        <TableCell align='left'>
                                            <CustomizableButton marginRight={8} variant={'contained'} text='Add' />
                                            <CustomizableButton variant={'contained'} text='Edit' />
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

CustomizableTable.propTypes = {
    tableHeaders: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default CustomizableTable