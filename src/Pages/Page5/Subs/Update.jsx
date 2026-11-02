import { useState } from "react"


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
        setStaff(
            staffs.map((seq) =>
                staff.id == seq.id({
                ...seq,
                name: staff.name,
                phone: staff.phone
            })
            ))
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