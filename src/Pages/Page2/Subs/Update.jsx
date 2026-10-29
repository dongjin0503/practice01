import { useState } from "react"


function Update2({ menus, setMenus }) {

    const [menu, setMenu] = useState({
        id: "",
        menu: "",
        price: ""
    });

    const handleChange = ((e) => {
        const { name, value } = e.target;

        setMenu((prev) => ({
            ...prev,
            [name]: value
        }));
    })


    const handleClick = () => {
        setMenus(
            menus.map((seq) =>
                menu.id == seq.id{
                ...seq,
                menu: menu.menu,
                price: menu.price
            }
            ))
    }

    return (
        <div>
            <input type="text" name="id" value={menu.id} onChange={handleChange} placeholder="수정할 id입력" />
            <input type="text" name="menu" value={menu.menu} onChange={handleChange} placeholder="수정할 메뉴 입력" />
            <input type="text" name="price" value={menu.price} onChange={handleChange} placeholder="수정할 가격 입력" />
            <button onClick={handleClick}>수정</button>
        </div>

    )
}

    export default Update2;