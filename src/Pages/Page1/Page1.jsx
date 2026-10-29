import { Link } from 'react-router-dom'
import styles from 'Page1.module.css'

const Page1 = () => {

    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <div><Link to={"page1"}>대시보드</Link></div>
                <div><Link to={"page2"}>주문관리</Link></div>
                <div><Link to={"page3"}>메뉴관리</Link></div>
                <div><Link to={"page4"}>재고관리</Link></div>
                <div><Link to={"page1"}>직원관리</Link></div>
            </div>
            <div className={styles.right}>
                표
            </div>
        </div>
    );
}

export default Page1;