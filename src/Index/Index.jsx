import { useState } from 'react'
import './App.css'
import { useNavigate } from "react-route-dom"

function App() {

    const navigate = useNavigate();
    
   const handleClick = ()=> {
      navigate("/Page1");  
   }




  return (
    <div>
        <input type="text" placeholder='id를 입력하세요' />
        <input type="text" placeholder='pw를 입력하세요' />
        <div><button onClick={handleClick}>로그인</button>
        </div>
    </div>
  )
}

export default App