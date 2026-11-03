import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

import Index from './Index/Index';
import System from './System/System';
import Page1 from './Pages/Page1/Page1';

import Page2 from './Pages/Page2/Page2';
import Create2 from './Pages/Page2/Subs/Create';
import Read2 from './Pages/Page2/Subs/Read';
import Update2 from './Pages/Page2/Subs/Update';
import Delete2 from './Pages/Page2/Subs/Delete';

import Page3 from './Pages/Page3/Page3';
import Create3 from './Pages/Page3/Subs/Create/Create';
import Read3 from './Pages/Page3/Subs/Read/Read';
import Update3 from './Pages/Page3/Subs/Update/Update';
import Delete3 from './Pages/Page3/Subs/Delete/Delete';

import Page4 from './Pages/Page4/Page4';
import Create4 from './Pages/Page4/Subs/Create/Create';
import Read4 from './Pages/Page4/Subs/Read/Read';
import Update4 from './Pages/Page4/Subs/Update/Update';
import Delete4 from './Pages/Page4/Subs/Delete/Delete';

import Page5 from './Pages/Page5/Page5';
import Create5 from './Pages/Page5/Subs/Create';
import Read5 from './Pages/Page5/Subs/Read';
import Update5 from './Pages/Page5/Subs/Update';
import Delete5 from './Pages/Page5/Subs/Delete';


function App() {
  const [menus, setMenus] = useState([
    
  ]);

  const [stocks, setStocks] = useState([
    
  ]);

  const [orders, setOrders] = useState([
    
  ]);

  const [staffs, setStaffs] = useState([
    
  ]);

  useEffect(()=>{
    axios.get("http://localhost/menu").then(rest=>{
      setMenus(rest.data);
    });

    axios.get("http://localhost/stocks").then(rest=>{
      setStocks(rest.data);
    });
    axios.get("http://localhost/orders").then(rest=>{
      setOrders(rest.data);
    });

    axios.get("http://localhost/staffs").then(rest=>{
      setStaffs(rest.data);
    });
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/system" element={<System />}>
        <Route index element={<Page1 menus={menus} orders={orders} stocks={stocks} staffs={staffs} />}></Route>
        <Route path="page1" element={<Page1 menus={menus} orders={orders} stocks={stocks} staffs={staffs} />}></Route>

        <Route path="page2" element={<Page2 />}>
          <Route index element={<Read2 orders={orders} />}></Route>
          <Route path="read" element={<Read2 orders={orders} />}></Route>
          <Route path="create" element={<Create2 orders={orders} setOrders={setOrders} />}></Route>
          <Route path="update" element={<Update2 orders={orders} setOrders={setOrders} />}></Route>
          <Route path="delete" element={<Delete2 orders={orders} setOrders={setOrders} />}></Route>

        </Route>
        <Route path="page3" element={<Page3 />}>
          <Route index element={<Read3 menus={menus} />}></Route>
          <Route path="read" element={<Read3 menus={menus} />}></Route>
          <Route path="create" element={<Create3 setMenus={setMenus} />}></Route>
          <Route path="update" element={<Update3 setMenus={setMenus} />}></Route>
          <Route path="delete" element={<Delete3 setMenus={setMenus} />}></Route>
        </Route>
        <Route path="page4" element={<Page4 />}>
          <Route index element={<Read4 stocks={stocks} />}></Route>
          <Route path="read" element={<Read4 stocks={stocks} />}></Route>
          <Route path="create" element={<Create4 setStocks={setStocks} />}></Route>
          <Route path="update" element={<Update4 setStocks={setStocks} />}></Route>
          <Route path="delete" element={<Delete4 setStocks={setStocks} />}></Route>
        </Route>
        <Route path="page5" element={<Page5 />}>
          <Route index element={<Read5 staffs={staffs} />}></Route>
          <Route path="read" element={<Read5 staffs={staffs} />}></Route>
          <Route path="create" element={<Create5 staffs={staffs} setStaffs={setStaffs} />}></Route>
          <Route path="update" element={<Update5 staffs={staffs} setStaffs={setStaffs} />}></Route>
          <Route path="delete" element={<Delete5 staffs={staffs} setStaffs={setStaffs} />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App
