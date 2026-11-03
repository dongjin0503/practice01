import { useState } from "react";
import axios from 'axios';

function Delete5({ setOders }) {

    const [remove, setRemove] = useState({
        id: ""
    });
    const handleChange = ((e) => {
        const { name, value } = e.target;

        setRemove((prev) => ({
            ...prev,
            [name]: value
        }))
    })
    const handleClick = () => {
        axios.delete(`http://localhost/staffs/${remove.id}`)
            .then(() => {
                axios.get('http://localhost/staffs')
                    .then((rest) => {
                        setStaffs(rest.data);
                    });
            });
    }

    return (
        <div>
            <input type="text" name="id" value={remove.id} onChange={handleChange} placeholder="삭제할 id 입력하세요" />
            <button onClick={handleClick}>삭제</button>

        </div>
    )
}

export default Delete5;