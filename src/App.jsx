import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'
import System from './System/System';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
import Page5 from './Pages/Page5/Page5';


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
          <Route path="delete" element={<Delete />}></Route>
        </Route>
        <Route path="page3" element={<Page3 />}>
          <Route index element={<Read menus={menus} />}></Route>
          <Route path="read" element={<Read menus={menus} />}></Route>
          <Route path="create" element={<Create setMenus={setMenus} />}></Route>
          <Route path="update" element={<Update setMenus={setMenus} />}></Route>
          <Route path="delete" element={<Delete setMenus={setMenus} />}></Route>
        </Route>
        <Route path="page4" element={<Page4 />}>
          <Route index element={<Read />}></Route>
          <Route path="read" element={<Read />}></Route>
          <Route path="create" element={<Create />}></Route>
          <Route path="update" element={<Update />}></Route>
          <Route path="delete" element={<Delete />}></Route>
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
