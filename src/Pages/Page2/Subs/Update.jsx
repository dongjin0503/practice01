import { useState } from "react"


function Update({menus, setmenus}){
    
    const [menu, setMenu]= useState({
        id:"",
        menu:"",
        price:""
        });
    
    const handleChange= ((e)=>{
        const {name, value} = e.target;
        
        setMenu((prev)=>({
            ...prev, 
            [name]:value
        }));
    })

    const handleClick=({menus})=>{
        setMenus({
            ...menus, 
        })
    }

    return(
        <div>
            <input type="text" name="id" value={menu.id}  onChange={handleChange} placeholder="수정할 id입력"/>
            <input type="text" name="menu" value={menu.menu} onChange={handleChange}  placeholder="수정할 메뉴 입력"/>
            <input type="text" name="price" value={menu.price} onChange={handleChange}  placeholder="수정할 가격 입력"/>
            <button onClick={handleClick}>수정</button>
        </div>

    )
}