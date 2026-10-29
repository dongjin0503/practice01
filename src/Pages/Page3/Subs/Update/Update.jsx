import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Update3 = ({ setMenus }) => {

    const navi = useNavigate();

    const [upTarget, setUpTarget] = useState({
        id: "", name: "", price: ""
    })
    const handleUp = (e) => {
        const { name, value } = e.target;
        setUpTarget(prev => ({ ...prev, [name]: value }));
    }
    const updatebtn = () => {
        setMenus(prev => (prev.map(e => {
            if (e.id == upTarget.id) {
                navi("/system/page3/read");
                return {...e,name:upTarget.name,price:upTarget.price};
            } else {
                return e;
            }
        })))
    }
    return (
        <div>
            <fieldset>
                <legend>UPDATE</legend>
                <input name='id' type='text' placeholder='수정할 메뉴의 ID' value={upTarget.id} onChange={handleUp} />
                <input name='name' type='text' placeholder='수정할 메뉴 NAME' value={upTarget.name} onChange={handleUp} />
                <input name='price' type='text' placeholder='수정할 메뉴 PRICE' value={upTarget.price} onChange={handleUp} />
                <button onClick={updatebtn}>등록</button>
            </fieldset>
        </div>
    );
}

export default Update3;