import { useState } from "react";


function Delete2({ menus, setMenus }) {

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
        setMenus(
            menus.filter((seq) =>
                seq.id != remove.id)
        )
    }

    return (
        <div>
            <input type="text" name="id" value={remove.id} onChange={handleChange} placeholder="삭제할 id 입력하세요" />
            <button onClick={handleClick}>삭제</button>

        </div>
    )
}

export default Delete2;