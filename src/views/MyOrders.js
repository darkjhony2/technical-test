import React from 'react'
import CustomizableButton from '../components/CustomizableButton'
import CustomizableTitle from '../components/CustomizableTitle'
import CustomizableTable from '../components/CustomizableTable'

const MyOrders = (props) => {

    const tableHeaders = ["ID", "Order #", "date", "# Products", "Final price", "Options"]
    const data = [
        { id: 1, Order: 'Snow', date: 'Jon', Products: 35, FinalPrice: 35 },
        { id: 2, Order: 'Lannister', date: 'Cersei', Products: 42, FinalPrice: 35 },
        { id: 3, Order: 'Lannister', date: 'Jaime', Products: 45, FinalPrice: 35 },
        { id: 4, Order: 'Stark', date: 'Arya', Products: 16, FinalPrice: 35 },
        { id: 5, Order: 'Targaryen', date: 'Daenerys', Products: null, FinalPrice: 35 },
        { id: 6, Order: 'Melisandre', date: null, Products: 150, FinalPrice: 35 },
        { id: 7, Order: 'Clifford', date: 'Ferrara', Products: 44, FinalPrice: 35 },
        { id: 8, Order: 'Frances', date: 'Rossini', Products: 36, FinalPrice: 35 },
        { id: 9, Order: 'Roxie', date: 'Harvey', Products: 65, FinalPrice: 35 },
    ];

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
                <CustomizableTable tableHeaders={tableHeaders} data={data} />
            </div>
        </>
    )
}

export default MyOrders