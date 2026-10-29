import { useState } from "react";


function List({menus}){
   
 return (
        
                <table>
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>주문상품</th>
                        <th>결제</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu)=>(
                        <tr key={menu.id}>
                        <td>{menu.id}</td>
                        <td>{menu.menu}</td>
                        <td>{menu.price}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
           
    );
    }