import styles from 'Create.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Create4 = ({ setStocks }) => {

    const navi = useNavigate();


    const [addTarget, setAddTarget] = useState({
        id: "", name: "", stock: ""
    })
    const handleAdd = (e) => {
        const { name, value } = e.target;
        setAddTarget(prev => ({ ...prev, [name]: value }));
    }
    const addbtn = () => {
        setStocks(prev => {
            navi("/system/page4/read");
            return ({ ...prev, id: addTarget.id, name: addTarget.name, stock: addTarget.stock });
        })
    }

    return (
        <div>
            <fieldset>
                <legend>ADD</legend>
                <input name='id' type='text' placeholder='ID' value={addTarget.id} onChange={handleAdd} />
                <input name='name' type='text' placeholder='NAME' value={addTarget.name} onChange={handleAdd} />
                <input name='stock' type='text' placeholder='STOCK' value={addTarget.stock} onChange={handleAdd} />
                <button onClick={addbtn}>등록</button>
            </fieldset>
        </div>
    );
}
export default Create4;