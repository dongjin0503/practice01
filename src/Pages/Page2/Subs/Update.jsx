
import { useState } from "react"
import axios from "axios";

function Update2({ orders, setOrders }) {

    const [order, setOrder] = useState({
        id: "",
        item: "",
        total: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setOrder((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleClick = () => {
        axios.put(`http://localhost/orders/${order.id}`, order).then(() => {
            axios.get("http://localhost/orders").then((rest) => {
                setOrders(rest.data);
            });
        });
    }

    return (
        <div>
            <input type="text" name="id" value={order.id} onChange={handleChange} placeholder="수정할 id입력" />
            <input type="text" name="item" value={order.item} onChange={handleChange} placeholder="수정할 메뉴 입력" />
            <input type="text" name="total" value={order.total} onChange={handleChange} placeholder="수정할 가격 입력" />
            <button onClick={handleClick}>수정</button>
        </div>
    )
}

export default Update2;
