import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CustomizableButton from '../CustomizableButton';

const CustomizableTableProductsSelected = (props) => {
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
                                        <TableCell align='left'></TableCell>
                                        <TableCell align='left'></TableCell>
                                        <TableCell align='left'></TableCell>
                                        <TableCell align='left'></TableCell>
                                        <TableCell align='left'></TableCell>
                                        <TableCell align='left'>
                                            <CustomizableButton marginRight={8} variant={'contained'} text='Edit' />
                                            <CustomizableButton variant={'contained'} text='Delete' />
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

CustomizableTableProductsSelected.propTypes = {
    tableHeaders: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default CustomizableTableProductsSelected