import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Create3 = ({ setMenus }) => {

    const navi = useNavigate();


    const [addTarget, setAddTarget] = useState({
         name: "", price: ""
    })
    const handleAdd = (e) => {
        const { name, value } = e.target;
        setAddTarget(prev => ({ ...prev, [name]: value }));
    }
    const addbtn = () => {
    axios.post("http://localhost/menus", addTarget)
        .then(() => axios.get("http://localhost/menus"))
        .then((rest) => {
            setMenus(rest.data);
            navi("/system/page3/read");
        })
        .catch((err) => console.error(err));
};

    return (
        <div>
            <fieldset>
                <legend>ADD</legend>
                
                <input name='name' type='text' placeholder='NAME' value={addTarget.name} onChange={handleAdd} />
                <input name='price' type='text' placeholder='PRICE' value={addTarget.price} onChange={handleAdd} />
                <button onClick={addbtn}>등록</button>
            </fieldset>
        </div>
    );
}
export default Create3;