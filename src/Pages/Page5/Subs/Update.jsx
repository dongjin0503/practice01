import { useState } from "react"
import axios from 'axios'

function Update5({ staffs, setStaffs }) {

    const [staff, setStaff] = useState({
        id: "",
        name: "",
        phone: ""
    });

    const handleChange = ((e) => {
        const { name, value } = e.target;

        setStaffs((prev) => ({
            ...prev,
            [name]: value
        }));
    })


    const handleClick = () => {
        axios.put(`http://localhost/staffs/${staff.id}`, staff).then(()=>{
            axios.get("http://localhost/staffs").then((rest)=>{
                setStaff(rest.data);
            });
        });
    }

    return (
        <div>
            <input type="text" name="id" value={staff.id} onChange={handleChange} placeholder="수정할 id입력" />
            <input type="text" name="name" value={staff.name} onChange={handleChange} placeholder="수정할 메뉴 입력" />
            <input type="text" name="phone" value={staff.phone} onChange={handleChange} placeholder="수정할 가격 입력" />
            <button onClick={handleClick}>수정</button>
        </div>

    )
}

    export default Update5;