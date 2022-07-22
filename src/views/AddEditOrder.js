import { Box, Modal, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomizableTableProductsSelected from '../components/application/CustomizableTableProducts';
import CustomizableButton from '../components/CustomizableButton';
import CustomizableInput from '../components/CustomizableInput';
import CustomizableTitle from '../components/CustomizableTitle';

const AddEditOrder = (props) => {

    let headersProducts = ['ID', 'Name', 'Unit Price', 'Qty', 'Total Price', 'Options'];
    const [idEdit, setIdEdit] = useState(null);
    const [orderNumber, setOrderNumber] = useState("");
    const [date, setDate] = useState("");
    const [numberOfProducts, setNumberOfProducts] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [finalPrice, setFinalPrice] = useState("");
    let params = useParams();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        if (params.id != 'new') {
            setIdEdit(params.id.replace(":", ""))
        }
    }, [params])

    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        setDate(today);
    }, [])


    function openNewProductModal() {
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
    }

    return (
        <>
            <div className='title'>
                <CustomizableTitle text={idEdit != null ? "Edit Order" : "Add Order"} />
            </div>
            <div className='row'>
                <div className='mt-4 col-6' style={{ marginLeft: '5%' }}>
                    <div className='row'>
                        <div className='col-3'>
                            <CustomizableInput label='Order #' value={orderNumber} setValue={setOrderNumber} />
                        </div>
                        <div className='col-3'>
                            <CustomizableInput type={'date'} disabled={true} label='Date' value={date} setValue={setDate} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3'>
                            <CustomizableInput disabled={true} label='# Products' value={numberOfProducts} setValue={setNumberOfProducts} />
                        </div>
                        <div className='col-3'>
                            <CustomizableInput disabled={true} label='Final Price' value={finalPrice} setValue={setFinalPrice} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3 mt-4'>
                            <CustomizableButton variant={'contained'} text='Add Product' executeFunction={openNewProductModal} />
                        </div>
                    </div>
                </div>
                <div className='mt-4 col-5'>
                    <CustomizableTableProductsSelected tableHeaders={headersProducts} data={[]} />
                </div>
            </div>
            <Modal open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}


export default AddEditOrder