import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Delete = ({ setMenus }) => {

    const navi = useNavigate();
    const [delTarget, setDelTarget] = useState("");
    const deletebtn = () => {
        setMenus(prev => {
            prev.filter(e => {
                navi("/system/page3/read");
                return (e.id != delTarget);
            })
        })
    }
    return (
        <div>
            <fieldset>
                <legend>DELETE</legend>
                <input type='text' placeholder='삭제할 메뉴의 ID' value={delTarget} onChange={e => { setDelTarget(e.target.value) }} />
                <button onClick={deletebtn}>등록</button>
            </fieldset>
        </div>
    );
}

export default Delete;