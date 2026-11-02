


function Read2({ orders }) {

    return (

        <table>
            <thead>
                <tr>
                    <th>주문번호</th>
                    <th>주문상품</th>
                    <th>결제</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.item}</td>
                        <td>{order.total}</td>
                    </tr>
                ))}

            </tbody>
        </table>

    );
}

export default Read2;