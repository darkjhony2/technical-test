import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomizableInput from '../components/CustomizableInput';
import CustomizableTable from '../components/CustomizableTable';
import CustomizableTitle from '../components/CustomizableTitle';

const AddEditOrder = (props) => {

    let headersProducts = ['ID', 'Name', 'Unit Price', 'Qty', 'Total Price', 'Options'];
    const [idEdit, setIdEdit] = useState(null);
    const [orderNumber, setOrderNumber] = useState("");
    const [date, setDate] = useState("");
    const [numberOfProducts, setNumberOfProducts] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    let params = useParams();

    useEffect(() => {
        console.log(params)
        if (params.id != 'new') {
            setIdEdit(params.id.replace(":", ""))
        }
    }, [params])



    return (
        <>
            <div className='title'>
                <CustomizableTitle text={idEdit != null ? "Edit Order" : "Add Order"} />
            </div>
            <div className='mt-4 col-6'>
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
            </div>
            <div className='mt-4 col-6'>
                <CustomizableTable tableHeaders={headersProducts} />
            </div>

        </>
    )
}


export default AddEditOrder