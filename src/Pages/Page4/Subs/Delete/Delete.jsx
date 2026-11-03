import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Delete4 = ({ setStocks }) => {

    const navi = useNavigate();
    const [delTarget, setDelTarget] = useState("");
    const deletebtn = () => {
        axios.deele('http://localhost/stock/${delTarhet}').then(()=>{
            axios.get("http://localhost/stocks").then((rest)=>{
                setStocks(rest.data);
                navi("system/page4/read");
            });
        });
    }
    return (
        <div>
            <fieldset>
                <legend>DELETE</legend>
                <input type='text' placeholder='삭제할 재고 ID' value={delTarget} onChange={e => { setDelTarget(e.target.value) }} />
                <button onClick={deletebtn}>등록</button>
            </fieldset>
        </div>
    );
}

export default Delete4;