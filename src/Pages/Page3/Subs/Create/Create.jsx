import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Create3 = ({ setMenus }) => {

    const navi = useNavigate();


    const [addTarget, setAddTarget] = useState({
        id: "", name: "", price: ""
    })
    const handleAdd = (e) => {
        const { name, value } = e.target;
        setAddTarget(prev => ({ ...prev, [name]: value }));
    }
    const addbtn = () => {
        setMenus(prev => {
            navi("/system/page3/read");
            return ({ ...prev, id: addTarget.id, name: addTarget.name, price: addTarget.price });
        })
    }

    return (
        <div>
            <fieldset>
                <legend>ADD</legend>
                <input name='id' type='text' placeholder='ID' value={addTarget.id} onChange={handleAdd} />
                <input name='name' type='text' placeholder='NAME' value={addTarget.name} onChange={handleAdd} />
                <input name='price' type='text' placeholder='PRICE' value={addTarget.price} onChange={handleAdd} />
                <button onClick={addbtn}>등록</button>
            </fieldset>
        </div>
    );
}
export default Create3;