import { useState } from 'react'
import axios from 'axios';


function Create2({orders, setOrders}) {
    const [order, setOder] = useState({
         item: "", total: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setOder((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleClick = () => {
        axios.post("http://localhost/orders", order).then(()=>{
            setOrders(prev=>[...prev, order]);
        });
    }



    return (
        <div>
            <div>
               
                <input name="item" value={order.item} onChange={handleChange} type='text' placeholder='상품명을 입력하세요' />
                <input name='total' value={order.total} onChange={handleChange} type="text" placeholder='가격을 입력하세요' />
                <button onClick={handleClick}>등록</button>
            </div>

        </div>
    )
}

export default Create2;