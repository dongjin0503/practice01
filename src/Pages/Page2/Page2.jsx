import { useState } from 'react'

import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'


function List(){

 return (
        <div className={styles.body}>
            <div className={styles.left}>
                <div><Link to={"page1"}>대시보드</Link></div>
                <div><Link to={"page2"}>주문관리</Link></div>
                <div><Link to={"page3"}>메뉴관리</Link></div>
                <div><Link to={"page4"}>재고관리</Link></div>
                <div><Link to={"page1"}>직원관리</Link></div>
            </div>
            <div className={styles.right}>
                <table>
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>주문상품</th>
                        <th>결제</th>
                    </tr>
                </thead>
                <tbody>
                    menus.map<tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
    }
    




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

export default Page2;