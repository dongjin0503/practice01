import { Link } from 'react-router-dom'
import styles from './Page1.module.css'

const Page1 = ({ menus, stocks, orders, staffs }) => {

    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <div><Link to={"/system/page1"}>대시보드</Link></div>
                <div><Link to={"/system/page2"}>주문관리</Link></div>
                <div><Link to={"/system/page3"}>메뉴관리</Link></div>
                <div><Link to={"/system/page4"}>재고관리</Link></div>
                <div><Link to={"/system/page5"}>직원관리</Link></div>
            </div>
            <div className={styles.right}>
                <h3>대시보드</h3>
                <table border={1} align='center'>
                    <thead>
                        <tr>
                        <th>구분</th>
                        <th>수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>메뉴 개수</td>
                            <td>{menus.length}</td>
                        </tr>
                        <tr>
                            <td>재고 품목 수</td>
                            <td>{stocks.length}</td>
                        </tr>
                        <tr>
                            <td>직원 수</td>
                            <td>{staffs.length}</td>
                        </tr>
                        <tr>
                            <td>주문 기록 수</td>
                            <td>{orders.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Page1;