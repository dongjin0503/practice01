import { useState } from 'react'

import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'

function Create2(order, setOrders) {
    const [order, setOder] = useState({
        id: "", item: "", total: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setOder((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleClick = () => {
        setOrders((prev) => [
            ...prev,
            {
                id: order.id,
                item: order.item,
                total: order.total
            }
        ]);


    return (
        <div>
            <div>
                <input name='id' value={order.id} onChange={handleChange} type="text" placeholder='주문번호를 입력하세요' />
                <input name="item" value={order.item} onChange={handleChange} type='text' placeholder='상품명을 입력하세요' />
                <input name='total' value={order.total} onChange={handleChange} type="text" placeholder='가격을 입력하세요' />
                <button onClick={handleClick}>등록</button>
            </div>

        </div>
    )
}
}
export default Create2;