import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Update4 = ({ setStocks }) => {

    const navi = useNavigate();

    const [upTarget, setUpTarget] = useState({
        id: "", name: "", stock: ""
    })
    const handleUp = (e) => {
        const { name, value } = e.target;
        setUpTarget(prev => ({ ...prev, [name]: value }));
    }
    const updatebtn = () => {
        axios.put("http://localhost/stocks/${upTarget.id}").then((rest)=>{
            setStocks(rest.data);
            navi("/system/page4/read")
        });
    }
    return (
        <div>
            <fieldset>
                <legend>UPDATE</legend>
                <input name='id' type='text' placeholder='수정할 재고의 ID' value={upTarget.id} onChange={handleUp} />
                <input name='name' type='text' placeholder='수정할 재고 NAME' value={upTarget.name} onChange={handleUp} />
                <input name='stock' type='text' placeholder='수정할 재고 수량' value={upTarget.stock} onChange={handleUp} />
                <button onClick={updatebtn}>등록</button>
            </fieldset>
        </div>
    );
}

export default Update4;