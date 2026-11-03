
import { useState } from "react";
import axios from "axios";

function Delete2({ setOrders }) {
    const [remove, setRemove] = useState({ id: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRemove((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = () => {
        axios.delete(`http://localhost/orders/${remove.id}`)
            .then(() => axios.get("http://localhost/orders"))
            .then((rest) => setOrders(rest.data))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <input type="text" name="id" value={remove.id} onChange={handleChange} placeholder="삭제할 id 입력하세요" />
            <button onClick={handleClick}>삭제</button>
        </div>
    );
}

export default Delete2;
