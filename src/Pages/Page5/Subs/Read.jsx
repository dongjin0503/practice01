import { useState } from "react";


function Read5({ staffs }) {

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
                {staffs.map((staff) => (
                    <tr key={staff.id}>
                        <td>{staff.id}</td>
                        <td>{staff.name}</td>
                        <td>{staff.phone}</td>
                    </tr>
                ))}

            </tbody>
        </table>

    );
}

export default Read5;