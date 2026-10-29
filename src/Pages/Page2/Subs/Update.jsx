import { useState } from "react"


function Update2({ orders, setOrders }) {

    const [order, setOrder] = useState({
        id: "",
        item: "",
        total: ""
    });

    const handleChange = ((e) => {
        const { name, value } = e.target;

        setOrder((prev) => ({
            ...prev,
            [name]: value
        }));
    })


    const handleClick = () => {
        setOrders(
            orders.map((seq) =>
                order.id == seq.id({
                ...seq,
                item: order.item,
                total: order.total
            })
            ))
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