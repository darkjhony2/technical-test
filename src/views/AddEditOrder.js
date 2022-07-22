import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomizableTitle from '../components/CustomizableTitle';

const AddEditOrder = (props) => {

    const [idEdit, setIdEdit] = useState(null);
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
        </>
    )
}


export default AddEditOrder