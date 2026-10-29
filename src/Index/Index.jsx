import { useNavigate } from "react-router-dom"

const Index = () => {

    const navigate = useNavigate();
    
   const handleClick = ()=> {
      navigate("/system");  
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

export default Index;