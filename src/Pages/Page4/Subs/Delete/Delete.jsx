import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Delete = ({ setStocks }) => {

    const navi = useNavigate();
    const [delTarget, setDelTarget] = useState("");
    const deletebtn = () => {
        setStocks(prev => {
            prev.filter(e => {
                navi("/system/page4/read");
                return (e.id != delTarget);
            })
        })
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

export default Delete;