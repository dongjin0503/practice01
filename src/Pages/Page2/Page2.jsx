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
                <div className={styles.rightheader}>
                    <div><Link to={"read"}>목록(Read)</Link></div>
                    <div><Link to={"create"}>등록(Create)</Link></div>
                    <div><Link to={"update"}>수정(Update)</Link></div>
                    <div><Link to={"delete"}>삭제(Delete)</Link></div>
                </div>
                <Outlet />
            </div>
        </div>
    );
    
    }
    






export default Page2;