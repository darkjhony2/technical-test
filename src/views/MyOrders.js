import React, { useEffect, useState } from 'react'
import CustomizableButton from '../components/CustomizableButton'
import CustomizableTitle from '../components/CustomizableTitle'
import CustomizableTableOrders from '../components/application/CustomizableTableOrders'
import * as api from '../api/orderApi'

const MyOrders = (props) => {

    const tableHeaders = ["ID", "Order #", "date", "# Products", "Final price", "Options"]
    const [data, setData] = useState([]);

    useEffect(() => {
        fillData()
    }, [])

    async function fillData(){
        let resp = await api.list();
        setData(resp);
    }
    

    function onNewClick() {
        window.location.href = "/add-order/new";
    }

    return (
        <>
            <div className='title'>
                <CustomizableTitle text='My Orders' />
            </div>
            <div style={{float: 'right', marginRight: '28%', marginTop: '5%'}}>
                <CustomizableButton executeFunction={onNewClick} variant={'contained'} text='New' />
            </div>
            <div style={{ marginTop: '5%', maxWidth: '50%', marginLeft: '25%' }}>
                <CustomizableTableOrders tableHeaders={tableHeaders} data={data} />
            </div>
        </>
    )
}

export default MyOrders