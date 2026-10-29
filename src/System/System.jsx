import { Outlet,useNavigate} from 'react-router-dom'
import styles from 'System.module.css'

const System = () => {

    const navi = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>매장 관리 시스템</h2>
                <button onClick={()=>{navi("/")}}>로그아웃</button>
            </div>
            <div className={styles.body}>
                <Outlet />
            </div>
        </div>
    );
}

export default System;