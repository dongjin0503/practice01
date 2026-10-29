import { useState } from 'react'


function Create5({ setStaffs}) {
    const [staff, setStaff] = useState({
        id: "", name: "", phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setStaff((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleClick = () => {
        setStaffs((prev) => [
            ...prev,
            {
                id: staff.id,
                name: staff.name,
                phone: staff.phone
            }
        ]);



    return (
        <div>
            <div>
                <input name='id' value={staff.id} onChange={handleChange} type="text" placeholder='주문번호를 입력하세요' />
                <input name="name" value={staff.name} onChange={handleChange} type='text' placeholder='상품명을 입력하세요' />
                <input name='phone' value={staff.phone} onChange={handleChange} type="text" placeholder='가격을 입력하세요' />
                <button onClick={handleClick}>등록</button>
            </div>

        </div>
    )
}
}
export default Create5;