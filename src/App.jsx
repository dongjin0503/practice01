import { useState } from 'react'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'
import System from './System/System';
import Page1 from './Pages/Page1/Page1';

import Page2 from './Pages/Page2/Page2';
import Create2 from './Pages/Page2/Subs/Create/Create';
import Read2 from './Pages/Page2/Subs/Read/Read';
import Update2 from './Pages/Page2/Subs/Update/Update';
import Delete2 from './Pages/Page2/Subs/Delete/Delete';

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
import Create5 from './Pages/Page5/Subs/Create/Create';
import Read5 from './Pages/Page5/Subs/Read/Read';
import Update5 from './Pages/Page5/Subs/Update/Update';
import Delete5 from './Pages/Page5/Subs/Delete/Delete';


function App() {
  const [menus, setMenus] = useState([
    { id: 1, name: '아메리카노', price: 4500 },
    { id: 2, name: '카페라떼', price: 5000 },
    { id: 3, name: '바닐라라떼', price: 5500 },
    { id: 4, name: '딸기스무디', price: 6000 },
    { id: 5, name: '치즈케이크', price: 6500 },
  ]);

  const [stocks, setStocks] = useState([
    { id: 1, name: '원두 200g', stock: 25 },
    { id: 2, name: '바닐라 시럽 1L', stock: 10 },
    { id: 3, name: '종이컵 1박스', stock: 500 },
    { id: 4, name: '우유 1L', stock: 30 },
  ]);

  const [orders, setOrders] = useState([
    { id: 101, item: '아메리카노 2잔', total: 9000 },
    { id: 102, item: '카페라떼 1잔', total: 5000 },
    { id: 103, item: '치즈케이크 1개', total: 6500 },
    { id: 104, item: '바닐라라떼 1잔', total: 5500 },
    { id: 105, item: '딸기스무디 2잔', total: 12000 },
    { id: 106, item: '아메리카노 1잔, 카페라떼 1잔', total: 9500 },
  ]);

  const [staffs, setStaffs] = useState([
    { id: 1, name: '김철수', phone: '010-1234-5678' },
    { id: 2, name: '이영희', phone: '010-9876-5432' },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/system" element={<System />}>
        <Route index element={<Page1 />}></Route>
        <Route path="page1" element={<Page1 />}></Route>
       
        <Route path="page2" element={<Page2 />}>
          <Route index element={<Read />}></Route>
          <Route path="read" element={<Read menus={menus}/>}></Route>
          <Route path="create" element={<Create menus={menus} setMenus={setMenus}/>}></Route>
          <Route path="update" element={<Update menus={menus} setMenus={setMenus}/>}></Route>
          <Route path="delete" element={<Delete menus={menus} setMenus={setMenus}/>}></Route>
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
          <Route index element={<Read />}></Route>
          <Route path="read" element={<Read />}></Route>
          <Route path="create" element={<Create />}></Route>
          <Route path="update" element={<Update />}></Route>
          <Route path="delete" element={<Delete />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App
