import { useState } from 'react'

import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'

function Add() {
    const [menu, setMenu]= useState({
        id:"", menu: "", price:""
    });

    const handleChange = (e)=>{
        const {name, value} = e.target
        setMenu((prev)=>({
        ...prev, [name]: value
        }))
    }
    
    const handleClick = ()=>{

    }


    return(
        <div>
            <div> 
                <input name='id' value={menu.id} onChange={handleChange} type="text" placeholder='주문번호를 입력하세요' />
                <input name="menu" value={menu.menu} onChange={handleChange} type='text' placeholder='상품명을 입력하세요' />
                <input name='price' value={menu.price} onChange={handleChange} type="text" placeholder='가격을 입력하세요' /> 
                <button onClick={handleClick}>등록</button>
            </div>

        </div>
    )
}

export default create;